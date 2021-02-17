// @ts-check

import PropTypes from "prop-types";
import Errors from "../error/Errors";

const AuthPage = ({
  title,
  getLink = () => <span>link</span>,
  showUsername = false,
  onSubmit,
  isLoading,
  error,
  updateAuthInfo,
  authInfo,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateAuthInfo({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(authInfo);
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{title}</h1>
            <p className="text-xs-center">{getLink()}</p>
            <Errors error={error} />
            <form onSubmit={handleSubmit}>
              {showUsername && (
                <fieldset className="form-group">
                  <input
                    onChange={handleChange}
                    value={authInfo.username || ""}
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    data-testid="input-username"
                  />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input
                  onChange={handleChange}
                  value={authInfo.email || ""}
                  className="form-control form-control-lg"
                  type="text"
                  name="email"
                  placeholder="Email"
                  data-testid="input-email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={handleChange}
                  value={authInfo.password || ""}
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  data-testid="input-password"
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={isLoading}
              >
                {title}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  title: PropTypes.string.isRequired,
  getLink: PropTypes.func,
  showUsername: PropTypes.bool,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default AuthPage;
