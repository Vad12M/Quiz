import QuizProgress from "@/components/QuizProgress";
import Typography from "@/ui/Typography";
import Button from "@/ui/Button";
import ArrowLeftIcon from "@/ui/icons/ArrowLeftIcon";
import useLanguage from "@/hooks/useLanguage";
import { buttonsTranslations } from "@/constants/buttonsTranslations";

interface IProps {
  title: string;
  description?: string;
  currentStep: number;
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: () => void;
  showButton?: boolean;
  hideBackButton?: boolean;
}

export default function QuizLayout({
  currentStep,
  description,
  title,
  children,
  isDisabled,
  onClick,
  showButton,
  hideBackButton
}: IProps) {
  const { getTranslation } = useLanguage();
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col items-center space-y-10 md:py-10  pb-10 px-5 w-full md:max-w-[1024px] relative">
        <button className="absolute left-8 top-12" onClick={() => window.history.back()}>
          {!hideBackButton && <ArrowLeftIcon/>}
        </button>
        <QuizProgress countSteps={5} currentStep={currentStep}/>
        <div className="md:max-w-[600px] w-[90%] flex flex-col justify-between h-full">
          <div className='flex flex-col items-center space-y-7'>
            <Typography type={'title3'} text={title} className='text-center w-[90%]'/>
            {description && <Typography type={'headlineR'} text={description} className="text-lightGray text-center"/>}
            {children}
          </div>
          {showButton && <Button
            label={getTranslation(buttonsTranslations.next)}
            isDisabled={isDisabled}
            onClick={onClick}
          />}
        </div>
      </div>
    </div>
  )
}
