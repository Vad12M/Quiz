import { useEffect, useMemo, useState } from "react";
import { IQuestion } from "@/interfaces/IQuestion";
import { IBranchingRule } from "@/interfaces/IBranchingRule";
import { IAnswer } from "@/interfaces/IAnswer";
import { fetchQuizBranchingRules } from "@/services/fakeApi";

export const useBranchedQuestion = (
  question?: IQuestion,
  answers?: IAnswer[]
): IQuestion => {
  const [rules, setRules] = useState<IBranchingRule[]>([]);

  useEffect(() => {
    if (!rules.length) {
      fetchQuizBranchingRules().then((res) => {
        if (res) {
          setRules(res);
        }
      })
    }
  }, []);

  return <IQuestion>useMemo(() => {
    if (!question || !rules || !answers) {
      return question;
    }

    const relevantRules = rules.filter(
      rule =>
        rule.affectQuestionId === question.questionId &&
        rule.action === 'showOptions' &&
        answers.some(ans => ans.questionId === rule.fromQuestionId)
    );

    if (relevantRules.length === 0) {
      return question;
    }

    let modifiedOptions = question.options;

    for (const rule of relevantRules) {
      const userAnswer = answers.find(ans => ans.questionId === rule.fromQuestionId)?.answer;
      if (!userAnswer) {
        continue;
      }

      const ruleAnswers = Array.isArray(rule.whenAnswer)
        ? rule.whenAnswer
        : [rule.whenAnswer];

      const matches = Array.isArray(userAnswer)
        ? userAnswer.some(ans => ruleAnswers.includes(ans))
        : ruleAnswers.includes(userAnswer);

      if (matches && rule.showOnlyOptionsIn) {
        modifiedOptions = modifiedOptions.filter(option =>
          rule.showOnlyOptionsIn!.includes(option.value)
        );
      }
    }

    return {
      ...question,
      options: modifiedOptions,
    };
  }, [question, rules, answers]);
};
