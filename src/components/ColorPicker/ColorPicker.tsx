import { useAppContext } from "@/context/app.context"
import { useState } from "react"
import { ColorResult, SketchPicker } from "react-color"
import { ColorPickerProps } from "./ColorPicker.props"

export const ColorPicker = ({
  className,
  ...props
}: ColorPickerProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const { selectedColor, setSelectedColor, selectedTool } = useAppContext()
  const changeColor = (color: ColorResult) => {
    if (setSelectedColor) {
      setSelectedColor(color.hex)
      setOpen(false)
    }
  }
  return (
    <div className={`relative col  gap-2 items-center ${className}`} {...props}>
      {open && (
        <SketchPicker
          color={selectedColor}
          onChange={color => changeColor(color)}
          className="absolute left-10"
        />
      )}

      <p>
        Selected color:
        <span className={`font-bold `}>{selectedColor}</span>
      </p>
      <div
        onClick={() => setOpen(prev => !prev)}
        className={`${
          selectedTool == "pen"
            ? "border-2 border-gray-800"
            : "border-1 border-gray-400"
        }  w-8 h-8 p-1 `}
      >
        <div
          className="w-full h-full"
          style={{
            background: selectedColor
          }}
        />
      </div>
    </div>
  )
}
