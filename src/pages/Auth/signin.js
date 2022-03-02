import { Link } from "react-router-dom";
import "../../styles/signin.css";

export default function signup() {
  return (
    <div className="container">
      <div className="card">
        <h2 className="logo">PMS</h2>
        <p className="title">Sign in to your account </p>
        <div className="form">
          <form>
            <label className="email">Email</label>
            <input className="email-input" type="email" placeholder="info@company.com" required />

            <label className="password">Password</label>
            <input className="password-input" type="password" placeholder="***********" required />

            <div className="fp-section">
              <input type="checkbox" />
              <div className="remember">
                <p className="rm">Remember me</p>
                <p className="fp">Forgot password?</p>
              </div>
            </div>
            <input type="submit" value="Sign In" className="signin" />
          </form>
        </div>

        <div className="account">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
