import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  useContext
} from "react"
interface IintroContext {
  intro: boolean
  setIntro?: Dispatch<React.SetStateAction<boolean>>
}
const isHomeContext = createContext<IintroContext>({
  intro: true
})

export const IsHomeProvider = ({ children }: PropsWithChildren) => {
  const [intro, setIntro] = useState<boolean>(true)
  return (
    <isHomeContext.Provider value={{ intro, setIntro }}>
      {children}
    </isHomeContext.Provider>
  )
}
export const useIsHomeContext = () => {
  const { intro, setIntro } = useContext(isHomeContext)
  return { intro, setIntro }
}
