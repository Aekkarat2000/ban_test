import Link from '../../components/Link'
import { useState } from 'react'
import NavBar from 'src/components/NavBar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tooltip } from 'react-tooltip'
import ReactDOMServer from 'react-dom/server';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import { getStaticPaths, makeStaticProps } from '../../getStatic'
// import BG from '../public/assets/images/bg-contact.jpg'

export default function Home() {
  const [setPackage, setSetPackage] = useState("cafe")
  const [product, setProduct] = useState(1)
  const { t } = useTranslation()

  const toggleFeature = (e: any) => {
    if (e.target.classList.contains("active") === false) {
      let elems = document.querySelectorAll(".nav-feature .nav-link");
      [].forEach.call(elems, function (el: any) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });

      e.target.classList.add("active")

      let elemsFeature = document.querySelectorAll(".tab-feature");
      [].forEach.call(elemsFeature, function (el: any) {
        if (el.classList.contains("active")) {
          el.classList.remove("active")
          el.classList.remove("show")
        }
      });

      let elementFeature = document.getElementById(e.target.getAttribute("aria-controls"))
      elementFeature?.classList.add("active")
      elementFeature?.classList.add("show")
    }
  }

  return (
    <>
      <NavBar />

      <div data-bs-spy="scroll" data-bs-target="#navbar-main" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
        <div>
          <img className="w-100 img-fluid" src="./assets/images/banner.png" alt={''} />
        </div>
        <section className="container">
        {t('link_was_not_found')}
          <h2 className="text-center py-4 py-md-5">ฟีเจอร์และบริการที่ตอบโจทย์ร้านคุณโดยเฉพาะ</h2>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-start pb-5 gap-3">
              <img className="col-3 col-sm-auto img-fluid" src="./assets/images/feature/Cashier.svg" alt={''} />
              <div>
                <h5>ฟีเจอร์ร้านค้าปลีก เปิดร้านพร้อมใช้งานทันที</h5>
                <p className="color-DarkGray">ด้วยระบบที่มีรายการสินค้า รองรับให้แล้วในเครื่องมากกว่า 6,000 กว่ารายการ
                  จึงช่วยคุณประหยัดเวลา ประหยัดแรงงาน ในการเพิ่มรายการสินค้าเข้าเครื่องให้ยุ่งยาก
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-start pb-5 gap-3">
              <img className="col-3 col-sm-auto img-fluid" src="./assets/images/feature/Stock.svg" alt={''} />
              <div>
                <h5>ฟีเจอร์ตอบโจทย์ร้านที่มีหลายสาขา</h5>
                <p className="color-DarkGray">ฟีเจอร์แตกต่างไม่เหมือนใครตอบโจทย์ธุรกิจร้านค้าที่มี หลายสาขา โดยร้านค้าแต่ละสาขาสามารถเช็คและถ่ายโอน วัตถุดิบในคลังสินค้าข้ามสาขาได้ รวมไปถึงเช็คยอดขาย ระหว่างสาขาได้ง่ายๆ แค่ปลายนิ้ว</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-start pb-5 gap-3">
              <img className="col-3 col-sm-auto img-fluid" src="./assets/images/feature/Franchise.svg" alt={''} />
              <div>
                <h5>ฟีเจอร์ตอบโจทย์ซัพพอร์ตแฟรนไชส์</h5>
                <p className="color-DarkGray">บริหารภายในอย่างครบวงจร ด้วยระบบใบสั่งซื้อสินค้าเติมสต๊อก และใบตอบรับสินค้าเข้าในสต๊อกระหว่างสาขาใหญ่ และสาขาย่อย พร้อมสามารถติดตามสินค้าได้ด้วยระบบ Tracking ง่าย สะดวก รวดเร็ว</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-start pb-5 gap-3">
              <img className="col-3 col-sm-auto img-fluid" src="./assets/images/feature/Delivery.svg" alt={''} />
              <div>
                <h5>ฟีเจอร์ Delivery</h5>
                <p className="color-DarkGray">เชื่อมต่อหน้าร้าน(Offline) กับระบบสั่งซื้อออนไลน์(Online) เข้าด้วยกัน ด้วยฟีเจอร์
                  Delivery
                  ไม่ว่าคุณจะอยู่ที่ไหน
                  ก็รับ-ส่ง ออเดอร์ได้ สะดวกผู้ขาย สบายผู้สั่งซื้อ
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-start pb-5 gap-3">
              <img className="col-3 col-sm-auto img-fluid" src="./assets/images/feature/CallCenter.svg" alt={''} />
              <div>
                <h5>การรันตีดูแลบริการหลังการขายด้วยระบบ Support</h5>
                <p className="color-DarkGray">ให้คุณมั่นใจในการบริการด้วยทีมงานคุณภาพพร้อมดูแล
                  ลูกค้าได้รวดเร็ว
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section feature  */}
        <section className="container" id="scrollspyFeature">
          <h2 className="text-center py-4 py-md-5">ฟีเจอร์หลักตัวช่วยที่ทําให้ร้านค้า<br className="d-md-none" />ของคุณจัดการง่ายขึ้น
          </h2>
          {/* Feature for Mobile  */}
          <div className="container p-0 d-lg-none">
            <div className="w-100 slide-feature mb-5">
              <Slider
                dots={true}
                arrows={false}
                responsive={[
                  {
                    breakpoint: 9999,
                    settings: "unslick"
                  },
                  {
                    breakpoint: 991.98,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,

                    }
                  }
                ]}
              >
                {/* Feature 1  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="img-fluid" src="./assets/images/feature/feature-store.jpg" alt="ระบบจัดการสินค้าคงคลัง" />
                    <div className="py-3">
                      <span className="number">1</span><span className="h6 color-primary">ระบบจัดการสินค้าคงคลัง</span>
                      <div className="expand">
                        ช่วยจัดการสินค้าให้เป็นเรื่องง่ายๆ และ
                        ตรวจสอบคลังสินค้าได้ทุกที่ ทุกเวลา โดยเจ้าของร้านสามารถตรวจสอบความเคลื่อนไหวในคลังสินค้าของร้านได้ สามารถเช็คจํานวนรายการสินค้าคงเหลือ และ แจ้งเตือนสินค้าที่ใกล้จะหมด
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 2  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="img-fluid" src="./assets/images/feature/feature-pro.jpg" alt="จัดโปรโมชัน จัดการสมาชิก" />
                    <div className="py-3">
                      <span className="number">2</span><span className="h6 color-primary">จัดโปรโมชัน จัดการสมาชิก</span>
                      <div className="expand">
                        เพิ่มโอกาสในการขายมากขึ้นด้วยการทำโปรโมชันโดนใจกระตุ้นลูกค้า พร้อมทั้งยังมีฟีเจอร์ระบบจัดการสมาชิกเพื่อรักษาฐานลูกค้าเก่าและใหม่ช่วยเปลี่ยนลูกค้าขาจรให้เป็นขาประจำ
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 3  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-report.jpg" alt="รายงานการขายประจำวัน" />
                    <div className="py-3">
                      <span className="number">3</span><span className="h6 color-primary">รายงานการขายประจำวัน</span>
                      <div className="expand">
                        ไม่อยู่ร้านก็จัดการได้ ไม่ว่าคุณจะมีร้านเดียว
                        หรือหลายสาขา คุณก็สามารถรู้ยอดขาย เช็คข้อมูลได้ ตรวจสอบยอดขายได้แบบ Real Time หมดกังวลเรื่องการทุจริต
                        และช่วยให้คุณวางแผนจัดการร้านได้แบบสบายใจ
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 4  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-menu.jpg" alt="จัดการสินค้า /เมนู" />
                    <div className="py-3">
                      <span className="number">4</span><span className="h6 color-primary">จัดการสินค้า /เมนู</span>
                      <div className="expand">
                        การบริหารจัดการสินค้าและวัตถุดิบ ช่วยสร้างหมวดหมู่เพิ่มรายการอาหารและเครื่องดื่มได้แบบไม่จำกัด โดยผู้ใช้สามารถ
                        ใช้งานผ่านระบบหลังบ้านเครื่อง POS ทำให้จัดการการขายสินค้าได้ง่าย
                        และสะดวกมากขึ้น
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 5  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-tax.jpg" alt="ภาษี/รายงาน" />
                    <div className="py-3">
                      <span className="number">5</span><span className="h6 color-primary">ภาษี/รายงาน</span>
                      <div className="expand">
                        ออกใบเสร็จและใบกํากับภาษี ได้เองจากเครื่องสามารถตรวจสอบข้อมูลการขายย้อนหลังพร้อมดูรายละเอียดการขายของแต่ละรายการได้ และนอกจากนี้ยังสามารถยกเลิกใบเสร็จได้ จบในเครื่องเดียว
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 6  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-ingredients.jpg" alt="จัดการสูตรและวัตถุดิบ" />
                    <div className="py-3">
                      <span className="number">6</span><span className="h6 color-primary">จัดการสูตรและวัตถุดิบ</span>
                      <div className="expand">
                        ทุกครั้งที่มีออร์เดอร์ ร้านค้าสามารถกําหนด
                        ผูกสูตรอาหารหรือเครื่องดื่มกับเมนู โดยระบบจะตัดสต๊อกวัตถุดิบอัตโนมัติ แจ้งเตือนวัตถุดิบเมื่อใกล้หมด ช่วยให้การสั่งซื้อวัตถุดิบพอดีไม่เกิดภาวะต้นทุนจมจากวัตถุดิบที่ตุนแล้วไม่ได้ใช้ หมดกังวลปัญหาต้นทุนสูญหายและขาดทุน
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 7  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-barcode.jpg" alt="รองรับสินค้าได้ทั้งมีบาร์โค้ดและไม่มีบาร์โค้ด" />
                    <div className="py-3">
                      <span className="number">7</span><span className="h6 color-primary">รองรับสินค้าได้ทั้งมีบาร์โค้ดและไม่มีบาร์โค้ด</span>
                      <div className="expand">
                        จัดการสินค้าเข้าสต๊อกได้ง่าย ๆ แค่ยิงสแกนบาร์โค้ดสินค้าเข้าเครื่องโดยในระบบจะมีรายการชื่อสินค้ารองรับมากกว่า 6,000 กว่ารายการและในกรณีที่สินค้าไม่มีบาร์โค้ดสามารถแอดรายการเข้าเครื่องง่าย ๆ เพียง เสิร์ช คลิก บันทึก จบ ครบขั้นตอน
                      </div>
                    </div>
                  </div>
                </div>
                {/* Feature 8  */}
                <div>
                  <div className=" col-md-8 mx-auto">
                    <img className="w-100 img-fluid" src="./assets/images/feature/feature-cash.jpg" alt="ระบบจัดการเงินสด" />
                    <div className="py-3">
                      <span className="number">8</span><span className="h6 color-primary">ระบบจัดการเงินสด</span>
                      <div className="expand">ให้คุณไม่ตกหล่นเรื่องรายรับรายจ่ายในแต่ละวัน คุณสามารถกำหนดเรื่องเงินทอนเริ่มต้นในแต่ละวันและนอกจากนี้ระบบยังช่วยบันทึกรายรับ รายจ่าย ที่เป็นเงินสดในประแต่ละวันได้อีกด้วย</div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* Feature for Desktop  */}
          <div className="container d-none d-lg-block mb-5">
            <div className="d-flex col-xxl-11 mx-auto">
              <div className="nav nav-feature flex-column nav-pills me-3 col" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button
                  className="nav-link active"
                  id="feature-store-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-store"
                  type="button"
                  role="tab"
                  aria-controls="feature-store"
                  aria-selected="true"
                  onClick={toggleFeature}
                >
                  <span className="number">1</span>ระบบจัดการสินค้าคงคลัง
                  <div className="expand">
                    ช่วยจัดการสินค้าให้เป็นเรื่องง่ายๆ และตรวจสอบคลังสินค้าได้ทุกที่ ทุกเวลา โดยเจ้าของร้านสามารถตรวจสอบความเคลื่อนไหวในคลังสินค้าของร้านได้ สามารถเช็คจํานวนรายการสินค้าคงเหลือ และ แจ้งเตือนสินค้าที่ใกล้จะหมด
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-pro-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-pro"
                  type="button"
                  role="tab"
                  aria-controls="feature-pro"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">2</span>จัดโปรโมชัน จัดการสมาชิก
                  <div className="expand">
                    เพิ่มโอกาสในการขายมากขึ้นด้วยการทำโปรโมชันโดนใจกระตุ้นลูกค้า พร้อมทั้งยังมีฟีเจอร์ระบบจัดการสมาชิกเพื่อรักษาฐานลูกค้าเก่าและใหม่ช่วยเปลี่ยนลูกค้าขาจรให้เป็นขาประจำ
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-report-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-report"
                  type="button"
                  role="tab"
                  aria-controls="feature-report"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">3</span>รายงานการขายประจำวัน
                  <div className="expand">
                    ไม่อยู่ร้านก็จัดการได้ ไม่ว่าคุณจะมีร้านเดียวหรือหลายสาขา คุณก็สามารถรู้ยอดขาย เช็คข้อมูลได้ ตรวจสอบยอดขายได้แบบ Real Time หมดกังวลเรื่องการทุจริตและช่วยให้คุณวางแผนจัดการร้านได้แบบสบายใจ
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-menu-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-menu"
                  type="button"
                  role="tab"
                  aria-controls="feature-menu"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">4</span>จัดการสินค้า /เมนู
                  <div className="expand">
                    การบริหารจัดการสินค้าและวัตถุดิบ ช่วยสร้างหมวดหมู่เพิ่มรายการอาหารและเครื่องดื่มได้แบบไม่จำกัด โดยผู้ใช้สามารถใช้งานผ่านระบบหลังบ้านเครื่อง POS ทำให้จัดการการขายสินค้าได้ง่าย และสะดวกมากขึ้น
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-tax-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-tax"
                  type="button"
                  role="tab"
                  aria-controls="feature-tax"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">5</span>ภาษี/รายงาน
                  <div className="expand">
                    ออกใบเสร็จและใบกํากับภาษี ได้เองจากเครื่องสามารถตรวจสอบข้อมูลการขายย้อนหลังพร้อมดูรายละเอียดการขายของแต่ละรายการได้ และนอกจากนี้ยังสามารถยกเลิกใบเสร็จได้ จบในเครื่องเดียว
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-ingredients-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-ingredients"
                  type="button"
                  role="tab"
                  aria-controls="feature-ingredients"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">6</span>จัดการสูตรและวัตถุดิบ
                  <div className="expand">
                    ทุกครั้งที่มีออร์เดอร์ ร้านค้าสามารถกําหนดผูกสูตรอาหารหรือเครื่องดื่มกับเมนู โดยระบบจะตัดสต๊อกวัตถุดิบอัตโนมัติ แจ้งเตือนวัตถุดิบเมื่อใกล้หมด ช่วยให้การสั่งซื้อวัตถุดิบพอดีไม่เกิดภาวะต้นทุนจมจากวัตถุดิบที่ตุนแล้วไม่ได้ใช้ หมดกังวลปัญหาต้นทุนสูญหายและขาดทุน
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-barcode-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-barcode"
                  type="button"
                  role="tab"
                  aria-controls="feature-barcode"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">7</span>รองรับสินค้าได้ทั้งมีบาร์โค้ดและไม่มีบาร์โค้ด
                  <div className="expand">
                    จัดการสินค้าเข้าสต๊อกได้ง่าย ๆ แค่ยิงสแกนบาร์โค้ดสินค้าเข้าเครื่องโดยในระบบจะมีรายการชื่อสินค้ารองรับมากกว่า 6,000 กว่ารายการและในกรณีที่สินค้าไม่มีบาร์โค้ดสามารถแอดรายการเข้าเครื่องง่าย ๆ เพียง เสิร์ช คลิก บันทึก จบครบขั้นตอน
                  </div>
                </button>
                <button
                  className="nav-link"
                  id="feature-cash-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#feature-cash"
                  type="button"
                  role="tab"
                  aria-controls="feature-cash"
                  aria-selected="false"
                  onClick={toggleFeature}
                >
                  <span className="number">8</span>ระบบจัดการเงินสด
                  <div className="expand">
                    ให้คุณไม่ตกหล่นเรื่องรายรับรายจ่ายในแต่ละวัน คุณสามารถกำหนดเรื่องเงินทอนเริ่มต้นในแต่ละวันและนอกจากนี้ระบบยังช่วยบันทึกรายรับ รายจ่าย ที่เป็นเงินสดในประแต่ละวันได้อีกด้วย
                  </div>
                </button>
              </div>
              <div className="tab-content col-7 col-xxl-8" id="v-pills-tabContent">
                <div className="tab-feature tab-pane fade show active" id="feature-store" role="tabpanel" aria-labelledby="feature-store-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-store.jpg" alt="ระบบจัดการสินค้าคงคลัง" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-pro" role="tabpanel" aria-labelledby="feature-pro-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-pro.jpg" alt="จัดโปรโมชัน จัดการสมาชิก" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-report" role="tabpanel" aria-labelledby="feature-report-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-report.jpg" alt="รายงานการขายประจำวัน" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-menu" role="tabpanel" aria-labelledby="feature-menu-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-menu.jpg" alt="จัดการสินค้า /เมนู" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-tax" role="tabpanel" aria-labelledby="feature-tax-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-tax.jpg" alt="ภาษี/รายงาน" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-ingredients" role="tabpanel" aria-labelledby="feature-ingredients-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-ingredients.jpg" alt="จัดการสูตรและวัตถุดิบ" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-barcode" role="tabpanel" aria-labelledby="feature-barcode-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-barcode.jpg" alt="รองรับสินค้าได้ทั้งมีบาร์โค้ดและไม่มีบาร์โค้ด" />
                </div>
                <div className="tab-feature tab-pane fade" id="feature-cash" role="tabpanel" aria-labelledby="feature-cash-tab" tabIndex={0}>
                  <img className="w-100 img-fluid" src="./assets/images/feature/feature-cash.jpg" alt="ระบบจัดการเงินสด" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section Trial  */}
        <section className="bg-light">
          <div className="container text-center">
            <h2 className="pt-4 pt-md-5">ร้านค้าเติบโต ลูกค้าติดใจ ตอบโจทย์ธุรกิจยุคใหม่ ด้วย eazyPOS</h2>
            <p className="col-lg-8 m-auto py-2">เราเป็นมากกว่า POS
              ด้วยโปรแกรมที่ถูกออกแบบมาเพื่อช่วยดูแลธุรกิจร้านค้าของคุณให้ลงตัว
              เพิ่มศักยภาพการจัดการหน้าร้านรวมไปถึงหลังบ้านครบจบในเครื่องเดียว
              กับฟีเจอร์เด็ดๆที่อำนวยความสะดวกสบายมากขึ้น ช่วยลดปัญหาการทำงานซ้ำซ้อนตอบโจทย์ธุรกิจขนาดเล็ก
              จนถึงธุรกิจที่มีหลากหลายสาขา แค่คลิกคุณก็สามารถเปิดร้าน จนถึงปิดร้านได้อย่างสบายใจ</p>
            <div className="py-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ft.pos.mobile" rel="noopener noreferrer" target="_blank" className="btn btn-primary" >ใช้งานฟรี!<span className="icon-arrow-right" /></Link>
            </div>
          </div>
          <img className="w-100 img-fluid" src="./assets/images/BG-Quote.svg" alt={''} />
        </section>
        {/* section Package  */}
        <section className="container" id="scrollspyProduct">
          <h2 className="text-center pt-5 pb-4">ตัวช่วยทำให้การขายของคุณง่ายขึ้น</h2>
          <ul className="nav nav-tabs justify-content-center" id="packageTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${product === 1 ? "active" : ""}`}
                id="pack-set-tab"
                data-bs-toggle="tab"
                data-bs-target="#pack-set"
                type="button"
                role="tab"
                aria-controls="pack-set"
                aria-selected="true"
                onClick={() => { setProduct(1) }}
              >แพ็กเกจ/เซ็ทแนะนำ</button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${product === 2 ? "active" : ""}`}
                id="hardware-tab"
                data-bs-toggle="tab"
                data-bs-target="#hardware"
                type="button"
                role="tab"
                aria-controls="hardware"
                aria-selected="false"
                onClick={() => { setProduct(2) }}
              >อุปกรณ์สำหรับการขาย</button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${product === 3 ? "active" : ""}`}
                id="software-tab"
                data-bs-toggle="tab"
                data-bs-target="#software"
                type="button"
                role="tab"
                aria-controls="software"
                aria-selected="false"
                onClick={() => { setProduct(3) }}
              >Software/ราคา</button>
            </li>
          </ul>
          <div className="tab-content pb-5" id="packageTabContent">
            {/* Pack SET Tab  */}
            <div className={`tab-pane fade ${product === 1 ? "active show" : ""}`} id="pack-set" role="tabpanel" tabIndex={0}>
              {/* Type Shop Pack SET  */}
              <ul className="nav nav-pills mt-4 justify-content-center" id="typeShopPack-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${setPackage === "cafe" ? "rounded-pil active" : ""}`}
                    id="pills-Cafe-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Cafe"
                    type="button"
                    role="tab"
                    aria-controls="pills-Cafe"
                    aria-selected="true"
                    onClick={() => { setSetPackage("cafe") }}
                  >
                    <span className="icon-cafe" />เซ็ท Cafe สุดประหยัด
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${setPackage === "retail" ? "rounded-pil active" : ""}`}
                    id="pills-Retail-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Retail"
                    type="button"
                    role="tab"
                    aria-controls="pills-Retail"
                    aria-selected="false"
                    onClick={() => { setSetPackage("retail") }}
                  >
                    <span className="icon-retail" />เซ็ท Retail สุดคุ้ม
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${setPackage === "restaurant" ? "rounded-pil active" : ""}`}
                    id="pills-Restaurant-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Restaurant"
                    type="button"
                    role="tab"
                    aria-controls="pills-Restaurant"
                    aria-selected="false"
                    onClick={() => { setSetPackage("restaurant") }}
                  >
                    <span className="icon-restaurant" />เซ็ท Restaurant จัดหนัก
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className={`container tab-pane fade ${setPackage === "cafe" ? "show active" : ""}`} id="pills-Cafe" role="tabpanel" aria-labelledby="pills-Cafe-tab" tabIndex={0}>
                  <div className="text-center pt-4">
                    <h5>เซ็ท Cafe สุดประหยัด มีทั้งหมด 3 แพ็กเกจ</h5>
                    <p>เหมาะกับ ร้านค้าขนาดเล็ก, ร้านอาหารฟาสต์ฟู้ด, คาเฟ่, ฟู้ดทรัค,
                      ซุ้มขายน้ํา/ขนม/กาแฟ/อาหาร</p>
                  </div>
                  {/* Pack Cafe Mobile & Desktop  */}
                  <div className="">
                    <Slider
                      arrows={true}
                      responsive={[
                        {
                          breakpoint: 9999,
                          settings: "unslick"
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            arrows: true,
                            adaptiveHeight: true
                          }
                        }
                      ]}
                      className="container p-0 slide-pack slidePackType1 d-lg-flex flex-wrap my-4 gap-3 gap-lg-4"
                    >
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet1.jpg" className="card-img-top" alt="เซ็ท Cafe ประหยัด 1" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Cafe ประหยัด 1</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดเล็ก เช่น ร้านอาหารฟาสต์ฟู้ด, คาเฟ่, ฟู้ดทรัค, ซุ้มขายน้ํา/ขนม/กาแฟ/อาหาร
                            ในเซ็ทประกอบไปด้วย
                          </p>
                          <ul className="list-packset mb-4">
                            <li>ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6{`"`}</li>
                            <li>Software 
                              <button 
                                type="button"  
                                id="tooltip-cafe-1" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                                  className="btn btn-link p-0"
                                >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-cafe-1" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">19,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet2.jpg" className="card-img-top" alt="เซ็ท Cafe ประหยัด 2" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Cafe ประหยัด 2</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดเล็ก เช่น ร้านอาหารฟาสต์ฟู้ด, คาเฟ่, ฟู้ดทรัค, ซุ้มขายน้ํา/ขนม/กาแฟ/อาหาร
                            ในเซ็ทประกอบไปด้วย
                          </p>
                          <ul className="list-packset mb-4">
                            <li>ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6{`"`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-cafe-2" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-cafe-2" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">21,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet3.jpg" className="card-img-top" alt="เซ็ท Cafe ประหยัด 3" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Cafe ประหยัด 3</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดเล็ก เช่น ร้านอาหารฟาสต์ฟู้ด, คาเฟ่, ฟู้ดทรัค, ซุ้มขายน้ํา/ขนม/กาแฟ/อาหาร
                            ในเซ็ทประกอบไปด้วย
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 มี 2 หน้าจอ ขนาด 15.6" และ 10.1 "`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-cafe-3" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-cafe-3" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">23,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className={`tab-pane fade ${setPackage === "retail" ? "show active" : ""}`} id="pills-Retail" role="tabpanel" aria-labelledby="pills-Retail-tab" tabIndex={0}>
                  <div className="text-center pt-4">
                    <h5>เซ็ท Retail สุดคุ้ม มีทั้งหมด 3 แพ็กเกจ</h5>
                    <p>เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านขายของทั่วไป,
                      ร้านขายสินค้าที่มีบาร์โค้ด, ร้านทุกอย่าง 20</p>
                  </div>
                  {/* Pack Retail Mobile & Desktop  */}
                  <div className="">
                    <Slider
                      arrows={true}
                      className="container p-0 slide-pack slidePackType2 d-lg-flex flex-wrap my-4 gap-3 gap-lg-4"
                      responsive={[
                        {
                          breakpoint: 9999,
                          settings: "unslick"
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            arrows: true,
                            adaptiveHeight: true
                          }
                        }
                      ]}
                    >
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet1.jpg" className="card-img-top" alt="เซ็ท Retail 1" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Retail 1</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านขายของทั่วไป, ร้านขายสินค้าที่มีบาร์โค้ด, ร้านทุกอย่าง 20
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6"`}</li>
                            <li>Software Retail 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-retail-1" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-retail-1" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">21,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet2.jpg" className="card-img-top" alt="เซ็ท Retail 2" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Retail 2</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านขายของทั่วไป, ร้านขายสินค้าที่มีบาร์โค้ด, ร้านทุกอย่าง 20
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6"`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software Retail 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-retail-2" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-retail-2" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">23,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet3.jpg" className="card-img-top" alt="เซ็ท Retail 3" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Retail 3</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านขายของทั่วไป, ร้านขายสินค้าที่มีบาร์โค้ด, ร้านทุกอย่าง 20
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 มี 2 หน้าจอ ขนาด 15.6" และ 10.1 "`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software Retail 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-retail-3" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-retail-3" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">25,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className={`tab-pane fade ${setPackage === "restaurant" ? "show active" : ""}`} id="pills-Restaurant" role="tabpanel" aria-labelledby="pills-Restaurant-tab" tabIndex={0}>
                  <div className="text-center pt-4">
                    <h5>เซ็ท Restaurant จัดหนัก มีทั้งหมด 3 แพ็กเกจ</h5>
                    <p>เหมาะกับร้านค้าขนาดกลาง/ใหญ่,
                      ร้านอาหารขนาดกลาง/ใหญ่</p>
                  </div>
                  {/* Pack Restaurant Mobile & Desktop  */}
                  <div>
                    <Slider
                      className="container p-0 slide-pack slidePackType3 d-lg-flex flex-wrap my-4 gap-3 gap-lg-4"
                      arrows={true}
                      responsive={[
                        {
                          breakpoint: 9999,
                          settings: "unslick"
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            arrows: true,
                            adaptiveHeight: true
                          }
                        }
                      ]}
                    >
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet1.jpg" className="card-img-top" alt="เซ็ท Restaurant 1" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Restaurant 1</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านอาหารขนาดกลาง/ใหญ่
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6"`}</li>
                            <li>Software Restaurant 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-restaurant-1" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-restaurant-1" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">21,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      {/* Product  */}
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet2.jpg" className="card-img-top" alt="เซ็ท Restaurant 2" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Restaurant 2</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านอาหารขนาดกลาง/ใหญ่
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 Lite 1 หน้าจอ 15.6"`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software Restaurant 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-restaurant-2" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-restaurant-2" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">23,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                      <div className="card p-0">
                        <img src="./assets/images/package/PackSet3.jpg" className="card-img-top" alt="เซ็ท Restaurant 3" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">เซ็ท Restaurant 3</h5>
                          <p className="color-DarkGray">
                            เหมาะกับร้านค้าขนาดกลาง/ใหญ่, ร้านอาหารขนาดกลาง/ใหญ่
                          </p>
                          <ul className="list-packset mb-4">
                            <li>{`ตัวเครื่อง Sunmi T2 มี 2 หน้าจอ ขนาด 15.6" และ 10.1 "`}</li>
                            <li>ปริ้นเตอร์ในตัวเครื่อง</li>
                            <li>Software Restaurant 
                              <button 
                                type="button" 
                                className="btn btn-link p-0" 
                                id="tooltip-restaurant-3" 
                                data-tooltip-html="ทำรายการขาย <br/>
                                  จัดการสินค้า /เมนู <br/>
                                  จัดการสินค้าคงคลัง <br/>
                                  ภาษี/รายงาน <br/>
                                  รายงานการขาย <br/>
                                  โปรโมชัน/ส่วนลด <br/>
                                  จัดการพนักงาน <br/>
                                  จัดการสินค้าไม่มีบาร์โค๊ด <br/>
                                  ระบบจัดการเงินสด" 
                              >
                                <span className="icon-info" />
                              </button>
                              <Tooltip anchorId="tooltip-restaurant-3" place="right"/>
                            </li>
                            <li className="color-primary"> <span className="h6"> ฟรี!</span> ค่าบริการรายเดือน 1 ปี (สัญญา2 ปี)</li>
                            <li className="color-primary"><span className="h6"> ฟรี!</span> ค่าติดตั้งครั้งแรกทั่วประเทศไทย</li>
                          </ul>
                          <div className="d-grid mt-auto">
                            <h1 className="mb-0">25,000 บาท</h1>
                            <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                            <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            {/* hardware Tab  */}
            <div className={`container tab-pane fade ${product === 2 ? "active show" : ""}`} id="hardware" role="tabpanel" tabIndex={0}>
              {/* Pack hardware Mobile & Desktop  */}
              <Slider
                className="container p-0 slide-pack slidePack2 d-lg-flex my-4 gap-3 gap-lg-4"
                arrows={true}
                responsive={[
                  {
                    breakpoint: 9999,
                    settings: "unslick"
                  },
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      arrows: true,
                      adaptiveHeight: true
                    }
                  }
                ]}
              >
                {/* Product  */}
                <div className="col card p-0">
                  <img src="./assets/images/package/ScannerBluetooth.jpg" className="card-img-top" alt="Scanner Bluetooth" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Scanner Bluetooth</h5>
                    <ul className="list-feature mb-4">
                      <li>เชื่อมต่อกับเครื่อง POS ได้</li>
                      <li>สแกนสินค้าได้ทั้งแบบ 1D/2D</li>
                      <li>ง่ายต่อการเชื่อมต่ออุปกรณ์</li>
                    </ul>
                    <div className="d-grid mt-auto">
                      <div>
                        จากปกติราคา
                        <span className="strikethrough">2,500</span>
                        บาท
                      </div>
                      <h1 className="mb-0">1,900 บาท</h1>
                      <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                      <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                    </div>
                  </div>
                </div>
                {/* Product  */}
                <div className="col card p-0">
                  <img src="./assets/images/package/CashDrawer.jpg" className="card-img-top" alt="ลิ้นชักเก็บเงิน" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">ลิ้นชักเก็บเงิน</h5>
                    <ul className="list-feature mb-4">
                      <li>ลิ้นชักเก็บเงิน 5 ช่อง</li>
                      <li>พอร์ทลิ้นชักเก็บเงิน RJ11</li>
                      <li>ลดแรงกระแทกเมื่อเปิด/ปิด</li>
                      <li>วัสดุแข็งแรงทนทาน</li>
                    </ul>
                    <div className="d-grid mt-auto">
                      <div>
                        จากปกติราคา
                        <span className="strikethrough">1,900</span>
                        บาท
                      </div>
                      <h1 className="mb-0">1,400 บาท</h1>
                      <p className="card-text color-DarkGray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</p>
                      <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* software Tab  */}
            <div className={`container tab-pane fade ${product === 3 ? "active show" : ""}`} id="software" role="tabpanel" tabIndex={0}>
              {/* Pack software Mobile & Desktop  */}
              <Slider
                className="container p-0 slide-pack slidePack3 d-lg-flex my-4 gap-3 gap-lg-4 justify-content-center"
                arrows={true}
                responsive={[
                  {
                    breakpoint: 9999,
                    settings: "unslick"
                  },
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      arrows: true,
                      adaptiveHeight: true
                    }
                  }
                ]}
              >
                {/* Package  */}
                <div className="col-md col-lg-4 card p-0">
                  <div className="card-header bg-primary text-center text-white h4 py-3 border-0">
                    Basic
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="text-center border-bottom pt-3 pb-4">
                      <h1 className="mb-0">Free</h1>
                    </div>
                    <ul className="list-feature my-4">
                      <li>ทำรายการขาย</li>
                      <li>จัดการสินค้า / เมนู</li>
                      <li>จัดการสินค้าคงคลัง</li>
                      <li>ภาษี / รายงาน</li>
                      <li>รายงานการขาย</li>
                      <li>โปรโมชัน / ส่วนลด</li>
                      <li>จัดการพนักงาน</li>
                      <li>จัดการสินค้าไม่มีบาร์โค้ด</li>
                      <li>ระบบจัดการเงินสด</li>
                      <li className="disabled">ระบบสมาชิก</li>
                      <li className="disabled">สูตรและวัตถุดิบ</li>
                      <li className="disabled">จัดการสาขา</li>
                      <li className="disabled">สั่งสินค้าเข้าสต็อกภายในสาขา</li>
                    </ul>
                    <div className="d-grid mt-auto">
                      <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md col-lg-4 card p-0">
                  <div className="card-header bg-primary text-center text-white h4 py-3 border-0">
                    Pro
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="text-center border-bottom pt-3 pb-4 d-flex justify-content-center align-items-baseline">
                      <h1 className="mb-0 text-primary">฿599</h1><span className="color-DarkGray">/ เดือน</span>
                    </div>
                    <ul className="list-feature my-4">
                      <li>ทำรายการขาย</li>
                      <li>จัดการสินค้า / เมนู</li>
                      <li>จัดการสินค้าคงคลัง</li>
                      <li>ภาษี / รายงาน</li>
                      <li>รายงานการขาย</li>
                      <li>โปรโมชัน / ส่วนลด</li>
                      <li>จัดการพนักงาน</li>
                      <li>จัดการสินค้าไม่มีบาร์โค้ด</li>
                      <li>ระบบจัดการเงินสด</li>
                      <li>ระบบสมาชิก</li>
                      <li>สูตรและวัตถุดิบ</li>
                      <li>จัดการสาขา</li>
                      <li>สั่งสินค้าเข้าสต็อกภายในสาขา</li>
                    </ul>
                    <div className="d-grid mt-auto">
                      <Link href="/contact.html" className="btn btn-primary">ติดต่อพนักงานขาย</Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section className="bg-LightGray" id="scrollspyClient">
          <div className="container text-center py-5">
            <h2 className="pb-4">ไว้วางใจจากผู้ใช้งานจริง</h2>
            <ul className="list-unstyled list-group list-group-horizontal justify-content-center gap-5">
              <li className="col logo-client">
                <img className="img-fluid" src="./assets/images/client/Kaiwaan.png" alt={''} />
              </li>
              <li className="col logo-client">
                <img className="img-fluid" src="./assets/images/client/Djang.png" alt={''} />
              </li>
              <li className="col logo-client">
                <img className="img-fluid" src="./assets/images/client/ThongFah.png" alt={''} />
              </li>
            </ul>
          </div>
        </section>
        <section 
          className="bg-contact bg-black" 
          // style={{backgroundImage: `url(${BG.src})`}} 
          id="scrollspyContact"
        >
          <div className="container text-center py-5">
            <h2 className="py-3 text-white">ปรึกษาและรับข้อเสนอพิเศษกับ eazyPOS</h2>
            <div className="py-4">
              <Link href="/contact.html" className="btn btn-primary">ติดต่อขอคำปรึกษา<span className="icon-arrow-right" /></Link>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="container pt-5">
          <img className="img-fluid" src="./assets/images/logo_white.png" alt={'logo-white'} width={200} style={{marginLeft: -15}} />
          <div className="row py-3">
            <div className="col-12 col-md text-white">
              <h6 className="text-white">Contact Us</h6>
              <p>33/4 The 9 Tower (Behind Central Grand Rama 9) <br />
                Rama 9 Road, Huaykwang , Huaykwang ,
                Bangkok 10310</p>
              {/* <a href="tel:02-xxx-xxxx" className="h5 text-reset text-decoration-none">โทร 02-xxx-xxxx</a> */}
              <p>ทุกวัน เวลา 8:00 – 22:00<br />(ยกเว้นวันหยุดนักขัตฤกษ์)</p>
              <a href="mailto:contact@fullteam.tech" className="d-inline-block text-reset text-decoration-none mb-3"><img className="img-fluid me-2" src="./assets/images/icon/icon-mail.svg" alt="e-mail" />contact@fullteam.tech</a>
            </div>
            <div className="col-12 col-md ">
              <h6 className="text-white">Follow US</h6>
              <a href="https://www.facebook.com/fullteamtech" className="d-inline-block text-reset text-decoration-none">
                <img className="img-fluid" src="./assets/images/icon/facebook.svg" alt="Facebook" />
              </a>
              <a href="https://lin.ee/rg5L90s" className="d-inline-block text-reset text-decoration-none">
                <img className="img-fluid" src="./assets/images/icon/line.svg" alt="Line" />
              </a>
            </div>
            <div className="col-12 col-md ">
              <h6 className="text-white"> Download eazyPOS</h6>
              <a href="https://play.google.com/store/apps/details?id=com.ft.pos.mobile" className="d-inline-block text-reset text-decoration-none" target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src="./assets/images/icon/googleplay.svg" alt="Google Play" />
              </a>
              <a className="d-inline-block text-reset text-decoration-none">
                <img className="img-fluid" src="./assets/images/icon/appstore.svg" alt="App Store" />
                <span className="d-inline-block mb-3 text-white">(เปิดให้บริการเร็วๆนี้)</span>
              </a>
            </div>
          </div>
          <div className="row text-md-center text-white-50">
            <p className="mb-4">Copyright @2022 Fullteam Co.Itd All right reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }