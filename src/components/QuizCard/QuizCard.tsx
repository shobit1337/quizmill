import { useState } from "react";
import { Modal, Rules } from "../";

function QuizCard() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  return (
    <div className="card card-shadow">
      <img
        className="card-image"
        src="https://images.prismic.io/quizlet-prod/eca927aa-4f86-4e40-9565-8dd2fefb2cde_hero+image+shaded.png?auto=compress,format"
        alt="image"
      />
      <div className="card-main d-flex flex-column gap-xxs">
        <span className="card-title">JavaScript Quiz</span>
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="d-flex justify-between items-center">
          <span
            className="btn btn-rounded btn-sm"
            onClick={() => setIsRulesOpen(true)}
          >
            Start Quiz
          </span>
          <i className="fas fa-share-alt px-sm"></i>
        </div>
      </div>
      {isRulesOpen && (
        <Modal onClose={() => setIsRulesOpen(false)}>
          <Rules />
        </Modal>
      )}
    </div>
  );
}

export default QuizCard;
