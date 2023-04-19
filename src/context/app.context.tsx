import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  SetStateAction,
  useRef,
  RefObject
} from "react"
export type toolType = "pen" | "eraser"
interface IAppContext {
  canvasParameters: { width: number; height: number }
  selectCanvas?: (width: number, height: number) => void
  selectedColor: string
  selectedTool: toolType
  setSelectedColor?: React.Dispatch<SetStateAction<string>>
  setSelectedTool?: React.Dispatch<SetStateAction<toolType>>
  refPicture: RefObject<HTMLDivElement> | null
}
const appContext = createContext<IAppContext>({
  selectedColor: "#000",
  selectedTool: "pen",
  canvasParameters: { width: 0, height: 0 },
  refPicture: null
})

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [canvasParameters, setCanvasParameters] = useState({
    width: 0,
    height: 0
  })
  const [selectedColor, setSelectedColor] = useState("#000")
  const [selectedTool, setSelectedTool] = useState<toolType>("pen")
  const selectCanvas = (width: number, height: number) => {
    setCanvasParameters({ ...canvasParameters, width, height })
  }
  const refPicture = useRef<HTMLDivElement>(null)
  return (
    <appContext.Provider
      value={{
        selectedTool,
        setSelectedTool,
        canvasParameters,
        selectCanvas,
        selectedColor,
        setSelectedColor,
        refPicture
      }}
    >
      {children}
    </appContext.Provider>
  )
}
export const useAppContext = () => {
  const {
    canvasParameters,
    selectCanvas,
    selectedColor,
    setSelectedColor,
    setSelectedTool,
    selectedTool,
    refPicture
  } = useContext(appContext)
  return {
    canvasParameters,
    selectCanvas,
    selectedColor,
    setSelectedColor,
    setSelectedTool,
    selectedTool,
    refPicture
  }
}
