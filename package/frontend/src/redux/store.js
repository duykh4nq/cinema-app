import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
// import { cartReducer } from "./reducers/cartReducers";
import { getMovieDetailReducer, postBookingShowReducer, getMoviesReducer, postBookingSeatReducer } from "./reducers/movieReducers";
import { loginReducer, registerReducer } from "./reducers/authReducers";

const reducer = combineReducers({
  getMovieDetails: getMovieDetailReducer,
  postBookingShow: postBookingShowReducer,
  postBookingSeat: postBookingSeatReducer,
  users: loginReducer,
  register: registerReducer,
  getMovies: getMoviesReducer,
});
const middleware = [thunk];
const userLocalStorage = sessionStorage.getItem("users") ? JSON.parse(sessionStorage.getItem("users")) : [];
const users = userLocalStorage !== [] ? userLocalStorage : { loggedIn: false };
const INITIAL_STATE = {
  users: users,
};
const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
