import { BsFillEraserFill } from "react-icons/bs"
import { EraserProps } from "./Eraser.props"
import { useAppContext } from "@/context/app.context"

export const Eraser = ({ className, ...props }: EraserProps): JSX.Element => {
  const { selectedTool } = useAppContext()
  return (
    <div className={`center col ${className} `} {...props}>
      <p>Eraser:</p>
      <div
        className={`w-8 h-8 p-1 center ${
          selectedTool == "eraser"
            ? "border-2 border-gray-800"
            : "border border-gray-400"
        }`}
      >
        <BsFillEraserFill className="w-7 h-7" />
      </div>
    </div>
  )
}
