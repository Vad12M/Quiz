import { IBranchingRule } from "@/interfaces/IBranchingRule";


export const branchingRules: IBranchingRule[] = [
  {
    fromQuestionId: 'age',
    whenAnswer: ['18-29'],
    affectQuestionId: 'favorite-topics',
    showOnlyOptionsIn: ['romance', 'young-adult', 'bad-boy'],
    action: 'showOptions',
  },
  {
    fromQuestionId: 'age',
    whenAnswer: ['30-39', '40-49'],
    affectQuestionId: 'favorite-topics',
    showOnlyOptionsIn: ['action', 'billionaire', 'royal-obsession'],
    action: 'showOptions',
  },
];
