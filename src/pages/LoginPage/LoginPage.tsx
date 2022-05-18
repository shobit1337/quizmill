import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const [inputFieldValues, setInputFieldValues] = useState({
    email: "",
    password: "",
  });
  const { loginWithGoogle, signin } = useAuth();
  const setFormFieldValues = (field: string, value: string) => {
    setInputFieldValues({ ...inputFieldValues, [field]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signin(inputFieldValues.email, inputFieldValues.password);
  };
  return (
    <div
      className="d-flex flex-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <form onSubmit={handleSubmit}>
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
              value={inputFieldValues.email}
              onChange={(e) => setFormFieldValues("email", e.target.value)}
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
              value={inputFieldValues.password}
              onChange={(e) => setFormFieldValues("password", e.target.value)}
            />
          </div>

          <div className="d-flex flex-column  gap-xxs">
            <button type="submit" className="btn btn-xs radius-md">
              Login
            </button>
            <button className="btn btn-xs radius-md" onClick={loginWithGoogle}>
              Google Login
            </button>
          </div>
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
      </form>
    </div>
  );
}

export default LoginPage;
