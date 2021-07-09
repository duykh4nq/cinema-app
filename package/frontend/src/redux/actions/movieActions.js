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
    dispatch({ type: actionTypes.GET_BOOKING_REQUEST });
    const { data } = await axios.post("/booking/now-showing", {
      id_movie: id,
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

export const postBookingSeat = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
    const id_schedule = JSON.parse(sessionStorage.getItem("time"));
    const { data } = await axios.post(`booking/seat`, {
      id_schedule: id_schedule.id_schedule,
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

export const checkoutCart = (total, seat) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHECK_OUT_REQUEST });
    const id_schedule = JSON.parse(sessionStorage.getItem("time"));
    const { data } = await axios.post(`/payment`, {
      email: "ndkhang0512@gmail.com",
      id_schedule: id_schedule.id_schedule,
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
