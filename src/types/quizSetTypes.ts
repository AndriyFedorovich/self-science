export type AnswerType = 'text' | 'range' | 'select';

export type questionType = {
  id: string;
  text?: string;
  isRequired: boolean;
  answerType: AnswerType;
};

export type quizSetStatusType = 'inactive' | 'active' | 'editing';
export type NotificationsType = 'never' | 'weekly' | 'daily';

export type quizSetType = {
  id: string;
  title?: string;
  questions?: questionType[];
  status: quizSetStatusType;
  notificationsType: NotificationsType;
  onClick?: () => void;
};
