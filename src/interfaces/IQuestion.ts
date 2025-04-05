import { IQuestionOption } from "@/interfaces/IQuestionOption";
import { QuestionType } from "@/enums/QuestionType";
import { ITranslationField } from "@/interfaces/ITranslationField";

export interface IQuestion {
  order: number;
  questionId: string;
  title: ITranslationField;
  description: ITranslationField;
  subDescription?: ITranslationField;
  type: QuestionType;
  options: IQuestionOption[];
}
