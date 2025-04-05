import { QuestionType } from "@/enums/QuestionType";

export interface IAnswer {
  order: number;
  title: string;
  type: QuestionType;
  answer: string | string[];
  questionId: string;
}
