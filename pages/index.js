import Head from 'next/head'
import Navbar from "../components/navbar"
import Landing from "../components/landing"
import About from "../components/about"

export default function Home() {
  return (
    <>
      <Head>
        <title>VijayArts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Landing/>
      <About/>
    </>
  )
}
