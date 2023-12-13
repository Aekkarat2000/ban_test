import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import NavBar from 'src/components/NavBar'
import Link from '../../components/Link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../getStatic'

export default function Success() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" />
            </Head>

            <NavBar />

            <section className="h-100 pb-5">
                <div className="container  text-center  my-5">
                    <div className="card shadow border-0 p-4">
                        <img className="col-3 col-md-2 mx-auto" src="./assets/images/icon/check-circle.svg" alt={''} />
                        <h5 className="text-center py-4 py-lg-5 lh-bas mb-0">เจ้าหน้าที่ได้รับข้อมูลของคุณเรียบร้อยแล้ว
                            ทีมงานจะทำการติดต่อกลับให้เร็วที่สุด</h5>
                        <div className="pb-4">
                            <Link href="/" className="btn btn-primary px-5">
                                กลับหน้าหลัก
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }