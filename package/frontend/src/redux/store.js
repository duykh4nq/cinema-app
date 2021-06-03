import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getMovieDetailReducer,
  postBookingShowReducer,
} from "./reducers/movieReducers";
import { loginReducer, registerReducer } from "./reducers/authReducers";
import { oderReducers } from "./reducers/orderReduces";

const reducer = combineReducers({
  cart: cartReducer,
  order: oderReducers,
  getMovieDetails: getMovieDetailReducer,
  postBookingShow: postBookingShowReducer,
  users: loginReducer,
  register: registerReducer,
});
const middleware = [thunk];

const INITIAL_STATE = {};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
