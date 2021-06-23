import * as actionTypes from "../constants/authConstants";
import axios from "../configAxios";
// import { getSession, setSession } from "../../constants/function";

export const PostLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/signin", {
      email: email,
      password: password,
      role: 1,
    });
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
        loggedIn: true,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PostLogout = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT_REQUEST });
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: {
      user: {},
      loggedIn: false,
    },
  });
};

export const PostRegister = (email, password, name, phone) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    const { data } = await axios.post("/signup", {
      url: "http://localhost:4000",
      email: email,
      password: password,
      name: name,
      phone: phone,
    });

    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: {
        user: data,
        loggedIn: false,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postVerifyEmail = (code) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/verify", {
      code: code,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getImportCode = (code) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/import-code", {
      code: code,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
        valueIP: true,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getForgotPassword = (email) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const { data } = await axios.post("/forgot-password", {
      email: email,
    });

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
      },
    });
    sessionStorage.setItem("users", JSON.stringify(getState().users));
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getChangePassword = (password, comfirmPassword) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post("/changepassword", {
      password: password,
      comfirmPassword: comfirmPassword,
      email: getState().users.user.email,
    });

    console.log(
      `🚀 => file: authActions.js => line 161 => getState().users`,
      getState().users
    );

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        user: data,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
