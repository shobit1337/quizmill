import { QuizResultType } from "../types/quizTypes";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getResult = async (resultId: string): Promise<QuizResultType> => {
  const resultDoc = await getDoc(doc(db, "results", resultId));
  return resultDoc?.data() as QuizResultType;
};
