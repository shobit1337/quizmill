import { useRef } from "react";
import { QuizQuestionType } from "../../types/quizTypes";

type PropsType = {
  quizQuestion: QuizQuestionType;
  result: number;
  index: number;
};

function ResultCard({ quizQuestion, result, index }: PropsType) {
  const isAnswered = useRef(result >= 0 ? true : false);
  return (
    <div>
      <p className="text-md m-md">
        <span className="text-bold">Question {index + 1}: </span>
        {quizQuestion.question}
      </p>
      <div className="d-flex flex-column items-center gap-sm">
        {quizQuestion.options.map((option, index) => (
          <li
            key={index}
            className={`quiz-option ${
              isAnswered
                ? result === index
                  ? quizQuestion.correct === result
                    ? "bg-success"
                    : "bg-danger"
                  : ""
                : quizQuestion.correct === index
                ? "text-success"
                : ""
            }`}
          >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ResultCard;
