import * as actionTypes from "../constants/cartConstants";
import axios from "../configAxios";

export const checkoutCart = (total, seat) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.CHECK_OUT_REQUEST });
    const id_seat = JSON.parse(sessionStorage.getItem("movies"));
    const { data } = await axios.post(`booking/seat`, {
      id_schedule: id_seat.id,
      total: total,
      seat: seat,
    });
    dispatch({
      type: actionTypes.CHECK_OUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CHECK_OUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
