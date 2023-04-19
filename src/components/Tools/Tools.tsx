import { toolType, useAppContext } from "@/context/app.context"
import { ColorPicker } from "../ColorPicker/ColorPicker"
import { Eraser } from "../Eraser/Eraser"
export const Tools = (): JSX.Element => {
  const { setSelectedTool } = useAppContext()
  const changeTool = (tool: toolType) => {
    if (setSelectedTool) {
      setSelectedTool(tool)
    }
  }
  return (
    <section className=" gap-2 col items-center h-full max-h-[200px]">
      <ColorPicker onClick={() => changeTool("pen")} />
      <Eraser onClick={() => changeTool("eraser")} />
    </section>
  )
}
