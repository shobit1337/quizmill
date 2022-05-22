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

export type { QuizType, QuizQuestionType };
