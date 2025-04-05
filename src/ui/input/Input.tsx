import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./input.module.css"
import Typography from "@/ui/Typography";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isDisabled?: boolean;
  className?: string;
  invalid?: boolean;
  isWhiteBorder?: boolean;
  validationHint?: string;
}

export default function Input({
  isDisabled = false,
  className = "",
  invalid = false,
  isWhiteBorder = false,
  validationHint,
  ...props
}: IProps) {

  return (
    <div className={`${className} w-full`}>
      <input
        {...props}
        disabled={isDisabled}
        className={`${styles.input} ${invalid ? styles.isInvalid : ''}  ${isWhiteBorder ? styles.isWhiteBorder : ''}`}
      />
      {invalid && validationHint && <Typography type={'caption1SB'} text={validationHint} className="text-red-800 pl-3"/>}
    </div>
  )
}
