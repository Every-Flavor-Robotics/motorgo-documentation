// pages/_app.tsx
import '../styles/global.css'
// import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}