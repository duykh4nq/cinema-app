import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import {
  getCinemaReducer,
  getScheduleReducer,
  getMovieReducer,
} from "./reducers/cinemaReducers";

const reducer = combineReducers({
  getMovie: getMovieReducer,
  getCinema: getCinemaReducer,
  getSchedule: getScheduleReducer,
  // getCineplex:getCineplexReducers
});
const middleware = [thunk];

const INITIAL_STATE = {};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
