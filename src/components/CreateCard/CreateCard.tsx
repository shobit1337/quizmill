import React from "react";
import { QuizQuestionType, QuizType } from "../../types/quizTypes";
type propType = {
  question: QuizQuestionType;
  updateQuestion: (index: number, question: QuizQuestionType) => void;
  index: number;
  removeQuestion: (index: number) => void;
};

function CreateCard({
  question,
  updateQuestion,
  index,
  removeQuestion,
}: propType) {
  const updateOptionHandler = (optionIndex: number, option: string) => {
    const newQuestion: QuizQuestionType = {
      ...question,
      options: [
        ...question.options.slice(0, optionIndex),
        option,
        ...question.options.slice(optionIndex + 1),
      ],
    };
    updateQuestion(index, newQuestion);
  };

  const updateQuestionHandler = (value: string) => {
    const newQuestion = {
      ...question,
      question: value,
    };
    updateQuestion(index, newQuestion);
  };

  const updateCorrectHandler = (optionIndex: number) => {
    const newQuestion = {
      ...question,
      correct: optionIndex,
    };
    updateQuestion(index, newQuestion);
  };

  return (
    <div className="d-flex flex-column gap-xs">
      <div className="d-flex gap-sm justify-center flex-wrap items-center text-lg">
        <input
          required
          type="text"
          id="question-title"
          className="border radius-md p-xxxs flex-grow text-md"
          placeholder="Question"
          value={question.question}
          onChange={(e) => updateQuestionHandler(e.target.value)}
        />
        <i
          className="fas fa-trash cursor-pointer"
          onClick={() => removeQuestion(index)}
        ></i>
      </div>
      <div className="d-flex gap-sm justify-around flex-wrap flex-grow ">
        <span className="d-flex items-center justify-center flex-grow px-md flex-wrap">
          <input
            required
            type="text"
            className={`border radius-lg p-xxxs text-md text-center flex-grow ${
              question.correct === 0 ? `border-success` : ``
            }`}
            placeholder="Option 1"
            value={question.options[0]}
            onChange={(e) => updateOptionHandler(0, e.target.value)}
          />
          <button
            type="button"
            className={`correct-btn ${question.correct === 0 ? `active` : ``}`}
            onClick={() => updateCorrectHandler(0)}
          >
            <i className="far fa-check-circle"></i>
          </button>
        </span>
        <span className="d-flex items-center justify-center  flex-grow px-md flex-wrap">
          <input
            required
            type="text"
            className={`border radius-lg p-xxxs text-md text-center flex-grow ${
              question.correct === 1 ? `border-success` : ``
            }`}
            placeholder="Option 2"
            value={question.options[1]}
            onChange={(e) => updateOptionHandler(1, e.target.value)}
          />
          <button
            type="button"
            className={`correct-btn ${question.correct === 1 ? `active` : ``}`}
            onClick={() => updateCorrectHandler(1)}
          >
            <i className="far fa-check-circle"></i>
          </button>
        </span>
      </div>
      <div className="d-flex gap-sm justify-around flex-wrap">
        <span className="d-flex items-center justify-center flex-wrap flex-grow px-md">
          <input
            required
            type="text"
            className={`border radius-lg p-xxxs text-md text-center flex-grow ${
              question.correct === 2 ? `border-success` : ``
            }`}
            placeholder="Option 3"
            value={question.options[2]}
            onChange={(e) => updateOptionHandler(2, e.target.value)}
          />
          <button
            type="button"
            className={`correct-btn ${question.correct === 2 ? `active` : ``}`}
            onClick={() => updateCorrectHandler(2)}
          >
            <i className="far fa-check-circle"></i>
          </button>
        </span>
        <span className="d-flex items-center justify-center flex-grow flex-wrap px-md">
          <input
            required
            type="text"
            className={`border radius-lg p-xxxs text-md text-center flex-grow ${
              question.correct === 3 ? `border-success` : ``
            }`}
            placeholder="Option 4"
            value={question.options[3]}
            onChange={(e) => updateOptionHandler(3, e.target.value)}
          />
          <button
            type="button"
            className={`correct-btn ${question.correct === 3 ? `active` : ``}`}
            onClick={() => updateCorrectHandler(3)}
          >
            <i className="far fa-check-circle"></i>
          </button>
        </span>
      </div>
    </div>
  );
}

export default CreateCard;
