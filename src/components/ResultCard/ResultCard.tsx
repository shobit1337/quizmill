import { useMemo, useRef } from "react";
import { isNum } from "react-toastify/dist/utils";
import { QuizQuestionType } from "../../types/quizTypes";

type PropsType = {
  quizQuestion: QuizQuestionType;
  result: number;
  index: number;
};

function ResultCard({ quizQuestion, result, index }: PropsType) {
  const isAnswered = useMemo(() => (result >= 0 ? true : false), []);

  const getCorrectOption = (optionIndex: number) => {
    return isAnswered
      ? result === optionIndex
        ? quizQuestion.correct === result
          ? "bg-success"
          : "bg-danger"
        : quizQuestion.correct === optionIndex
        ? "bg-success"
        : ""
      : quizQuestion.correct === optionIndex
      ? "text-success"
      : "";
  };

  return (
    <div>
      <p className="text-md m-md">
        <span className="text-bold">Question {index + 1}: </span>
        {quizQuestion.question}
      </p>
      <div className="d-flex flex-column items-center gap-sm">
        {quizQuestion.options.map((option, optionIndex) => (
          <li
            key={optionIndex}
            className={`quiz-option ${getCorrectOption(optionIndex)}`}
          >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ResultCard;
