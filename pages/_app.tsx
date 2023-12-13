import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@public/assets/css/bootstrap.min.css'
import '@public/assets/css/stylesheet.min.css'
import 'react-tooltip/dist/react-tooltip.css'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

// import '@public/assets/css/font.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, nextI18NextConfig);
