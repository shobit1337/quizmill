import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SignupPage() {
  const { signup, loginWithGoogle } = useAuth();
  const [inputFieldValues, setInputFieldValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const setFormFieldValues = (field: string, value: string) => {
    setInputFieldValues({ ...inputFieldValues, [field]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signup(inputFieldValues);
  };
  return (
    <div
      className="d-flex flex-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="card login-card p-md gap-sm">
          <h4 className="text-primary text-center">Sign Up</h4>
          <div className="d-flex items-center gap-sm flex-grow">
            <i className="far fa-user"></i>
            <input
              required
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
              required
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
            <button type="submit" className="btn radius-md btn-xs">
              Sign-Up
            </button>
            <button
              type="button"
              onClick={loginWithGoogle}
              className="btn radius-md btn-xs"
            >
              Join with Google
            </button>
          </div>
          <div className="text-center">
            Already user?
            <Link className="link link:hover" to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
