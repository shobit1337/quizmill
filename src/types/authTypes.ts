type AuthContextType = {
  currentUser: UserDataType;
  signin: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  signout: () => void;
  loginWithGoogle: () => void;
  isLoggedIn: boolean;
};

type UserDataType = {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
  friends: string[];
  history: HistoryType[];
  points: number;
  quizes: string[];
} | null;

type HistoryType = {
  quizId: string;
  score: number;
};

export type { HistoryType, AuthContextType, UserDataType };
