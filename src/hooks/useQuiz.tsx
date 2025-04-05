import { useRouter } from "next/router";
import useLanguage from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { IQuestion } from "@/interfaces/IQuestion";
import { IAnswer } from "@/interfaces/IAnswer";
import { fetchQuizAnswers, fetchQuizQuestionByOrder, submitQuizAnswers } from "@/services/fakeApi";
import { QuestionType } from "@/enums/QuestionType";

export default function useQuiz() {
  const router = useRouter();
  const order = +(router.query.order as string);
  const { getTranslation } = useLanguage();
  const [questionData, setQuestionData] = useState<IQuestion>();
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const actualAnswer = answers.find(el => el.questionId === questionData?.questionId)?.answer;

  useEffect(() => {
    if (order) {
      fetchQuizQuestionByOrder(order).then((res) => res && setQuestionData(res))
    }
  }, [order]);

  useEffect(() => {
    fetchQuizAnswers().then((res) => {
      setAnswers(res);
    })
  }, []);

  const updateAnswer = (existingAnswer: IAnswer, value: string): IAnswer => {
    const updatedAnswer = { ...existingAnswer };

    if ([QuestionType.MULTIPLE_SELECT, QuestionType.BUBBLE].includes(existingAnswer.type)) {
      if (updatedAnswer.answer.includes(value)) {
        updatedAnswer.answer = (updatedAnswer.answer as string[]).filter((item) => item !== value);
      } else {
        (updatedAnswer.answer as string[]).push(value);
      }
    } else {
      updatedAnswer.answer = value;
    }

    return updatedAnswer;
  };

  const handleSelect = (value: string) => {
    if (!questionData) {
      return;
    }
    const { type, title, questionId } = questionData;
    const isMultipleSelect = [QuestionType.MULTIPLE_SELECT, QuestionType.BUBBLE].includes(type);
    const existingAnswer = answers.find((item) => item.questionId === questionId);
    const newAnswers = [...answers];

    if (existingAnswer) {
      const index = newAnswers.findIndex((item) => item.questionId === questionId);
      newAnswers[index] = updateAnswer(existingAnswer, value);
    } else {
      const newAnswer: IAnswer = {
        order,
        type,
        questionId,
        title: getTranslation(title),
        answer: isMultipleSelect ? [value] : value,
      };
      newAnswers.push(newAnswer);
    }

    setAnswers(newAnswers);
    if (!isMultipleSelect) {
      saveAnswers(newAnswers);
    }
  };

  const saveAnswers = (answers: IAnswer[]) => {
    submitQuizAnswers(answers || []).then(() => {
      const currentLang = questionData?.questionId === 'language'
        ? answers?.find(el => el.questionId === questionData?.questionId)?.answer
        : router.query.lang


      if (order < 6) {
        router.push({
          pathname: `/quiz/${order + 1}`,
          query: currentLang ? { lang: currentLang } : {},
        });
      } else {
        router.push({
          pathname: '/quiz/thank_you',
          query: currentLang ? { lang: currentLang } : {},
        });
      }
    });
  };

  const isDisabled = () => {
    if (questionData?.type === QuestionType.BUBBLE) {
      return actualAnswer?.length !== 3;
    }

    if (questionData?.type === QuestionType.MULTIPLE_SELECT) {
      return !actualAnswer?.length;
    }

    return false
  }

  return {
    questionData,
    handleSelect,
    saveAnswers,
    actualAnswer,
    answers,
    isDisabled,
  }
}
