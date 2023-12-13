import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config.js'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    const langAttribute = Array.isArray(currentLocale) ? currentLocale.join(' ') : currentLocale;

    return (
      <Html lang={langAttribute}>
        <Head>
          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0TV4GBKQ6D" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TV4GBKQ6D', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="เครื่องคิดเงิน, เครื่องจัดการร้าน, จัดการร้าน, โชห่วย, ค้าปลีก, ระบบขายสินค้า, โปรแกรม, หน้าร้าน, เครื่องแคชเชียร์, พิมพ์ใบเสร็จ, POS, เครื่องคิดเลข, นับสต๊อก, ราคาประหยัด, ระบบPOSฟรี, POSร้านกาแฟ, โปรแกรมPOSตัวไหนดี, ระบบPOSราคา, ระบบ pos ย่อมาจาก, การจัดการร้านค้าสมัยใหม่, การจัดการร้านค้าปลีก, ทดลองใช้POS, ปรึกษาฟรี" />
          <meta name="description" content="ร้านค้าเติบโต ลูกค้าติดใจ ตอบโจทย์ธุรกิจยุคใหม่ ด้วย eazyPOS เราเป็นมากกว่า POS ด้วยโปรแกรมที่ถูกออกแบบมาเพื่อช่วยดูแลธุรกิจร้านค้าของคุณให้ลงตัว เพิ่มศักยภาพการจัดการหน้าร้านรวมไปถึงหลังบ้านครบจบในเครื่องเดียว กับฟีเจอร์เด็ดๆที่อำนวยความสะดวกสบายมากขึ้น ช่วยลดปัญหาการทำงานซ้ำซ้อนตอบโจทย์ธุรกิจขนาดเล็ก จนถึงธุรกิจที่มีหลากหลายสาขา แค่คลิกคุณก็สามารถเปิดร้าน จนถึงปิดร้านได้อย่างสบายใจ" />
          <meta name="generator" content="Hugo 0.104.2" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
