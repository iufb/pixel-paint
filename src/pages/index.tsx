import { Roboto } from "next/font/google"
import { HomeSlide } from "@/components"
import Head from "next/head"
const roboto = Roboto({ weight: "400", subsets: ["latin"] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Pixel & Paint</title>
      </Head>
      <main
        className={`transition-all ease-in container overflow-hidden ${roboto.className}`}
      >
        <HomeSlide />
      </main>
    </>
  )
}
