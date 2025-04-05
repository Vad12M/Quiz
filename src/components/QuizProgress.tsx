import Typography from "@/ui/Typography";

export default function QuizProgress({
  currentStep,
  countSteps
}: {
  countSteps: number;
  currentStep: number;
}) {
  const progress = (100 / countSteps) * currentStep;
  return (
    <div className="flex flex-col items-center py-4 w-full max-w-[1024px]">
      <div className="flex space-x-1 mb-3">
        <Typography type={'subtitle1'} text={currentStep} className="text-primary"/>
        <Typography type={'subtitle1'} text={'/'}/>
        <Typography type={'subtitle1'} text={countSteps}/>
      </div>
      <div className="md:w-[70%] w-[90%] bg-white rounded-full h-1">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
