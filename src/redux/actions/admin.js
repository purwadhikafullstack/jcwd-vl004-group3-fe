import Axios from "axios";
import { API_URL } from "../../constants/API";

export const loginAdmin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post(`${API_URL}/admin/login`, {
        email,
        password,
      });

      if (result.data.token) {
        await localStorage.setItem(
          "adminUserData",
          JSON.stringify(result.data)
        );
        dispatch({
          type: "ADMIN_LOGIN",
          payload: result.data,
        });
      } else {
        dispatch({
          type: "ADMIN_ERROR",
          payload: "Wrong username or password.",
        });
      }
    } catch (error) {
      if (error.response.status === 403) {
        alert("Wrong email or password.");
      }
      dispatch({
        type: "ADMIN_ERROR",
        payload: "Login failed:\n" + error,
      });
    }
  };
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminUserData");

  return {
    type: "ADMIN_LOGOUT",
  };
};

export const checkStorage = () => {
  return {
    type: "CHECK_STORAGE",
  };
};
