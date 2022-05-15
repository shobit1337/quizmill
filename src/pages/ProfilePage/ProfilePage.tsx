function ProfilePage() {
  return (
    <div className="main-content d-flex flex-column p-lg">
      <div className="header-title">
        <h1>Settings</h1>
      </div>
      <div className="header-nav d-flex gap-sm m-sm pb-sm border-bottom">
        <span className="nav-item">Edit Profile</span>
        <span className="nav-item">Privacy</span>
        <span className="nav-item">Change Password</span>
      </div>

      <div className="user-dashboard-contaioner d-flex gap-sm flex-wrap justify-center">
        <div className="user-container">
          <div className="card-header d-flex justify-between">
            <span>User Information</span>
            <button className="btn btn-sm btn-rounded">Save</button>
          </div>
          <div className="card-main d-flex flex-column">
            <label htmlFor="usename">Username</label>

            <input
              type="text"
              name=""
              id="username"
              className="border radius-lg p-xxxs m-xxs"
            />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              className="border radius-lg p-xxxs m-xxs"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name=""
              id="email"
              className="border radius-lg p-xxxs m-xxs"
            />
          </div>
        </div>
        <div className="account-container">
          <div className="card-header d-flex justify-between">
            <span>Account details </span>
            <button className="btn btn-sm btn-rounded">Save</button>
          </div>
          <div className="card-main d-flex flex-column">
            <label htmlFor="account-type">Account type</label>
            <input
              type="text"
              name=""
              id="account-type"
              className="border radius-lg p-xxxs m-xxs"
            />
            <label htmlFor="organizaton">Organizaton</label>
            <input
              type="text"
              name=""
              id="organizaton"
              className="border radius-lg p-xxxs m-xxs"
            />
          </div>
          <span className="text-danger mx-sm">Delete Account </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
