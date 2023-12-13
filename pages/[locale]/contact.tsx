import Head from 'next/head'
import { useState } from 'react'
import NavBar from 'src/components/NavBar'
import { Form, Formik, Field } from 'formik';
import { useRouter } from 'next/router';
import { get, find } from 'lodash';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../getStatic'
// import BG from '../public/assets/images/bg-contact.jpg'

interface BusinessTypeInterface {
    id: number
    name: string
}

interface initialInterface {
    name: string
    phone: string
    email: string
    business_type: number
    business_other: string
    appointment: string
    confirm_contact: boolean
}

const optionBusinessType = [
    { id: 1, name: "ธุรกิจขนาดเล็ก/ธุรกิจค้าปลีกรายย่อย" },
    { id: 2, name: "ธุรกิจร้านอาหาร" },
    { id: 3, name: "คลังสินค้า" },
    { id: 4, name: "อื่น ๆ (กรุณากรอกข้อมูล)" },
]

export default function Contact() {
    const [messageErrorName, setMessageErrorName] = useState<string>("กรุณากรอกชื่อ-นามสกุลผู้ติดต่อ")
    const [messageErrorEmail, setMessageErrorEmail] = useState<string>("กรุณากรอกอีเมล")
    const Router = useRouter()
    const { t } = useTranslation()

    const initialValues: initialInterface = {
        name: "",
        phone: "",
        email: "",
        business_type: 0,
        business_other: "",
        appointment: "",
        confirm_contact: false
    }

    const handleSubmit = async (values: initialInterface) => {
        if (values.confirm_contact === false) {
            let element = document.getElementById("confirm_contact")
            element?.classList.add("is-invalid")
            return false
        }

        let validate_status = true
        let name = values.name.split(" ")
        if (values.name === "") {
            setMessageErrorName("กรุณากรอกชื่อ-นามสกุลผู้ติดต่อ")
            let element = document.getElementById("name")
            element?.classList.add("is-invalid")
            validate_status = false
        }else{
            if(name.length != 2){
                setMessageErrorName("กรุณากรอกชื่อ-นามสกุลผู้ติดต่อให้ถูกต้อง")

                let element = document.getElementById("name")
                element?.classList.add("is-invalid")
                validate_status = false
            }
        }

        if (values.phone === "" || values.phone.length != 10) {
            let element = document.getElementById("phone")
            element?.classList.add("is-invalid")
            validate_status = false
        }

        if (values.email === "") {
            let element_alert = document.getElementById("alert_email")
            setMessageErrorEmail("กรุณากรอกอีเมล")
            let element = document.getElementById("email")
            element?.classList.add("is-invalid")
            validate_status = true
        } else {
            if (validateFormatEmail(values.email) === false) {
                let element_alert = document.getElementById("alert_email")
                setMessageErrorEmail("กรุณาอีเมลให้ถูกต้อง")
                let element = document.getElementById("email")
                element?.classList.add("is-invalid")
                validate_status = true
            }
        }

        if (values.business_type == 0) {
            let element = document.getElementById("business_type")
            element?.classList.add("is-invalid")
            validate_status = false
        }

        if (values.business_type == 4 && values.business_other === "") {
            let element = document.getElementById("business_other")
            element?.classList.add("is-invalid")
            validate_status = false
        }

        if (values.appointment === "") {
            let element = document.getElementById("appointment")
            element?.classList.add("is-invalid")
            validate_status = false
        }

        if (!validate_status) {
            return false
        }

        let request_data = {
            data: {
                platform: "pos",
                firstname: name[0],
                lastname: name[1],
                tel: values.phone,
                email: values.email,
                business_type_id: values.business_type,
                business_type: optionBusinessType[optionBusinessType.findIndex((p: any) => p.id == values.business_type)].name,
                business_type_other: "",
                time_to_contact: values.appointment,
                confirm_contact: 1
            }
        }

        const response = await fetch("https://api.eazysms.io/consumer-service/contacts/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request_data)
        });

        const { status } = response
        if(status === 200){
            await sendMail(values)
            Router.push("/contact-success.html")
        }
    }

    const validateFormatEmail = (email: string) => {
        let validRegex = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/

        if (email.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }

    const keyDownValidateEmail = (e: any) => {
        const regexEmail = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/
        var input = e.target
        var oldVal = input.value
        var regex = new RegExp(regexEmail, 'g')
        document.getElementById("email")?.classList.remove("is-invalid")

        setTimeout(function () {
            var newVal = input.value
            if (newVal != "") {
                if (!regex.test(newVal)) {
                    input.value = oldVal
                }
            } else {
                input.value = ""
            }
        }, 1)
    }

    const keyDownValidatePhone = (e: any) => {
        var input = e.target
        var oldVal = input.value
        var regex = new RegExp(/^[0-9]+$/, 'g')
        document.getElementById("phone")?.classList.remove("is-invalid")

        setTimeout(function () {
            var newVal = input.value
            if (newVal != "") {
                if (!regex.test(newVal)) {
                    input.value = oldVal
                }
            } else {
                input.value = ""
            }
        }, 1)
    }

    const sendMail = async (formValues: initialInterface) => {

        let messageBody = "มีผู้ใช้งานสนใจปรึกษา/สั่งซื้อบริการจากหน้าเว็บไซต์ eazyPOS"
        messageBody += `<br/>ชื่อ-นามสกุลผู้ติดต่อ : ${formValues.name}`
        messageBody += `<br/>เบอร์โทร : ${formValues.phone}`
        messageBody += `<br/>อีเมล : ${formValues.email}`
        let buTypeId = parseInt(`${formValues.business_type}`)
        let buTypeName = get(find(optionBusinessType, { id: buTypeId}), 'name', "")
        if(buTypeId === 4) {
            messageBody += `<br/>ประเภทธุรกิจ : อื่นๆ`
            messageBody += `<br/>ระบุประเภทธุรกิจกรณีเลือกเป็นอื่นๆ : ${formValues.business_other}`
        } else {
            messageBody += `<br/>ประเภทธุรกิจ : ${buTypeName}`
        }
        messageBody += `<br/>ช่วงเวลาที่สามารถติดต่อกลับ : ${formValues.appointment}`

        let requestData = {
            "to": ["contact@fullteam.tech"],
            // "to": ["arm.peerawich@gmail.com"],
            "subject": "มีผู้ใช้งานสนใจปรึกษา/สั่งซื้อบริการจากหน้าเว็บไซต์ eazyPOS ",
            "from": "eazyPOS",
            "template": "empty",
            "body": messageBody
        }
        await fetch("https://pos-wapi.fullteam.tech/email-service/email-message", {
        // await fetch("https://staging-pos-wapi.devfullteam.tech/email-service/email-message", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" />
                <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
                <meta name="generator" content="Hugo 0.104.2" />
            </Head>

            <NavBar />

            <section className="bg-contact-page pb-5">
                <div className="container">
                    <h3 className="text-center text-white py-5 lh-bas mb-0">ต้องการคำปรึกษา หรือข้อมูลเพิ่มเติม <br />
                        สามารถฝากข้อมูลเพื่อให้ทีมงานติดต่อกลับ พร้อมรับสิทธิพิเศษสำหรับคุณ!</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                    >
                        {({
                            setFieldValue, values, dirty, isValid
                        }) => (
                            <Form className='row g-3 needs-validation' noValidate>
                                <div className="row">
                                    <div className="col-md-6 position-relative my-2">
                                        <label htmlFor="name" className="form-label text-white h6"><span className="text-danger">*</span>
                                            ชื่อ-นามสกุลผู้ติดต่อ</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="ชื่อ-นามสกุล"
                                            onKeyDown={() => {
                                                document.getElementById("name")?.classList.remove("is-invalid")
                                            }}
                                            required
                                        />
                                        <div className="invalid-feedback" id="alert_name">
                                            {messageErrorName}
                                        </div>
                                    </div>
                                    <div className="col-md-6 position-relative my-2">
                                        <label htmlFor="phone" className="form-label text-white h6">
                                            <span className="text-danger">*</span> เบอร์โทรศัพท์
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="เบอร์โทรศัพท์"
                                            maxLength={10}
                                            onKeyDown={keyDownValidatePhone}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 position-relative my-2">
                                        <label htmlFor="email" className="form-label text-white h6">
                                            <span className="text-danger">*</span> อีเมล
                                        </label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="อีเมล"
                                            onKeyDown={keyDownValidateEmail}
                                            required
                                        />
                                        <div className="invalid-feedback" id="alert_email">
                                            {messageErrorEmail}
                                        </div>
                                    </div>
                                    <div className="col-md-6 position-relative my-2">
                                        <label htmlFor="business_type" className="form-label text-white h6"><span className="text-danger">*</span>
                                            ประเภทธุรกิจ</label>
                                        <Field
                                            className="form-select"
                                            as="select"
                                            id="business_type"
                                            name="business_type"
                                            onClick={() => {
                                                document.getElementById("business_type")?.classList.remove("is-invalid")
                                            }}
                                            required
                                        >
                                            <option value={0} disabled>เลือกประเภทธุรกิจของคุณ</option>
                                            {
                                                optionBusinessType.map((item: BusinessTypeInterface) => {
                                                    return (
                                                        <option key={`bu-type-${item.id}`} value={item.id}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </Field>
                                        <div className="invalid-feedback">
                                            กรุณาเลือกประเภทธุรกิจ
                                        </div>
                                    </div>
                                </div>
                                <div id="other_form" className="row" style={{ display: values.business_type == 4 ? "block" : "none" }}>
                                    <div className="col position-relative my-2">
                                        <label htmlFor="business_other" className="form-label text-white h6"><span className="text-danger">*</span>
                                            ระบุประเภทธุรกิจของคุณ</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="business_other"
                                            name="business_other"
                                            placeholder="ระบุ"
                                            onKeyDown={() => {
                                                document.getElementById("business_other")?.classList.remove("is-invalid")
                                            }}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            กรุณาระบุประเภทธุรกิจของคุณ
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 position-relative my-2">
                                        <label htmlFor="validationCustom03" className="form-label text-white h6"><span className="text-danger">*</span>
                                            ช่วงเวลาที่สามารถติดต่อกลับ</label>
                                        <Field
                                            className="form-select"
                                            as="select"
                                            id="appointment"
                                            name="appointment"
                                            onClick={() => {
                                                document.getElementById("appointment")?.classList.remove("is-invalid")
                                            }}
                                            required
                                        >
                                            <option value={``} disabled>เลือกช่วงเวลาที่สามารถติดต่อกลับ</option>
                                            <option value={`09.00 - 10.00`}>09.00 - 10.00</option>
                                            <option value={`10.00 - 11.00`}>10.00 - 11.00</option>
                                            <option value={`11.00 - 12.00`}>11.00 - 12.00</option>
                                            <option value={`13.00 - 14.00`}>13.00 - 14.00</option>
                                            <option value={`14.00 - 15.00`}>14.00 - 15.00</option>
                                            <option value={`15.00 - 16.00`}>15.00 - 16.00</option>
                                            <option value={`16.00 - 17.00`}>16.00 - 17.00</option>
                                        </Field>
                                        <div className="invalid-feedback">
                                            กรุณาเลือกช่วงเวลาที่สามารถติดต่อกลับ
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mx-auto">
                                    <div className="label-check">
                                        <div className="checkbox">
                                            <Field
                                                className="form-check-input"
                                                type="checkbox"
                                                id="confirm_contact"
                                                name="confirm_contact"
                                                onClick={(e: any) => {
                                                    e.target.classList.remove("is-invalid")
                                                }}
                                                required
                                            />
                                            <label className="form-check-label text-white" htmlFor="confirm_contact">
                                                ฉันยอมรับให้ข้อมูลส่วนตัวนี้กับบริษัท Full Team
                                            </label>
                                            <div className="invalid-feedback">
                                                กรุณากดยอมรับการให้ข้อมูลส่วนตัว
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center py-4 mt-0">
                                    <button className="btn btn-primary btn-dark px-5" type="submit">ส่งข้อมูล</button>
                                </div>
                            </Form>
                        )
                        }
                    </Formik>
                    <div className="col-md-6 col-lg-5 mx-auto">
                        <img style={{ position: 'relative', marginTop: '-10rem', bottom: '-10rem' }} className="img-fluid" src="./assets/images/product-pos.png" alt={''} />
                    </div>
                </div>
            </section>
        </>
    )
}

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }