import { useAppContext } from "@/context/app.context"
import { SelectCanvasFormProps } from "./SelectCanvasForm.props"
import { useEffect, useState } from "react"
import { Button } from "../ui/Button/Button"
import Link from "next/link"

const getFullAmountOfCells = (width: number) => {
  const remainder = width % 24
  return (width - remainder) / 24
}
export const SelectCanvasForm = ({
  className,
  ...props
}: SelectCanvasFormProps): JSX.Element => {
  const { selectCanvas, canvasParameters } = useAppContext()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  useEffect(() => {
    setContainerWidth(window.innerWidth)
    setContainerHeight(window.innerHeight - 290)
    console.log("containerHeight : ", containerHeight)
  }, [])
  const widthCells = Array.from(
    { length: getFullAmountOfCells(containerWidth) },
    (_, i) => i
  )
  const heightCells = Array.from(
    { length: getFullAmountOfCells(containerHeight) },
    (_, i) => i
  )

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
            {widthCells.map(n => (
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
            {heightCells.map(n => (
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
