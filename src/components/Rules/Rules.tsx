import { useState } from "react";
import { useNavigate } from "react-router-dom";
type PropsType = {
  title: string;
  start: () => void;
};

function Rules({ title, start }: PropsType) {
  const navigate = useNavigate();
  const [agreedToRules, setAgreedToRules] = useState(false);
  return (
    <div>
      <h2 className="text-center m-sm">{title}</h2>

      <div className="d-flex flex-column flex-center gap-sm m-auto">
        <ul className="list">
          <li className="list-title">Rules for the quiz:</li>
          <li className="list-item">
            The countdown timer at the top right corner of screen will display.
          </li>
          <li className="list-item">Each question have 4 options.</li>
          <li className="list-item">
            There will be 1 marks for every correction answer.
          </li>
          <li className="list-item">
            There will be no deduction on wrong answer.
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
          <input
            type="checkbox"
            name=""
            id="agree-rules"
            checked={agreedToRules}
            onChange={() => setAgreedToRules((state) => !state)}
          />
          <label htmlFor="agree-rules">I agree to all the rules</label>
          <div className="mt-sm">
            <button
              onClick={() => agreedToRules && start()}
              className="btn btn-sm"
            >
              Start
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-sm btn-secondary"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
