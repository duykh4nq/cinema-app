import * as actionTypes from "../constants/adminConstants";
import axios from "../configAxios";

export const getCinema = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_CINEMA_REQUEST,
    });
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

export const getRooms = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_SCHEDULE_REQUEST,
    });
    const { data } = await axios.get("/admin/schedule");
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        index = i;
      }
    }

    dispatch({
      type: actionTypes.GET_SCHEDULE_SUCCESS,
      payload: data[index].rooms,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SCHEDULE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovies = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_SCHEDULE_REQUEST,
    });
    const { data } = await axios.get("/admin/schedule");
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        index = i;
      }
    }

    dispatch({
      type: actionTypes.GET_SCHEDULE_SUCCESS,
      payload: data[index].movies,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SCHEDULE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAddCineplex = (name, address) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
    });
    const { data } = await axios.post("/admin/addcineplex", {
      name: name,
      address: address,
    });

    dispatch({
      type: actionTypes.GET_CINEMA_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CINEMA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};