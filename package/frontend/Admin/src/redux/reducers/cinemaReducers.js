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

// export const getStatiscalReducer = (state = { statiscal: [] }, action) => {

//   switch (action.type) {
//     case actionTypes.GET_SCHEDULE_REQUEST:
//       return {
//         loading: true,
//         statiscal: [],
//       };
//     case actionTypes.GET_SCHEDULE_SUCCESS:

//       return {
//         statiscal: action.payload,
//         loading: false,
//       };
//     case actionTypes.GET_SCHEDULE_FAIL:
//       return {
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };
