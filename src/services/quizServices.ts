import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

import { db } from "../firebaseConfig";
import { HistoryType, UserDataType } from "../types/authTypes";
import { QuizResultType, QuizType } from "../types/quizTypes";

export const createQuiz = async (quiz: QuizType, user: UserDataType) => {
  const quizObj = {
    ...quiz,
    author: user?.uid,
    uid: uuid(),
  };
  try {
    const quizRef = await doc(collection(db, "quizes"), quizObj.uid);
    await setDoc(quizRef, {
      ...quizObj,
    });

    const userRef = await doc(collection(db, "users"), user?.uid);
    await setDoc(
      userRef,
      {
        quizes: [...(user?.quizes as string[]), quizObj.uid],
      },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllQuizes = async (): Promise<QuizType[]> => {
  const allQuizes: QuizType[] = [];
  const q = query(collection(db, "quizes"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allQuizes.push(doc.data() as QuizType);
  });
  return allQuizes;
};

export const getQuiz = async (quizId: string): Promise<QuizType> => {
  const workspaceDoc = await getDoc(doc(db, "quizes", quizId));
  return workspaceDoc?.data() as QuizType;
};

export const submitQuiz = async (
  result: QuizResultType,
  user: UserDataType
) => {
  const quizObj = {
    ...result,
    uid: uuid(),
  };

  try {
    const resultRef = await doc(collection(db, "results"), quizObj.uid);
    await setDoc(resultRef, {
      ...quizObj,
    });

    const userRef = await doc(collection(db, "users"), user?.uid);
    await setDoc(
      userRef,
      {
        history: [
          ...(user?.history as HistoryType[]),
          { resultId: quizObj.uid, score: quizObj.score },
        ],
      },
      { merge: true }
    );
    return quizObj;
  } catch (error) {
    console.error(error);
  }
};
