import { Link } from "react-router-dom";

export default function signup() {
  return (
    <div className="container">
      <div className="card">
        <h3 className="logo">PMS</h3>
        <p className="title">Sign in to your account </p>
        <div className="form">
          <label className="email">Email</label>
          <input className="email-input" type="email" />

          <label className="password">Password</label>
          <input className="password-input" type="password" />

          <div className="fp-section">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p className="fp">Forgot password?</p>
          </div>
          <div className="signin"><p>Sign In</p></div>
        </div>

        {/* <div className="account">Don’t have an account? Sign up</div> */}
      </div>
    </div>
  );
}
