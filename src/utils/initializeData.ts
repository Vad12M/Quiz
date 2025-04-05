import { defaultQuestions } from "@/constants/questions";
import { defaultThankYouConfig } from "@/constants/defaultThankYouConfig";
import { branchingRules } from "@/constants/branchingRules";

export const initializeQuestions = () => {
  const storedQuestions = localStorage.getItem('quizQuestions');
  if (!storedQuestions) {
    localStorage.setItem('quizQuestions', JSON.stringify(defaultQuestions));
  }
};

export const fetchQuizThankYouConfig = () => {
  const storedThankYouConfig = localStorage.getItem('quizThankYouConfig');
  if (!storedThankYouConfig) {
    localStorage.setItem('quizThankYouConfig', JSON.stringify(defaultThankYouConfig));
  }
}


export const fetchQuizBranchingRules = () => {
  const storedQuizBranchingRules = localStorage.getItem('quizBranchingRules');
  if (!storedQuizBranchingRules) {
    localStorage.setItem('quizBranchingRules', JSON.stringify(branchingRules));
  }
}
