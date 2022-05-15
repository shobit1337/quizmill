function ResultCard() {
  return (
    <div>
      <p className="text-md m-md">
        <span className="text-bold">Question 1: </span>How do you call a
        function named "myFunction"?
      </p>
      <div className="d-flex flex-column items-center gap-sm">
        <li className="quiz-option">call myFunction()</li>
        <li className="quiz-option bg-success">myFunction()</li>
        <li className="quiz-option">call function myFunction()</li>
      </div>
    </div>
  );
}

export default ResultCard;
