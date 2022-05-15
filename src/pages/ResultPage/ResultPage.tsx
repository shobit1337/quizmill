import React from "react";
import { Link } from "react-router-dom";
import { ResultCard } from "../../components";

function ResultPage() {
  return (
    <>
      <h2 className="text-center m-sm">JavaScript Quiz Results</h2>
      {/* <!-- Result Container --> */}
      <div className="d-flex flex-column flex-center gap-sm m-auto">
        {/* <!-- Result Header --> */}
        <div className="d-flex score-header m-md">
          <span className="text-semibold">Time Taken: 15 mins</span>
          <span className="text-semibold">
            Total Score: <span className="text-success"> 50 pts</span>
          </span>
        </div>
      </div>

      {/* <!-- Actual Results --> */}
      <div className="d-flex flex-column result-container">
        {/* ResultCard */}
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
      <div className="d-flex justify-between px-sm">
        <Link className="btn btn-rounded btn-sm m-sm" to="-1">
          Go Back
        </Link>
        <Link className="btn btn-rounded btn-sm m-sm btn-warn" to="/quiz">
          Try Again
        </Link>
      </div>
    </>
  );
}

export default ResultPage;
