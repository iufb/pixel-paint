import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
export interface IconButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  position?: string
}
