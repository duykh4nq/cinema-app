import * as actionTypes from "../constants/adminConstants";
import axios from "../configAxios";
import Moment from "moment";

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
    if (data === "ok") {
      dispatch(getCinema());
    }
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

export const getAddRoom =
  (id_cineplex, name_room, horizontal, vertical, id_categoryRoom) =>
  async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
      });
      const { data } = await axios.post("/admin/addroom", {
        id_cineplex: id_cineplex,
        name_room: name_room,
        horizontal: horizontal,
        vertical: vertical,
        id_categoryRoom: id_categoryRoom,
      });
      if (data === "ok") {
        dispatch(getCinema());
      }
      console.log(`🚀 => file: adminActions.js => line 142 => data`, data);
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

export const getAddMovie =
  (id_cineplex, name_movie, time, release_date, poster) => async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
      });
      const { data } = await axios.post("/admin/addmovie", {
        id_cineplex: id_cineplex,
        name_movie: name_movie,
        time: time,
        release_date: release_date,
        poster: poster,
      });
      if (data === "ok") {
        dispatch(getCinema());
        alert("Succes");
      }
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

export const getAddShowtime =
  (id_room, id_movie, date, start_time, price) => async (dispatch) => {
    var [h, m] = start_time.split(":");
    var meridian =
      ((h % 12) + 12 * (h % 12 === 0) + ":" + m, h >= 12 ? "PM" : "AM");
    if (h > 12) {
      h = h - 12;
    }

    try {
      dispatch({
        type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
      });
      const { data } = await axios.post("/admin/addshedule", {
        id_room: id_room,
        id_movie: id_movie,
        date: Moment(date).format("MM-DD-YYYY"),
        start_time: h + ":" + m + " " + meridian,
        price: price,
      });
      console.log(`🚀 => file: adminActions.js => line 198 => data`, data);
      if (data === "ok") {
        dispatch(getCinema());
        alert("Succes");
      }
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

export const postStatiscalForCineplex = (start, end) => async (dispatch) => {
  console.log(`🚀 => file: adminActions.js => line 214 => end`, end);
  console.log(`🚀 => file: adminActions.js => line 214 => start`, start);
  try {
    dispatch({
      type: actionTypes.GET_CINEMA_REQUEST,
    });
    const { data } = await axios.post("/admin/statiscalCineplex", {
      start: start,
      end: end,
    });
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
