import { useAuthContext } from "../../state/auth/context";

const SettingsPage = () => {
  const { user, isLoading, setUserInfo, onEditUser } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser();
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    value={user.image}
                    name="image"
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={user.username}
                    onChange={handleChange}
                    name="username"
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    value={user.bio}
                    name="bio"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    disabled={isLoading}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value=""
                    name="password"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    disabled={isLoading}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isLoading}
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
