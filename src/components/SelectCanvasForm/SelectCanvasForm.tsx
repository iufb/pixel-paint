import { useAppContext } from "@/context/app.context"
import { SelectCanvasFormProps } from "./SelectCanvasForm.props"
import { useState } from "react"
import { Button } from "../ui/Button/Button"
import Link from "next/link"

export const SelectCanvasForm = ({
  className,
  ...props
}: SelectCanvasFormProps): JSX.Element => {
  const numbers = Array.from({ length: 101 }, (_, i) => i)
  const { selectCanvas, canvasParameters } = useAppContext()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  console.log(canvasParameters)
  const isDisabled = () => {
    return width == 0 || height == 0
  }
  return (
    <form className={`${className} flex flex-col gap-2`} {...props}>
      <div className=" flex gap-2">
        <div className="flex flex-col gap-2 text-xl">
          <label id="width" htmlFor="width">
            Width:
          </label>
          <select
            id="width"
            value={width}
            onChange={e => setWidth(Number(e.target.value))}
            className="select"
          >
            {numbers.map(n => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 text-xl">
          <label id="height" htmlFor="height">
            Height:
          </label>
          <select
            id="height"
            value={height}
            onChange={e => setHeight(Number(e.target.value))}
            className="select"
          >
            {numbers.map(n => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {selectCanvas && (
        <Link href="/editor">
          <Button
            disabled={isDisabled()}
            title="Start Drawing"
            onClick={() => {
              selectCanvas(width, height)
            }}
          />
        </Link>
      )}
    </form>
  )
}
