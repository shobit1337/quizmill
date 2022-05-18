import { toast } from "react-toastify";
import { QuizCard } from "../../components";

function HomePage() {
  toast.success("Signed Up Successfully!");
  return (
    <>
      <h2 className="text-center m-sm">Quizzes Available</h2>

      <div className="d-flex flex-center gap-lg flex-wrap">
        <QuizCard />
        <QuizCard />
      </div>
    </>
  );
}

export default HomePage;
