import { useAppContext } from "@/context/app.context"
import { Row } from "../Row/Row"

export const DrawingPanel = (): JSX.Element => {
  let rows = []
  const { canvasParameters, refPicture } = useAppContext()
  const { height } = canvasParameters
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} />)
  }
  return <div ref={refPicture}>{rows}</div>
}
