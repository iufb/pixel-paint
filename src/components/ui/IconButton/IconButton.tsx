import { IconButtonProps } from "./IconButton.props"

export const IconButton = ({
  children,
  position,
  className,
  ...props
}: IconButtonProps): JSX.Element => {
  return (
    <button
      className={`${className} ${
        position ? `absolute  ${position}` : ""
      }  rounded-full bg-gray-400 p-4  `}
      {...props}
    >
      {children}
    </button>
  )
}
