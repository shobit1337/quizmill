import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CreateCard } from "../../components";
import { useAuth } from "../../context/AuthContext";
import { createQuiz } from "../../services/quizServices";
import { QuizQuestionType, QuizType } from "../../types/quizTypes";

function CreatePage() {
  const question: QuizQuestionType = {
    question: "",
    options: ["", "", "", ""],
    correct: 0,
  };

  const initialQuiz: QuizType = {
    author: "",
    title: "",
    description: "This is quiz description",
    category: "",
    difficulty: "easy",
    questions: [],
    timelimit: 3000,
    uid: "",
  };

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [quiz, setQuiz]: [
    QuizType,
    React.Dispatch<React.SetStateAction<QuizType>>
  ] = useState({ ...initialQuiz });

  const addNewQuestion = (): void => {
    setQuiz((quiz) => ({
      ...quiz,
      questions: [...quiz.questions, { ...question }],
    }));
  };

  const updateQuestion = (index: number, question: QuizQuestionType): void => {
    setQuiz((quiz) => ({
      ...quiz,
      questions: [
        ...quiz.questions.slice(0, index),
        { ...question },
        ...quiz.questions.slice(index + 1),
      ],
    }));
  };

  const removeQuestion = (index: number): void => {
    setQuiz((quiz) => ({
      ...quiz,
      questions: [
        ...quiz.questions.slice(0, index),
        ...quiz.questions.slice(index + 1),
      ],
    }));
  };
  const createQuizHandler = async (e: any) => {
    e.preventDefault();
    await createQuiz(quiz, currentUser);
    toast.success("Quiz created successfully");
    setQuiz({ ...initialQuiz });
    navigate("/");
  };

  return (
    <form
      className="p-lg d-flex flex-column gap-lg"
      onSubmit={createQuizHandler}
    >
      <div className="d-flex items-center justify-between gap-md flex-wrap">
        <label htmlFor="quiz-title" className="text-xl">
          Quiz Title :
        </label>

        <input
          required
          type="text"
          id="quiz-title"
          className="border radius-md p-xxxs flex-grow text-xl"
          placeholder="Quiz Title"
          value={quiz.title}
          onChange={(e) =>
            setQuiz((quiz) => ({ ...quiz, title: e.target.value }))
          }
        />
        <label htmlFor="quiz-timelimit" className="text-xl">
          Time (seconds) :
        </label>
        <input
          required
          type="number"
          id="quiz-timelimit"
          name="quiz-timelimit"
          className="border radius-md p-xxxs flex-grow text-xl"
          placeholder="Timelimit"
          value={quiz.timelimit}
          onChange={(e) =>
            setQuiz((quiz) => ({ ...quiz, timelimit: Number(e.target.value) }))
          }
        />
        <label className="text-xl" htmlFor="quiz-category">
          Category :
        </label>
        <input
          required
          type="text"
          id="quiz-category"
          className="border radius-md p-xxxs flex-grow text-xl"
          placeholder="Category"
          value={quiz.category}
          onChange={(e) =>
            setQuiz((quiz) => ({ ...quiz, category: e.target.value }))
          }
        />
        <button className="btn btn-sm btn-rounded btn-success" type="submit">
          Create Quiz
        </button>
      </div>

      {quiz.questions.map((question, index) => {
        return (
          <CreateCard
            key={index}
            question={question}
            updateQuestion={updateQuestion}
            index={index}
            removeQuestion={removeQuestion}
          />
        );
      })}
      <div className="d-flex justify-center gap-md">
        <button
          type="button"
          className="btn btn-sm btn-rounded"
          onClick={addNewQuestion}
        >
          Add Question <i className="fas fa-plus"></i>
        </button>
        <button className="btn btn-sm btn-rounded btn-success" type="submit">
          Create Quiz
        </button>
      </div>
    </form>
  );
}

export default CreatePage;
