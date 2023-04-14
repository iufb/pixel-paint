import { PropsWithChildren, createContext, useState, useContext } from "react"
interface IAppContext {
  canvasParameters: { width: number; height: number }
  selectCanvas?: (width: number, height: number) => void
}
const appContext = createContext<IAppContext>({
  canvasParameters: { width: 0, height: 0 }
})

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [canvasParameters, setCanvasParameters] = useState({
    width: 0,
    height: 0
  })
  const selectCanvas = (width: number, height: number) => {
    setCanvasParameters({ ...canvasParameters, width, height })
  }
  return (
    <appContext.Provider value={{ canvasParameters, selectCanvas }}>
      {children}
    </appContext.Provider>
  )
}
export const useAppContext = () => {
  const { canvasParameters, selectCanvas } = useContext(appContext)
  return { canvasParameters, selectCanvas }
}
