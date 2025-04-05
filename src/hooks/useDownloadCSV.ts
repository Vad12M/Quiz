import { useEffect, useState } from "react";
import { fetchQuizAnswers, fetchQuizQuestions } from "@/services/fakeApi";
import { IAnswer } from "@/interfaces/IAnswer";
import { IQuestion } from "@/interfaces/IQuestion";
import { QuestionType } from "@/enums/QuestionType";
import useLanguage from "@/hooks/useLanguage";

export default function useDownloadCSV() {
  const { getTranslation } = useLanguage();

  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetchQuizAnswers().then((res) => setAnswers(res));
    fetchQuizQuestions().then((res) => setQuestions(res));
  }, []);

  const downloadCSV = () => {
    if (!answers.length) {
      alert('No answers available to download.');
      return;
    }

    const headers = ['Order', 'Title', 'Type', 'Answer'];

    const rows = answers.map((answer) => {
      const question = questions.find((item) => item.questionId === answer.questionId);

      if (!question) {
        return [answer.order, answer.title, answer.type, ''];
      }

      let answerValue = '';

      if ([QuestionType.BUBBLE, QuestionType.MULTIPLE_SELECT].includes(question.type)) {
        answerValue = (answer.answer as string[])
          .map((item) => {
            const option = question.options.find(el => el.value === item);
            return option ? getTranslation(option.label) : '';
          })
          .join(', ');
      } else {
        const selectedOption = question.options.find(el => el.value === answer.answer);
        answerValue = selectedOption ? getTranslation(selectedOption.label) : '';
      }

      return [
        answer.order,
        answer.title,
        question.type,
        answerValue
      ];
    });

    const csvContent = [headers, ...rows]
      .map(row => row.map(value => `"${value}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Quiz Answers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadCSV };
}
