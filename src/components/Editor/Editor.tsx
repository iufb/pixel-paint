import { slideAnimation } from "@/helpers/motion"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { DrawingPanel } from "../DrawingPanel/DrawingPanel"
export const Editor = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(window.innerWidth)
  }, [])
  return (
    <motion.div
      {...slideAnimation("right")}
      className="flex justify-center"
      ref={ref}
    >
      <DrawingPanel />
    </motion.div>
  )
}
