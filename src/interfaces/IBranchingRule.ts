
export interface IBranchingRule {
  fromQuestionId: string;
  whenAnswer: string | string[];
  showOnlyOptionsIn?: string[];
  goToQuestionId?: string;
  affectQuestionId?: string;
  action: 'showOptions' | 'hideOptions' | 'skipTo' | 'replaceQuestion' | 'none';
}
