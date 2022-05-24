import { useEffect, useState } from "react";
import { QuizCard } from "../../components";
import { getAllQuizes } from "../../services/quizServices";
import { QuizType } from "../../types/quizTypes";

const categories = [
  {
    id: "",
    title: "All",
    color: "bg-dark-lighter",
  },
  {
    id: "technology",
    title: "Technology",
    color: "bg-secondary",
  },
  {
    id: "javascript",
    title: "JavaScript",
    color: "bg-accient",
  },
  {
    id: "cpp",
    title: "C Pogramming",
    color: "bg-danger",
  },
  {
    id: "generalknowledge",
    title: "General Knowledge",
    color: "bg-success",
  },
  {
    id: "reactjs",
    title: "React",
    color: "bg-warn",
  },
];

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
      <div
        className="category-container d-flex gap-sm text-md m-sm"
        id="category-container"
        onClick={(e) => setSelectedCategory((e.target as HTMLElement).id)}
      >
        {categories.map((category) => (
          <span
            key={category.id}
            id={category.id}
            className={`quiz-category ${category.color} cursor-pointer`}
          >
            {category.title}
          </span>
        ))}
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
