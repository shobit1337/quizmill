import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div
      className="d-flex flex-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="card login-card p-md gap-sm">
        <h4 className="text-primary text-center">Log-in</h4>
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

        <div>
          <input type="checkbox" name="remember me" id="remember-me" />
          <span className="mx-sm">Remember me</span>
        </div>

        <button className="btn btn-sm radius-md">Login</button>

        <div className="text-center">
          New to us?
          <Link className="link link:hover" to="/signup">
            SignUp
          </Link>
        </div>

        <div className="text-center">
          <Link className="link link:hover" to="/reset">
            Reset password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
