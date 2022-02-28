import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => (
  <div className="card table-responsive">
    <div className="logo">PMS</div>
    <div className="title">Register your Organization</div>
    <div className="title2">Create your Organization</div>
    <div className="">
      <label htmlFor="organization" className="organization">
        Organization Name
      </label>
      <input
        type="text"
        placeholder="Organization Name"
        className="organization"
      />

      <label htmlFor="organization" className="email">
        Email
      </label>
      <input type="email" placeholder="info@company.com" className="email" />

      <label htmlFor="organization" className="password">
        Password
      </label>
      <input type="password" placeholder="***********" className="password" />

      <label htmlFor="organization" className="confirm">
        Confirm Password
      </label>
      <input type="password" placeholder="***********" className="confirm" />

      <input type="submit" className="submit" value="Register" />
      <input type="submit" className="submit2" value="Create" />

      <div className="footer">
        Already have an account?{" "}
        <Link to="/login" className="link">
          {" "}
          Sign in
        </Link>
      </div>
    </div>
  </div>
);

export default Register;
