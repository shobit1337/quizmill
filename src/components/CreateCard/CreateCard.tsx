import React from "react";

function CreateCard() {
  return (
    <div className="d-flex flex-column gap-xs">
      <div className="d-flex gap-sm justify-center flex-wrap items-center text-lg">
        <input
          type="text"
          id="question-title"
          className="border radius-md p-xs flex-grow text-lg"
          placeholder="Question"
        />
        <i className="fas fa-trash"></i>
      </div>
      <div className="d-flex gap-sm justify-center flex-wrap">
        <input
          type="text"
          id="question-title"
          className="border radius-lg p-xxs text-md text-center"
          placeholder="Option 1"
        />
        <input
          type="text"
          id="question-title"
          className="border radius-lg p-xxs text-md text-center"
          placeholder="Option 2"
        />
      </div>
      <div className="d-flex gap-sm justify-center flex-wrap">
        <input
          type="text"
          id="question-title"
          className="border radius-lg p-xxs text-md text-center"
          placeholder="Option 3"
        />
        <input
          type="text"
          id="question-title"
          className="border radius-lg p-xxs text-md text-center"
          placeholder="Option 4"
        />
      </div>
    </div>
  );
}

export default CreateCard;
