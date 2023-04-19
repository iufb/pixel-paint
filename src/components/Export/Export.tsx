import { slideAnimation } from "@/helpers/motion"
import { ExportProps } from "./Export.props"
import { motion } from "framer-motion"
import { IconButton } from "../ui/IconButton/IconButton"
import { BsFiletypePng } from "react-icons/bs"
import { TfiClose } from "react-icons/tfi"
import { SiJpeg } from "react-icons/si"
import { useAppContext } from "@/context/app.context"
import { toPng, toJpeg } from "html-to-image"
import { useCallback, useState } from "react"
import { Spinner } from "../ui/Spinner/Spinner"
export const Export = ({
  className,
  setOpen,
  ...props
}: ExportProps): JSX.Element => {
  const { refPicture } = useAppContext()
  const [loadingPng, setLoadingPng] = useState(false)
  const [loadingJpeg, setLoadingJpeg] = useState(false)
  const saveAsPng = useCallback(() => {
    if (refPicture) {
      if (refPicture.current === null) {
        return
      }
      setLoadingPng(true)
      toPng(refPicture.current, { cacheBust: true })
        .then(dataUrl => {
          const link = document.createElement("a")
          link.download = `pixel-image.png`
          link.href = dataUrl
          link.click()
          setLoadingPng(false)
        })
        .catch(e => {
          if (e instanceof Error) {
            console.log(e.message)
          }
        })
    }
  }, [refPicture])
  const saveAsJpeg = useCallback(() => {
    if (refPicture) {
      if (refPicture.current === null) {
        return
      }
      setLoadingJpeg(true)
      toJpeg(refPicture.current, { cacheBust: true })
        .then(dataUrl => {
          const link = document.createElement("a")
          link.download = `pixel-image.jpeg`
          link.href = dataUrl
          link.click()
          setLoadingJpeg(false)
        })
        .catch(e => {
          if (e instanceof Error) {
            console.log(e.message)
          }
        })
    }
  }, [refPicture])

  return (
    <div
      className={`${className} absolute top-0 bg-opacity-60 w-full h-screen bg-gray-300  center`}
      {...props}
    >
      <motion.div
        {...slideAnimation("up")}
        className="relative w-full max-w-[350px] bg-white/10 backdrop-blur-md border border-white rounded-md h-full max-h-[300px] center col gap-4"
      >
        <h2 className="text-2xl text-gray-700">Export as:</h2>
        <div className="flex gap-4">
          <IconButton
            onClick={() => {
              saveAsPng()
            }}
          >
            {loadingPng ? (
              <Spinner />
            ) : (
              <BsFiletypePng className="w-16 h-16 fill-white" />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              saveAsJpeg()
            }}
          >
            {loadingJpeg ? (
              <Spinner />
            ) : (
              <SiJpeg className="w-16 h-16 fill-white" />
            )}
          </IconButton>
        </div>
        <IconButton position=" top-2 right-2" onClick={() => setOpen(false)}>
          <TfiClose className="fill-white" />
        </IconButton>
      </motion.div>
    </div>
  )
}
