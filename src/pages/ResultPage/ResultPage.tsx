import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ResultCard } from "../../components";
import { useAuth } from "../../context/AuthContext";
import { getQuiz } from "../../services/quizServices";
import { getResult } from "../../services/resultServices";
import { QuizResultType, QuizType } from "../../types/quizTypes";

function ResultPage() {
  const { currentUser } = useAuth();
  const { resultId } = useParams();
  const navigate = useNavigate();

  const [resultData, setResultData] = useState({} as QuizResultType);
  const [quizData, setQuizData] = useState({} as QuizType);

  useEffect(() => {
    if (resultId) {
      (async () => {
        const resultRes = await getResult(resultId);
        if (resultRes.uid) {
          setResultData(resultRes);
          const quizRes = await getQuiz(resultRes.quizId);
          if (quizRes.uid) setQuizData(quizRes);
        } else {
          navigate("-1");
        }
      })();
    } else {
      navigate("-1");
    }
  }, []);

  return (
    <>
      <h2 className="text-center m-sm">{quizData.title} Result</h2>
      {/* <!-- Result Container --> */}
      <div className="d-flex flex-column flex-center gap-sm m-auto">
        {/* <!-- Result Header --> */}
        <div className="d-flex score-header m-md">
          <span className="text-semibold">
            Total Time: {quizData.timelimit} seconds
          </span>
          <span className="text-semibold">
            Total Score:{" "}
            <span className="text-success"> {resultData.score} pts</span>
          </span>
        </div>
      </div>

      {/* <!-- Actual Results --> */}
      <div className="d-flex flex-column result-container">
        {/* ResultCard */}
        {quizData.questions?.map((question, index) => (
          <ResultCard
            key={index}
            quizQuestion={question}
            result={Number(resultData.options[index])}
            index={index}
          />
        ))}
      </div>

      <div className="d-flex justify-between px-sm">
        <Link className="btn btn-rounded btn-sm m-sm" to="-1">
          Go Back
        </Link>
        <Link className="btn btn-rounded btn-sm m-sm btn-warn" to="/quiz">
          Try Again
        </Link>
      </div>
    </>
  );
}

export default ResultPage;
