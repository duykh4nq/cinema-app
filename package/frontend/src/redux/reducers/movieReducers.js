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

export const getMovieDetailReducer = (state = { movies: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_MOVIE_DETAILS_RESET:
      return {
        movies: {},
      };
    default:
      return state;
  }
};

export const postBookingShowReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKING_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_BOOKING_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
      };
    case actionTypes.GET_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_BOOKING_RESET:
      return {
        movie: {},
      };
    default:
      return state;
  }
};

export const postBookingSeatReducer = (state = { movie: {} }, action) => {
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

export const postAllHistoryBookingReducer = (
  state = { history: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_HISTORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_HISTORY_SUCCESS:
      return {
        loading: false,
        history: action.payload,
      };
    case actionTypes.GET_HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_HISTORY_RESET:
      return {
        history: {},
      };
    default:
      return state;
  }
};

export const postAllWaitHistoryBookingReducer = (
  state = { waitting_history: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_WAITTING_HISTORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_WAITTING_HISTORY_SUCCESS:
      return {
        loading: false,
        waitting_history: action.payload,
      };
    case actionTypes.GET_WAITTING_HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_WAITTING_HISTORY_RESET:
      return {
        waitting_history: {},
      };
    default:
      return state;
  }
};
export const postAllBookedHistoryBookingReducer = (
  state = { booked_history: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_BOOKED_HISTORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_BOOKED_HISTORY_SUCCESS:
      return {
        loading: false,
        booked_history: action.payload,
      };
    case actionTypes.GET_BOOKED_HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_BOOKED_HISTORY_RESET:
      return {
        booked_history: {},
      };
    default:
      return state;
  }
};
