import { Link } from "react-router-dom";

function Rules() {
  return (
    <div>
      <h2 className="text-center m-sm">JavaScript Quiz</h2>

      <div className="d-flex flex-column flex-center gap-sm m-auto">
        <ul className="list">
          <li className="list-title">Rules for the quiz:</li>
          <li className="list-item">
            The countdown timer at the top right corner of screen will display.
          </li>
          <li className="list-item">Each question have 4 options.</li>
          <li className="list-item">
            There will be 2 marks for every correction answer.
          </li>
          <li className="list-item">
            There will be deduction of 1 mark on wrong answer.
          </li>
          <li className="list-item">
            You can not visit the previous question.
          </li>
          <li className="list-item">
            Every question need to be completed in given time. It will be auto
            submitted.
          </li>
        </ul>
        <div>
          <input type="checkbox" name="" id="agree-rules" />
          <label htmlFor="agree-rules">I agree to all the rules</label>
          <div className="mt-sm">
            <Link to="quiz" className="btn btn-sm">
              Start
            </Link>
            <Link to="-1" className="btn btn-sm btn-secondary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
