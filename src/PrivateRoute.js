import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, auth: {isAuthenticated, token} }) => {
  if (token === null) {
    return <Navigate to="/login" />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
const mapStateToProp = state => ({
  auth: state.auth
})
export default connect(mapStateToProp)(PrivateRoute);
