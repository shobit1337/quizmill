import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div
      className="d-flex flex-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="card login-card p-md gap-sm">
        <h4 className="text-primary text-center">Sign Up</h4>
        <div className="d-flex items-center gap-sm flex-grow">
          <i className="far fa-user"></i>
          <input
            placeholder="Enter your Email"
            className="input-field login-field"
            type="email"
            name="login"
            id="login"
          />
        </div>

        <div className="d-flex items-center gap-sm">
          <i className="fas fa-lock"></i>
          <input
            placeholder="Enter your password"
            className="input-field login-field radius-md"
            type="text"
            name="password"
            id="password"
          />
        </div>
        <button className="btn radius-md btn-sm">Sign-Up</button>
        <div className="text-center">
          Already user?
          <Link className="link link:hover" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
