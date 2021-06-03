import * as actionTypes from "../constants/movieConstants";

export const getMoviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        movies: action.payload,
        loading: false,
      };
    case actionTypes.GET_MOVIES_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

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
