import { useEffect } from "react";
import { connect } from "react-redux";
import { LoadOrganization } from "../../actions/authAction";

const Alert = ({ auth: { alert }, LoadOrganization }) => {
  useEffect(() => {
    if (localStorage.token) {
      LoadOrganization();
    }
    // eslint-disable-next-line
  }, []);
  return alert !== null ? (
    <div
      className={`alert alert-${alert.type}`}
      style={{ position: "fixed", top: "50px", right: "15px", zIndex: "10000" }}
    >
      {alert.msg}
    </div>
  ) : null;
};
const mapStateToProp = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProp, { LoadOrganization })(Alert);
