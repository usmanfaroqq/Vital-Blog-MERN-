import axios from "axios";
import { POST_ERRORS, SET_LOADER, CLOSE_LOADER, REDIRECT_TRUE, REDIRECT_FALSE } from "../types/PostTypes";
const token = localStorage.getItem("myToken");
export const createAction = (formData) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: { 
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post("createNew_post", formData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type:REDIRECT_TRUE})
    } catch (error) {
        console.log(error.response);
      const { errors } = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_ERRORS, payload: errors });
    }
  };
};
