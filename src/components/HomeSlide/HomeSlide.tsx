import { HomeSlideProps } from "./HomeSlide.props"
import { AnimatePresence, motion } from "framer-motion"
import { headTextAnimation, slideAnimation } from "@/helpers/motion"
import { FaPaintBrush } from "react-icons/fa"
import { FiberContainer } from "../three/FiberContainer"
import { fadeAnimation } from "@/helpers/motion"
import { SelectCanvasForm } from "../SelectCanvasForm/SelectCanvasForm"
import { useEffect, useState } from "react"
export const HomeSlide = ({ className }: HomeSlideProps): JSX.Element => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <AnimatePresence>
      <motion.section
        className={`${className} flex flex-col h-screen  items-center  `}
        {...slideAnimation("left")}
      >
        <motion.header
          {...slideAnimation("down")}
          className="w-full max-h-[50px] gap-2  flex justify-center    "
        >
          <FaPaintBrush className="w-12 h-12 fill-gray-500" />
          <motion.h1
            {...headTextAnimation}
            className="text-4xl   text-gray-800"
          >
            Pixel&Paint
          </motion.h1>
        </motion.header>
        <motion.div
          key="main"
          {...fadeAnimation}
          className="flex-1 max-h-[500px] w-full  "
        >
          {!loading && <FiberContainer />}
        </motion.div>
        <motion.div {...fadeAnimation} className="flex justify-center">
          <SelectCanvasForm />
        </motion.div>
      </motion.section>
      )
    </AnimatePresence>
  )
}
