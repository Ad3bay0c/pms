import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
const Alert = () => {
  const { alert } = useContext(AuthContext);
  return alert !== null ? (
    <div className={`alert alert-${alert.type}`} style={{position:"fixed", top:"50px", right:"15px", zIndex:"10000"}}>{alert.msg}</div>
  ) : null;
};

export default Alert;
