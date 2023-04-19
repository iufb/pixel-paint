import { Tools, Editor, Export } from "@/components"
import { IconButton } from "@/components/ui/"
import { slideAnimation } from "@/helpers/motion"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { FaFileExport } from "react-icons/fa"
const EditorPage = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <AnimatePresence>
      <motion.section
        className="container relative  "
        {...slideAnimation("right")}
      >
        <h1 className="text-4xl text-center ">Pixel Art Editor </h1>
        <IconButton position="left-0" onClick={() => router.back()}>
          <BiArrowBack className="w-8 h-8 fill-white " />
        </IconButton>
        <IconButton position="right-0" onClick={() => setOpen(true)}>
          <FaFileExport className="w-8 h-8 fill-white" />
        </IconButton>
        <Tools />
        <Editor />
      </motion.section>
      {open && <Export setOpen={setOpen} />}
    </AnimatePresence>
  )
}
export default EditorPage
