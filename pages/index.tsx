import Head from 'next/head'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'


const font = Nunito ({
  subsets: ["latin"],
})
export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
  )
}
