import Head from 'next/head';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />

  {/* Tailwind CDN (for prototype) */}
  <script src="https://cdn.tailwindcss.com"></script>

  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    rel="stylesheet"
  />
</Head>
    </>
  )
}
