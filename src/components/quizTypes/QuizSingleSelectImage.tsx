import { IQuestionProps } from "@/components/QuizHandler";
import Typography from "@/ui/Typography";
import useLanguage from "@/hooks/useLanguage";
import Image from "next/image";

export default function QuizSingleSelectImage({
  options,
  onSelect,
  value
}: IQuestionProps) {
  const { getTranslation } = useLanguage();

  return (
    <div className="flex space-x-3 w-full">
      {options?.map((option, index) => {
        const label = getTranslation(option.label);
        const isSelected = value === option.value;
        return (
          <button
            key={index}
            className={`rounded-[12px] flex flex-col justify-center items-center space-y-3 py-10 w-1/3 px-3 transition-all duration-200 border-2
              ${isSelected ? 'border-primary bg-primary bg-opacity-20' : 'border-transparent bg-secondary bg-opacity-100 hover:bg-opacity-70'}
             `}
            onClick={() => onSelect(option.value)}
          >
            {option.imageUrl && <Image src={option.imageUrl} alt={label} width={52} height={52}/>}
            <Typography type={'headlineSB'} text={label}/>
          </button>
        )
      })}
    </div>
  )
}
