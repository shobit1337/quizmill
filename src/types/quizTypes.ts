type QuizType = {
  author: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: QuizQuestionType[];
  timelimit: number;
  uid: string;
};

type QuizQuestionType = {
  question: string;
  options: string[];
  correct: number;
};

type QuizResultType = {
  uid?: string;
  quizId: string;
  quizTime: Date;
  player: string;
  score: number;
  options: string[];
};

export type { QuizType, QuizQuestionType, QuizResultType };
