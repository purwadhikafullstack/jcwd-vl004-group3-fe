import Axios from "axios";
import { API_URL } from "../../constants/API";

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post(`${API_URL}/user/login`, {
        email,
        password,
      });

      if (result.data.token) {
        await localStorage.setItem("userData", JSON.stringify(result.data[0]));
        dispatch({
          type: "USER_LOGIN",
          payload: result.data,
        });
      } else {
        dispatch({
          type: "USER_ERROR",
          payload: "Wrong username or password.",
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "USER_ERROR",
        payload: "Login failed:\n" + error,
      });
    }
  };
};

export const logoutUser = () => {
  localStorage.removeItem("userData");

  return {
    type: "USER_LOGOUT",
  };
};

export const checkStorage = () => {
  return {
    type: "CHECK_STORAGE",
  };
};
