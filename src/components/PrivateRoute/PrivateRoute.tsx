import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ authRoute = false }) => {
  const { isLoggedIn } = useAuth();

  if (authRoute) {
    return isLoggedIn ? <Navigate replace to={"/"} /> : <Outlet />;
  }
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
