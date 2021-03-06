import * as actionTypes from "../constants/adminConstants";

export const getCinemaReducer = (state = { cinema: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CINEMA_REQUEST:
      return {
        loading: true,
        cinema: [],
      };
    case actionTypes.GET_CINEMA_SUCCESS:
      return {
        cinema: action.payload,
        loading: false,
      };
    case actionTypes.GET_CINEMA_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getScheduleReducer = (state = { schedule: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_SCHEDULE_REQUEST:
      return {
        loading: true,
        schedule: [],
      };
    case actionTypes.GET_SCHEDULE_SUCCESS:
      return {
        schedule: action.payload,
        loading: false,
      };
    case actionTypes.GET_SCHEDULE_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getMovieReducer = (state = { movie: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_REQUEST:
      return {
        loading: true,
        movie: [],
      };
    case actionTypes.GET_MOVIE_SUCCESS:
      return {
        movie: action.payload,
        loading: false,
      };
    case actionTypes.GET_MOVIE_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getAllShowtimeReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_SHOWTIME_REQUEST:
      return {
        loading: true,
        data: [],
      };
    case actionTypes.GET_SHOWTIME_SUCCESS:
      return {
        data: action.payload,
        loading: false,
      };
    case actionTypes.GET_SHOWTIME_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const postStatiscalForMovieReducer = (
  state = { statiscal_movie: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_STATISCAL_MOVIE_REQUEST:
      return {
        loading: true,
        statiscal_movie: [],
      };
    case actionTypes.GET_STATISCAL_MOVIE_SUCCESS:
      return {
        statiscal_movie: action.payload,
        loading: false,
      };
    case actionTypes.GET_STATISCAL_MOVIE_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const postStatiscalForCineplexReducer = (
  state = { statiscal_cineplex: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_STATISCAL_CINEMA_REQUEST:
      return {
        loading: true,
        statiscal_cineplex: [],
      };
    case actionTypes.GET_STATISCAL_CINEMA_SUCCESS:
      return {
        statiscal_cineplex: action.payload,
        loading: false,
      };
    case actionTypes.GET_STATISCAL_CINEMA_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getLoginReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS: {
      return action.payload;
    }
    case actionTypes.LOGIN_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
