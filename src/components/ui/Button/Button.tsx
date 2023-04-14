import { ButtonProps } from "./Button.props"

export const Button = ({
  title,
  disabled,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const renderColor = () => {
    if (disabled) {
      return "bg-gray-400 text-white"
    } else {
      return "bg-purple-400 text-white"
    }
  }
  return (
    <button
      tabIndex={0}
      disabled={disabled}
      className={`${className} px-2 py-2 border w-full  rounded-md ${renderColor()} `}
      {...props}
    >
      {title}
    </button>
  )
}
