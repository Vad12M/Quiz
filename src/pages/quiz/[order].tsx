import QuizLayout from "@/components/QuizLayout";
import QuizHandler from "@/components/QuizHandler";
import { QuestionType } from "@/enums/QuestionType";
import useLanguage from "@/hooks/useLanguage";
import useQuiz from "@/hooks/useQuiz";
import QuizEmail from "@/components/quizTypes/QuizEmail";
import { useBranchedQuestion } from "@/hooks/useBranchedQuestion";

export default function QuizPage() {
  const { getTranslation } = useLanguage();
  const {
    answers,
    questionData,
    handleSelect,
    saveAnswers,
    actualAnswer,
    isDisabled
  } = useQuiz();

  const branchedQuestion = useBranchedQuestion(questionData, answers);

  if (!branchedQuestion) {
    return null;
  }

  const { type, title, description, order, options, subDescription } = branchedQuestion;

  if (branchedQuestion.questionId === 'email') {
    return <QuizEmail
      title={getTranslation(title)}
      description={getTranslation(description)}
      subDescription={getTranslation(subDescription)}
      onSelect={handleSelect}
    />
  }

  return (
    <QuizLayout
      title={getTranslation(title)}
      description={getTranslation(description)}
      currentStep={order}
      onClick={() => saveAnswers(answers || [])}
      isDisabled={isDisabled()}
      showButton={[QuestionType.BUBBLE, QuestionType.MULTIPLE_SELECT].includes(type)}
      hideBackButton={order === 1}
    >
      <QuizHandler type={type} onSelect={handleSelect} options={options} value={actualAnswer}/>
    </QuizLayout>
  );
}
