import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REMOVE_ALERT,
  REMOVE_ERROR,
  SET_ALERT,
  SET_ERROR,
} from "./type";

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/user-login ", { email, password });
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
      // navigate("/");
    }, 2000);
  } catch (err) {
    dispatch({
      type: SET_ALERT,
      payload: { msg: err.response.data.message, type: "danger" },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 3000);
  }
};
// Register User
export const RegisterUser = (user) => async (dispatch) => {
    try {
      const res = await axios.post("/register", user);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      setTimeout(() => {
        dispatch({
          type: REMOVE_ALERT,
        });
        // navigate("/successful");
      }, 2000);
    } catch (err) {
      console.log(err.response.data.errors);
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.errors,
      });

      setTimeout(() => {
        dispatch({
          type: REMOVE_ERROR,
        });
      }, 3000);
    }
  };
// Logout User
export const LogoutUser = () => {
  const navigate = useNavigate();
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
    navigate("/login");
  };
};

// Load Userz
export const LoadOrganization = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/settings/get-organization/${localStorage.getItem("p")}`
    );
    console.log(res.data);
    // dispatch({
    //   type: LOAD_ORGANIZATION,
    //   payload: res.data,
    // });
  } catch (err) {
    console.log(err.response);
  }
};
