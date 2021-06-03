import * as actionTypes from "../constants/movieConstants";

export const getMovieDetailReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_RESET:
      return {
        movie: {},
      };
    default:
      return state;
  }
};

export const postBookingShowReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_RESET:
      return {
        movie: {},
      };
    default:
      return state;
  }
};
