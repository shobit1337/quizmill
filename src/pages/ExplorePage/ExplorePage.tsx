import { useEffect, useState } from "react";
import { QuizCard } from "../../components";
import { getAllQuizes } from "../../services/quizServices";
import { QuizType } from "../../types/quizTypes";

function ExplorePage() {
  const [quizes, setQuizes] = useState([] as QuizType[]);
  const [selectedQuizes, setSelectedQuizes] = useState([] as QuizType[]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    (async () => {
      const quizesData = await getAllQuizes();
      if (quizesData) {
        setQuizes(quizesData);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedCategory && quizes.length) {
      const selected = quizes.filter(
        (quiz) => quiz.category === selectedCategory
      );
      setSelectedQuizes([...selected]);
    }
  }, [selectedCategory]);

  return (
    <>
      <h4 className="m-sm">Popular Categories</h4>
      <div className="category-container grid grid-6 gap-sm text-md m-sm">
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-secondary cursor-pointer"
        >
          General Knowledge
        </span>
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-accient cursor-pointer"
        >
          Trivia
        </span>
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-danger cursor-pointer"
        >
          Geography
        </span>
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-success cursor-pointer"
        >
          Math
        </span>
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-warn cursor-pointer"
        >
          Science
        </span>
        <span
          onClick={() => setSelectedCategory("")}
          className="quiz-category bg-dark-lighter cursor-pointer"
        >
          Technology
        </span>
      </div>
      <hr />
      <h4 className="m-sm">Most Popular</h4>
      <div className="d-flex gap-lg flex-wrap m-sm">
        {selectedCategory
          ? selectedQuizes.map((quiz, index) => (
              <QuizCard key={index} quiz={quiz} />
            ))
          : quizes.map((quiz, index) => <QuizCard key={index} quiz={quiz} />)}
      </div>
    </>
  );
}

export default ExplorePage;
