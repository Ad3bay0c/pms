import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/signin.css";
import Logo from "../../components/Alert/logo";
import { LoginUser } from "../../actions/authAction";

const SignIn = ({ auth: { isAuthenticated }, LoginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim().length < 4) {
      setError("Please fill all fields");
    } else {
      setError("");
      LoginUser(email, password);
      if (isAuthenticated) {
        navigate("/");
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="sign-logo">
          <Logo />
        </div>
        <p className="sign-title">Sign in to your account </p>
        <div className="form">
          <form onSubmit={handleLogin}>
            {error && (
              <span
                className="error"
                style={{ color: "red", marginLeft: "60px" }}
              >
                {error}
              </span>
            )}
            <label className="email">Email</label>
            <input
              className="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info@company.com"
              required
            />

            <label className="password">Password</label>
            <input
              className="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
              required
            />

            <div className="fp-section">
              <div className="remember">
                <input type="checkbox" />
                <p className="rm">Remember me</p>
              </div>
              <p className="fp">Forgot password?</p>
            </div>
            <input type="submit" value="Sign In" className="signin" />
          </form>
        </div>

        <div className="account">
          Don???t have an account?{" "}
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
SignIn.propTypes = {
  LoginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { LoginUser })(SignIn);
