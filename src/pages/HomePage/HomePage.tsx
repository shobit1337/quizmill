import { useEffect, useState } from "react";
import { QuizCard } from "../../components";
import { getAllQuizes } from "../../services/quizServices";
import { QuizType } from "../../types/quizTypes";

function HomePage() {
  const [quizes, setQuizes] = useState([] as QuizType[]);

  useEffect(() => {
    (async () => {
      const quizesData = await getAllQuizes();
      console.log(quizesData);
      if (quizesData) {
        setQuizes(quizesData);
      }
    })();
  }, []);
  return (
    <>
      <h2 className="text-center m-sm">Quizzes Available</h2>

      <div className="d-flex flex-center gap-lg flex-wrap">
        {quizes.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
