import { Roboto } from "next/font/google"
import { HomeSlide } from "@/components"
const roboto = Roboto({ weight: "400", subsets: ["latin"] })
export default function Home() {
  return (
    <main className="transition-all ease-in container overflow-hidden">
      <HomeSlide />
    </main>
  )
}
