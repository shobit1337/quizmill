import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { QuizType } from "../../types/quizTypes";

type PropsType = {
  quiz: QuizType;
};

function QuizCard({ quiz }: PropsType) {
  const navigate = useNavigate();

  const shareQuizHandler = () => {
    navigator.clipboard.writeText(
      `https://quizmill.netlify.app/quiz/${quiz.uid}`
    );
    toast.info("Quiz link copied to clipboad.");
  };

  return (
    <div className="card card-shadow">
      <img
        className="card-image"
        src="https://images.prismic.io/quizlet-prod/eca927aa-4f86-4e40-9565-8dd2fefb2cde_hero+image+shaded.png?auto=compress,format"
        alt="image"
      />
      <div className="card-main d-flex flex-column gap-xxs">
        <span className="card-title">{quiz.title}</span>
        <div className="card-text">{quiz.description}</div>
        <div className="d-flex justify-between items-center">
          <span
            className="btn btn-rounded btn-sm"
            onClick={() => navigate(`/quiz/${quiz.uid}`)}
          >
            Start Quiz
          </span>
          <i className="fas fa-share-alt px-sm" onClick={shareQuizHandler}></i>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
