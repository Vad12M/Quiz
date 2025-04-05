import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label?: string;
  isDisabled?: boolean;
  className?: string;
}

export default function Button({
  label,
  isDisabled = false,
  className = "",
  ...props
}: IProps) {

  return (
    <button
      className={`w-full rounded-full font-extrabold leading-6 size-4 bg-primary text-white h-14 ${className}  ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:opacity-80 duration-200 transition-all ease-in-out '}`}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </button>

  )
}
