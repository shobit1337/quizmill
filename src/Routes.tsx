import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import App from "./App";
import {
  ExplorePage,
  HomePage,
  LeaderboardPage,
  ProfilePage,
  QuizPage,
  ResultPage,
} from "./pages";

function Routes() {
  return (
    <Router>
      <RoutesContainer>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/result/:resultId" element={<ResultPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Route>
      </RoutesContainer>
    </Router>
  );
}

export default Routes;
