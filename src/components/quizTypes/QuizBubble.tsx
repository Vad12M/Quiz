import { IQuestionProps } from "@/components/QuizHandler";
import Typography from "@/ui/Typography";
import useLanguage from "@/hooks/useLanguage";
import Image from "next/image";

export default function QuizBubble({ options, onSelect, value }: IQuestionProps) {
  const { getTranslation } = useLanguage();
  const selectedCount = value?.length || 0;

  return (
    <div className="grid grid-rows-2 grid-cols-4 w-[130%] md:ml-0 ml-10 md:w-full overflow-hidden">
      {options?.map((option, index) => {
        const isSelected = value?.includes(option.value);
        const disabled = selectedCount >= 3 && !isSelected;
        const label = getTranslation(option.label);
        return (
          <button
            key={index}
            className={`w-24 h-24 flex flex-col items-center justify-center space-y-2 mr-3 rounded-full p-2 text-center transition-all duration-200 text-white border
              ${isSelected ? 'border-primary bg-primary bg-opacity-20' : 'border-transparent bg-secondary bg-opacity-100 hover:bg-opacity-70'}
              transform ${index % 2 === 0 ? '' : 'md:mt-12 mt-8'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => onSelect(option.value)}
            disabled={disabled}
          >
            {option.imageUrl && <Image src={option.imageUrl} alt={label} width={25} height={25}/>}
            <Typography type={'caption1SB'} text={label}/>
          </button>
        );
      })}
    </div>
  );
}
