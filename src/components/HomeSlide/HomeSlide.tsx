import { useIsHomeContext } from "@/context/isHome.context"
import { HomeSlideProps } from "./HomeSlide.props"
import { AnimatePresence, motion } from "framer-motion"
import { slideAnimation } from "@/helpers/motion"
import { FaPaintBrush } from "react-icons/fa"
export const HomeSlide = ({ className }: HomeSlideProps): JSX.Element => {
  const { intro } = useIsHomeContext()
  return (
    <AnimatePresence>
      {intro && (
        <motion.section className={`${className} `} {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")} className="w-full h-full">
            <FaPaintBrush width={100} height={100} className="w-24 h-24" />
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
