import { Link } from "react-router-dom";
import "../../styles/Register.css";

const Register = () => (
  <div className="card1">
    <div className="logo">PMS</div>
    <div className="title">Register your Organization</div>
    <div className="title2">Create your Organization</div>

    <form>
      <label htmlFor="organization" className="organizationLabel">
        Organization Name
      </label>
      <input
        type="text"
        placeholder="Organization Name"
        className="organization"
        required
      />

      <label htmlFor="organization" className="emailLabel">
        Email
      </label>
      <input
        type="email"
        placeholder="info@company.com"
        className="email"
        required
      />

      <label htmlFor="organization" className="passwordLabel">
        Password
      </label>
      <input
        type="password"
        placeholder="***********"
        className="password"
        required
      />

      <label htmlFor="organization" className="confirmLabel">
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="***********"
        className="confirm"
        required
      />

      <input type="submit" className="submit" value="Register" />
      <input type="submit" className="submit2" value="Create" />
    </form>

    <div className="footer">
      Already have an account?{" "}
      <Link to="/login" className="link">
        {" "}
        Sign in
      </Link>
    </div>
  </div>
);

export default Register;
