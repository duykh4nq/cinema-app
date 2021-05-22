import * as actionTypes from "../constants/adminConstants";
import axios from "../configAxios";
// import { getSession, setSession } from "../../constants/function";

export const getCinema = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_CINEMA_REQUEST });
      const { data } = await axios.get("/admin/cinema");
      dispatch({
        type: actionTypes.GET_CINEMA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_CINEMA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };