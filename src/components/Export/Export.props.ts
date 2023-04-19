import { DetailedHTMLProps, HTMLAttributes, SetStateAction } from "react"
export interface ExportProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setOpen: React.Dispatch<SetStateAction<boolean>>
}
