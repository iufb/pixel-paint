import { useAppContext } from "@/context/app.context"
import { useState } from "react"
export const Pixel = (): JSX.Element => {
  const { selectedColor, selectedTool } = useAppContext()
  const [pixelColor, setPixelColor] = useState("#fff")
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChange, setCanChange] = useState(true)
  const changeColor = () => {
    setPixelColor(selectedColor)
    setCanChange(false)
  }
  const changeColorOnHover = () => {
    if (canChange && selectedTool == "pen") {
      setOldColor(pixelColor)
      setPixelColor(selectedColor)
    }
  }
  const resetColor = () => {
    if (canChange) {
      setPixelColor(oldColor)
    }
    setCanChange(true)
  }
  const eraseColor = () => {
    setPixelColor("#fff")
    setCanChange(true)
  }
  return (
    <div
      className={`w-[1.5rem] h-[1.5rem] border hover:cursor-pointer `}
      style={{
        background: pixelColor
      }}
      onClick={selectedTool == "pen" ? changeColor : eraseColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={selectedTool == "pen" ? resetColor : undefined}
    />
  )
}
