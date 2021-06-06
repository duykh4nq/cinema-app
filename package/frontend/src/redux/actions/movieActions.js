import * as actionTypes from "../constants/movieConstants";
import axios from "../configAxios";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIES_REQUEST });
    const { data } = await axios.get("http://localhost:4000/");
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

export const getMovieDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
    const { data } = await axios.get(`detail/${slug}`);
    dispatch({
      type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
    console.log(`🚀 => file: movieActions.js => line 31 => data`, data);
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

export const postBookingShow = (id_mov) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIE_DETAILS_REQUEST });
    const { data } = await axios.post(`booking/now-showing`);
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

export const increase = (qty) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COUNTER_REQUEST });
    dispatch({
      type: actionTypes.GET_COUNTER_INCREASE,
      payload: qty + 1,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COUNTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const decrease = (qty) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_COUNTER_INCREASE,
      payload: qty - 1,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COUNTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
