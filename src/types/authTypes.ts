type AuthContextType = {
  currentUser: UserDataType;
  signin: (email: string, password: string) => void;
  signup: (userObj: NewUserType) => void;
  signout: () => void;
  loginWithGoogle: () => void;
  isLoggedIn: boolean;
};

type NewUserType = {
  name: string;
  email: string;
  password: string;
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
};

type HistoryType = {
  resultId: string;
  score: number;
};

export type { HistoryType, AuthContextType, UserDataType };
