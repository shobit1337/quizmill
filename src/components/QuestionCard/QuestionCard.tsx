import { useState } from "react";
import { QuizQuestionType } from "../../types/quizTypes";

type PropsType = {
  quizQuestion: QuizQuestionType;
  submit: () => void;
  next: (selectedOption: number) => void;
};

function QuestionCard({ quizQuestion, submit, next }: PropsType) {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [error, setError] = useState("");

  const cleanup = () => {
    setSelectedOption(-1);
    setError("");
  };

  const handleNext = () => {
    if (selectedOption >= 0) {
      next(selectedOption);
      cleanup();
    } else setError("Please Select an option to continue...");
  };

  return (
    <div className="d-flex flex-column">
      <div>
        <p className="text-md m-md text-bold">{quizQuestion.question}</p>
        <p className="text-md m-md text-warning">{error}</p>
        <div className="d-flex flex-column items-center gap-sm">
          {quizQuestion.options.map((option, index) => (
            <li
              className={`quiz-option ${
                selectedOption === index ? `bg-success` : ``
              }`}
              key={index}
              onClick={() => setSelectedOption(index)}
            >
              {option}
            </li>
          ))}
        </div>
        <div className="d-flex justify-between px-sm">
          <button
            className="btn btn-rounded btn-sm m-sm btn-warn"
            type="button"
            onClick={() => {
              submit();
              cleanup();
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-rounded btn-sm m-sm"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
