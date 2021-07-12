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

export const getSchedule = (id) => async (dispatch) => {
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
    sessionStorage.setItem("data", JSON.stringify(data[index]));
    dispatch({
      type: actionTypes.GET_SCHEDULE_SUCCESS,
      payload: data[index],
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

// use for add movies
export const getMovie = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_MOVIE_REQUEST,
    });
    const { data } = await axios.get("/admin/movies");
    if (data.message === "Ok") {
      dispatch(getMovie());
    }
    dispatch({
      type: actionTypes.GET_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_MOVIE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// use for showtime
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

export const getAllShowtime = (id_movie, id_room) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_SHOWTIME_REQUEST,
    });
    const { data } = await axios.post("/admin/allshowtime", {
      id_movie: id_movie,
      id_room: id_room,
    });
    dispatch({
      type: actionTypes.GET_SHOWTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SHOWTIME_FAIL,
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

    if (data.message === "Ok") {
      dispatch(getCinema());
      alert("Success👏");
    } else {
      alert("Add cineplex failed 😥");
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
      if (data.message === "OK") {
        dispatch(getCinema());
        alert("Success👏");
      } else {
        alert("Add cinema failed 👐");
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

export const getAddMovie =
  (listIdCineplexs, name_movie, time, release_date, poster) =>
  async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
      });
      const { data } = await axios.post("/admin/addmovie", {
        listIdCineplexs: listIdCineplexs,
        name_movie: name_movie,
        time: time,
        release_date: Moment(release_date).format("MM-DD-YYYY"),
        poster: poster,
      });
      if (data.message === "Ok") {
        dispatch(getCinema());
        alert("Success👏");
      } else {
        alert("Add movie failed  👐");
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
    console.log(
      `🚀 => file: adminActions.js => line 235 => id_movie`,
      id_movie
    );
    console.log(`🚀 => file: adminActions.js => line 235 => id_room`, id_room);
    var [h, m] = start_time.split(":");
    var meridian =
      ((h % 12) + 12 * (h % 12 === 0) + ":" + m, h >= 12 ? "PM" : "AM");
    if (h >= 13) {
      h = h - 12;
      h = "0" + h;
    } else if (h === "00") {
      h = 12;
    }

    if (
      (h < 9 && m > 0 && meridian == "AM") ||
      (h > 10 && m > 30 && meridian == "PM")
    ) {
      alert(
        "Start time must satisfy the condition: 09:00 AM < start_time < 10:30 PM😇"
      );
    } else
      try {
        dispatch({
          type: actionTypes.GET_CINEMA_DETAILS_REQUEST,
        });
        const { data } = await axios.post("/admin/addshedule", {
          id_room: id_room,
          id_movie: id_movie,
          date: Moment(date).format("YYYY-MM-DD"),
          start_time: h + ":" + m + " " + meridian,
          price: price,
        });
        if (data === "ok") {
          dispatch(getCinema());
          alert("Success👏");
        } else {
          alert(data.message + "👐");
        }
        dispatch({
          type: actionTypes.GET_CINEMA_DETAILS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        alert("Add showtime failed  👐");
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
      type: actionTypes.GET_STATISCAL_CINEMA_REQUEST,
    });
    const { data } = await axios.post("/admin/statiscalCineplex", {
      start: start,
      end: end,
    });
    console.log(`🚀 => file: adminActions.js => line 297 => data`, data);
    dispatch({
      type: actionTypes.GET_STATISCAL_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STATISCAL_CINEMA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postStatiscalForMovie = (start, end) => async (dispatch) => {
  console.log(`🚀 => file: adminActions.js => line 214 => end`, end);
  console.log(`🚀 => file: adminActions.js => line 214 => start`, start);
  try {
    dispatch({
      type: actionTypes.GET_STATISCAL_MOVIE_REQUEST,
    });
    const { data } = await axios.post("/admin/statiscalMovie", {
      start: start,
      end: end,
    });
    console.log(`🚀 => file: adminActions.js => line 324 => data`, data);
    dispatch({
      type: actionTypes.GET_STATISCAL_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STATISCAL_MOVIE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteRooms = (id_room, id_cineplex) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_DELETE_REQUEST,
    });
    const { data } = await axios.post("/admin/deleteroom", {
      id_room: id_room,
    });
    if ((data.message = "Delete Successfull"))
      dispatch(getSchedule(id_cineplex));
    dispatch({
      type: actionTypes.GET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteShowtime =
  (id_schedule, id_movie, id_room) => async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_DELETE_REQUEST,
      });
      const { data } = await axios.post("/admin/deleteshedule", {
        id_schedule: id_schedule,
      });
      if ((data.message = "Delete Successfully")) {
        dispatch(getAllShowtime(id_movie, id_room));
      }
      dispatch({
        type: actionTypes.GET_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteCineplexs = (id_cineplex) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_DELETE_REQUEST,
    });
    const { data } = await axios.post("/admin/deletecineplex", {
      id_cineplex: id_cineplex,
    });
    if (data !== null) {
      dispatch(getCinema());
    }
    dispatch({
      type: actionTypes.GET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteMovies = (id_movie, id_cineplex) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_DELETE_REQUEST,
    });
    const { data } = await axios.post("/admin/deletemovie", {
      id_movie: id_movie,
      id_cineplex: id_cineplex,
    });

    dispatch({
      type: actionTypes.GET_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const LoginAdmin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
    });
    const { data } = await axios.post("/signin", {
      email: email,
      password: password,
      role: 0,
    });
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        admin: data.user,
        loggedIn: true,
      },
    });
    sessionStorage.setItem("admin", JSON.stringify(getState().admin));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
