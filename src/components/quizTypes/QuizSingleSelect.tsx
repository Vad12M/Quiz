import { IQuestionProps } from "@/components/QuizHandler";
import Typography from "@/ui/Typography";
import useLanguage from "@/hooks/useLanguage";

export default function QuizSingleSelect({
  options,
  onSelect,
  value,
}: IQuestionProps) {
  const { getTranslation } = useLanguage();
  return (
    <div className="flex flex-col space-y-3 w-full">
      {options?.map((option, index) => {
        const isSelected = value === option.value;
        return (
          <button
            key={'test' + index + option.label}
            className={`rounded-[16px]  w-full text-start py-4 px-4  transition-all duration-200 border-2
              ${isSelected ? 'border-primary bg-primary bg-opacity-20' : 'border-transparent bg-secondary bg-opacity-100 hover:bg-opacity-70'}
            `}
            onClick={() => onSelect(option.value)}
          >
            <Typography type={'headlineSB'} text={getTranslation(option.label)}/>
          </button>
        )
      })}
    </div>
  )
}
