import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import {
  getCinemaReducer,
  getScheduleReducer,
  getMovieReducer,
  getAllShowtimeReducer,
  getLoginReducer,
  postStatiscalForMovieReducer,
  postStatiscalForCineplexReducer,
} from "./reducers/cinemaReducers";

const reducer = combineReducers({
  getMovie: getMovieReducer,
  getCinema: getCinemaReducer,
  getSchedule: getScheduleReducer,
  getAllShowtime: getAllShowtimeReducer,
  admin: getLoginReducer,
  postStatiscalForMovie: postStatiscalForMovieReducer,
  postStatiscalForCineplex: postStatiscalForCineplexReducer,
});
const middleware = [thunk];
const adminLocalStorage = sessionStorage.getItem("admin")
  ? JSON.parse(sessionStorage.getItem("admin"))
  : [];
const admin =
  adminLocalStorage !== [] ? adminLocalStorage : { loggedIn: false };
const INITIAL_STATE = {
  admin: admin,
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
