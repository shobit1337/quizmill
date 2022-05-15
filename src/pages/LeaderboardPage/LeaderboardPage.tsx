function LeaderboardPage() {
  return (
    <div className="main-content d-flex flex-column p-lg">
      <div className="header-title">
        <h1>Leaderboard</h1>
      </div>
      <div className="header-nav d-flex gap-sm m-sm pb-sm  ">
        <span className="nav-item border-bottom">Global</span>{" "}
        <span className="nav-item border-bottom">Friends</span>{" "}
        <span className="nav-item border-bottom">Your Region</span>{" "}
      </div>

      <div className="leaderboard-container mx-sm ">
        <div className="leaderboard-header">
          <span>Rank #</span>
          <span>Username</span>
          <span>Quizes Played</span>
          <span>Avg answers</span>
          <span>Knowledge Level</span>
        </div>
        <div className="leaderboard-item">
          <span>1</span>
          <span>shobit1337</span>
          <span>999</span>
          <span>98%</span>
          <span>1337</span>
        </div>
        <div className="leaderboard-item">
          <span>2</span>
          <span>adsgreav</span>
          <span>999</span>
          <span>98%</span>
          <span>1337</span>
        </div>
        <div className="leaderboard-item">
          <span>3</span>
          <span>adf4eragv</span>
          <span>999</span>
          <span>98%</span>
          <span>1337</span>
        </div>
        <div className="leaderboard-item">
          <span>4</span>
          <span>adfa4eafad</span>
          <span>999</span>
          <span>98%</span>
          <span>1337</span>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
