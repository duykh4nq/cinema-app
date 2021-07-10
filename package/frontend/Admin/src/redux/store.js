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
} from "./reducers/cinemaReducers";
console.log("🚀 ~ file: store.js ~ line 13 ~ getLoginReducer", getLoginReducer);

const reducer = combineReducers({
  getMovie: getMovieReducer,
  getCinema: getCinemaReducer,
  getSchedule: getScheduleReducer,
  getAllShowtime: getAllShowtimeReducer,
  admin: getLoginReducer,
});
const middleware = [thunk];
const adminLocalStorage = sessionStorage.getItem("admin") ? JSON.parse(sessionStorage.getItem("admin")) : [];
const admin = adminLocalStorage !== [] ? adminLocalStorage : { loggedIn: false };
const INITIAL_STATE = {
  admin: admin,
};

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
