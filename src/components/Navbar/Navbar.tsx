import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { isLoggedIn, signout } = useAuth();
  return (
    <nav className="navbar navbar-sticky bg-secondary text-light">
      <Link to="#sidenav-open" className="navbar-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
      <div className="d-flex justify-between gap-sm">
        <Link to="/" className="text-md text-semibold text-light mt-xxxxs">
          Quiz<span className="text-primary">mill</span>
        </Link>
        <div className="input-group d-flex justify-between items-center radius-full p-xxxxs bg-light text-dark">
          <i className="fas fa-search mx-xxxs"></i>
          <input className="input-field" type="text" placeholder="Search" />
        </div>
      </div>
      <ul className="navbar-list text-bold">
        <li className="navbar-item">
          <Link to="/explore">Explore More </Link>
        </li>

        {isLoggedIn && (
          <>
            <li className="navbar-item">
              <Link to="/leaderboard"> Leaderboard </Link>
            </li>
            <li className="navbar-item">
              <span className="avatar avatar-sm text-sm bg-light text-dark avatar-circle">
                <Link to="/profile">
                  <i className="far fa-user"></i>
                </Link>
              </span>
            </li>
          </>
        )}
        {isLoggedIn ? (
          <li className="navbar-item" onClick={signout}>
            Log out
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login"> Login </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
