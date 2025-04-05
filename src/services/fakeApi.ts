import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import { IQuestion } from "@/interfaces/IQuestion";
import { IAnswer } from "@/interfaces/IAnswer";

const API_DELAY = 300;

// Answers
export const submitQuizAnswers = (answers: any[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      saveToLocalStorage('quizAnswers', answers);
      resolve(true);
    }, API_DELAY);
  });
};

export const fetchQuizAnswers = (): Promise<IAnswer[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const answers = loadFromLocalStorage('quizAnswers');
      resolve(answers || []);
    }, API_DELAY);
  });
};

export const clearQuizData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      removeFromLocalStorage('quizAnswers');
      resolve(true);
    }, API_DELAY);
  });
};


// Questions

export const fetchQuizQuestions = (): Promise<IQuestion[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const questions = loadFromLocalStorage('quizQuestions');
      resolve(questions || []);
    }, API_DELAY);
  });
};

export const fetchQuizQuestionByOrder = (order: number): Promise<IQuestion | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = loadFromLocalStorage('quizQuestions');
      if (!data) {
        resolve(null);
        return;
      }
      const question = data.find((item: any) => item.order === order);
      if (!question) {
        resolve(null);
        return;
      }
      resolve(question);
    }, API_DELAY);
  });
};

export const saveQuizQuestions = (questions: IQuestion[]) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      saveToLocalStorage('quizQuestions', questions);
      resolve(true);
    }, API_DELAY);
  });
}

// Configs
export const fetchQuizThankYouConfig = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const config = loadFromLocalStorage('quizThankYouConfig');
      resolve(config || {});
    }, API_DELAY);
  });
};

export const saveQuizThankYouConfig = (config: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      saveToLocalStorage('quizThankYouConfig', config);
      resolve(true);
    }, API_DELAY);
  });
}

// Branching Rules
export const fetchQuizBranchingRules = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const config = loadFromLocalStorage('quizBranchingRules');
      resolve(config || {});
    }, API_DELAY);
  });
};

