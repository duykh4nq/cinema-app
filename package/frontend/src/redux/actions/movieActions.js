import * as actionTypes from "../constants/movieConstants";
import axios from "../configAxios";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIES_REQUEST });
    const { data } = await axios.get("/");
    console.log(`🚀 => file: movieActions.js => line 8 => data`, data);
    dispatch({
      type: actionTypes.GET_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_MOVIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovieDetails = (slug) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
    const { data } = await axios.get(`detail/${slug}`);
    dispatch({
      type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
    sessionStorage.setItem(
      "movies",
      JSON.stringify(getState().getMovieDetails.movies)
    );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postBookingShow = (id) => async (dispatch) => {
  try {
    const idMov = JSON.parse(sessionStorage.getItem("movies"));
    dispatch({ type: actionTypes.GET_BOOKING_REQUEST });
    const { data } = await axios.post("/booking/now-showing", {
      id_movie: idMov.id,
    });
    dispatch({
      type: actionTypes.GET_BOOKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BOOKING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postBookingSeat = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
    const seat = JSON.parse(sessionStorage.getItem("movies"));
    const { data } = await axios.post(`booking/seat`, {
      id_schedule: seat.id,
    });
    dispatch({
      type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const increase = (qty) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_COUNTER_REQUEST });
//     dispatch({
//       type: actionTypes.GET_COUNTER_INCREASE,
//       payload: qty + 1,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_COUNTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const decrease = (qty) => async (dispatch) => {
//   try {
//     dispatch({
//       type: actionTypes.GET_COUNTER_INCREASE,
//       payload: qty - 1,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_COUNTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const checkoutCart = (total, seat) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHECK_OUT_REQUEST });
    const id_seat = JSON.parse(sessionStorage.getItem("movies"));
    console.log(`🚀 => file: cartActions.js => line 8 => id_seat`, id_seat.id);
    const { data } = await axios.post(`/payment`, {
      email: id_seat.id,
      id_schedule: id_seat.id,
      total: total,
      seat: seat,
    });
    if (data.message === "success") {
      alert("Payment success👏");
    }
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
