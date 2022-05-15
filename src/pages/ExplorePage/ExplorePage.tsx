import { Link } from "react-router-dom";
import { QuizCard } from "../../components";

function ExplorePage() {
  return (
    <>
      <h4 className="m-sm">Popular Categories</h4>
      <div className="category-container grid grid-6 gap-sm text-md m-sm">
        <Link to="explore" className="quiz-category bg-secondary">
          General Knowledge
        </Link>
        <Link to="explore" className="quiz-category bg-accient">
          Trivia
        </Link>
        <Link to="explore" className="quiz-category bg-danger">
          Geography
        </Link>
        <Link to="explore" className="quiz-category bg-success">
          Math
        </Link>
        <Link to="explore" className="quiz-category bg-warn">
          Science
        </Link>
        <Link to="explore" className="quiz-category bg-dark-lighter">
          Technology
        </Link>
      </div>
      <hr />
      <h4 className="m-sm">Most Popular</h4>
      <div className="d-flex gap-lg flex-wrap m-sm">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </>
  );
}

export default ExplorePage;
