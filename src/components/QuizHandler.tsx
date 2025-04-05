import QuizSingleSelect from "@/components/quizTypes/QuizSingleSelect";
import QuizMultipleSelect from "@/components/quizTypes/QuizMultipleSelect";
import QuizSingleSelectImage from "@/components/quizTypes/QuizSingleSelectImage";
import QuizBubble from "@/components/quizTypes/QuizBubble";
import { QuestionType } from "@/enums/QuestionType";
import { IQuestionOption } from "@/interfaces/IQuestionOption";

export interface IQuestionProps {
  onSelect: (value: string) => void;
  options?: IQuestionOption[];
  value?: string | string[];
}

export default function QuizHandler({
  type,
  onSelect,
  options,
  value,
}: {
  type: QuestionType;
  onSelect: (value: string) => void;
  options?: IQuestionOption[];
  value?: string | string[];
}) {
  const props = { onSelect, options, value }

  switch (type) {
    case QuestionType.SINGLE_SELECT:
      return <QuizSingleSelect {...props}/>;
    case QuestionType.MULTIPLE_SELECT:
      return <QuizMultipleSelect {...props}/>;
    case QuestionType.SINGLE_SELECT_IMAGE:
      return <QuizSingleSelectImage {...props}/>;
    case QuestionType.BUBBLE:
      return <QuizBubble {...props}/>;
  }
}
