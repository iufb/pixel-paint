import { useAppContext } from "@/context/app.context"

export const Editor = (): JSX.Element => {
  const { canvasParameters } = useAppContext()
  return (
    <div>
      {canvasParameters.width}
      <div>{canvasParameters.height}</div>
    </div>
  )
}
