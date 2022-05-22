import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, QuestionCard, Rules } from "../../components";
import { useAuth } from "../../context/AuthContext";
import { getQuiz, submitQuiz } from "../../services/quizServices";
import { QuizResultType, QuizType } from "../../types/quizTypes";

function QuizPage() {
  const { currentUser } = useAuth();
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState({} as QuizType);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [timeleft, setTimeleft] = useState(999);

  const [progress, setProgress] = useState({
    quizId,
    quizTime: new Date(),
    player: currentUser?.uid,
    score: 0,
    options: [],
  } as QuizResultType);

  const submitQuizHandler = async () => {
    const result = await submitQuiz(progress, currentUser);
    toast.success("Quiz submitted!");
    navigate(`/profile/result/${result?.uid}`);
  };

  const nextHandler = async (selectedOption: number) => {
    let newProgress = {
      ...progress,
      options: [...progress.options, selectedOption.toString()],
    };

    if (selectedOption === quizData.questions[currentQuestion].correct) {
      newProgress = {
        ...newProgress,
        score: progress.score + 1,
      };
    }
    setProgress({ ...newProgress });
    if (currentQuestion >= quizData.questions.length - 1) {
      const result = await submitQuiz(newProgress, currentUser);
      toast.success("Quiz submitted!");
      navigate(`/profile/result/${result?.uid}`);
    } else {
      setCurrentQuestion((no) => no + 1);
    }
  };

  useEffect(() => {
    if (quizId) {
      (async () => {
        const quizRes = await getQuiz(quizId);
        if (quizRes.uid) {
          setQuizData(quizRes);
          setTimeleft(quizRes.timelimit);
        } else {
          navigate("-1");
        }
      })();
    } else {
      navigate("-1");
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isQuizStarted) {
      interval = setInterval(() => {
        setTimeleft((time) => {
          if (time - 1 <= 0) {
            submitQuizHandler();
            return 999;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isQuizStarted]);

  if (quizData.uid) {
    if (isQuizStarted) {
      return (
        <>
          <h2 className="text-center m-sm">{quizData.title}</h2>
          <div className="d-flex flex-column flex-center gap-sm m-auto">
            <div className="d-flex score-header m-md">
              <span className="text-semibold">
                Question: {currentQuestion + 1}/{quizData.questions.length}
              </span>
              <span className="text-semibold">
                Timeleft :{" "}
                <span className="text-success"> {timeleft} seconds</span>
              </span>
            </div>

            <QuestionCard
              quizQuestion={quizData.questions[currentQuestion]}
              next={nextHandler}
              submit={submitQuizHandler}
            />
          </div>
        </>
      );
    } else {
      return (
        <Rules title={quizData.title} start={() => setIsQuizStarted(true)} />
      );
    }
  }
  return <div>Loading...</div>;
}

export default QuizPage;
