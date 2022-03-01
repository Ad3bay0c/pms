import { Link } from "react-router-dom";
import './signin.css';
export default function signup() {
  return (
    <div className="container">
      <div className="card">
        <h2 className="logo">PMS</h2>
        <p className="title">Sign in to your account </p>
        <div className="form">
          <label className="email">Email</label>
          <input className="email-input" type="email" />

          <label className="password">Password</label>
          <input className="password-input" type="password" />

          <div className="fp-section">
            <input type="checkbox" />
            <div className="remember">
              <p className="rm">Remember me</p>
              <p className="fp">Forgot password?</p>
            </div> 
          </div>
          <div className="signin">
            <p>Sign In</p>
          </div>
        </div>

        <div className="account">Don’t have an account? Sign up</div>
      </div>
    </div>
  );
}
