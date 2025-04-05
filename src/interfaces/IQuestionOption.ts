import { ITranslationField } from "@/interfaces/ITranslationField";

export interface IQuestionOption {
  label: ITranslationField;
  value: string;
  imageUrl?: string;
}
