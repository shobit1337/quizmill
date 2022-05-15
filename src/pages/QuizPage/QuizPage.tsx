function QuizPage() {
  return (
    <>
      <h2 className="text-center m-sm">JavaScript Quiz</h2>
      <div className="d-flex flex-column flex-center gap-sm m-auto">
        <div className="d-flex score-header m-md">
          <span className="text-semibold">Question: 1/10</span>
          <span className="text-semibold">
            Score: <span className="text-success"> 50 pts</span>
          </span>
        </div>
        <div className="d-flex flex-column">
          <div>
            <p className="text-md m-md text-bold">
              How do you call a function named "myFunction"?
            </p>
            <div className="d-flex flex-column items-center gap-sm">
              <li className="quiz-option">call myFunction()</li>
              <li className="quiz-option">myFunction()</li>
              <li className="quiz-option">call function myFunction()</li>
            </div>
            <div className="d-flex justify-between px-sm">
              <button className="btn btn-rounded btn-sm m-sm btn-warn">
                Submit
              </button>
              <span className="btn btn-rounded btn-sm m-sm">Next</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
