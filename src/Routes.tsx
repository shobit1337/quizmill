import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import App from "./App";
import { PrivateRoute } from "./components";
import {
  CreatePage,
  ExplorePage,
  HomePage,
  LeaderboardPage,
  LoginPage,
  ProfilePage,
  QuizPage,
  ResultPage,
  SignupPage,
} from "./pages";

function Routes() {
  return (
    <Router>
      <RoutesContainer>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/result/:resultId" element={<ResultPage />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
            <Route path="/create" element={<CreatePage />} />
          </Route>
          <Route element={<PrivateRoute authRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Route>
      </RoutesContainer>
    </Router>
  );
}

export default Routes;
