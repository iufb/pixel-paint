import { useAppContext } from "@/context/app.context"
import { Pixel } from "../Pixel/Pixel"

export const Row = (): JSX.Element => {
  let pixels = []
  const { canvasParameters } = useAppContext()
  const { width } = canvasParameters
  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} />)
  }
  return <div className="flex w-fit">{pixels}</div>
}
