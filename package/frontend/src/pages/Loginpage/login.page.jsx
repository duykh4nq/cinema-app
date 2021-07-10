import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  postForgotPassword,
  PostLogin,
  postResetPassword,
  postVerifyForgotPassword,
} from "../../redux/actions/authActions";
import "./login.style.scss";

LoginScreen.propTypes = {};

function LoginScreen({ openformLogin, BackOpenformLogin, onSubmit }) {
  const typingTimeoutRef = useRef("");
  const user = useSelector((state) => state.users);
  const error = user.error;
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [forgotPassword, setForgotPassword] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [code, setCode] = useState("");
  const [getCode, setGetCode] = useState(false);
  const [checkConfirm, setCheckConfirm] = useState(false);

  if (user.loggedIn === true) {
    onSubmit();
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostLogin(email, password));
  };
  //forgotPassword
  const HandleForgotPassword = (e) => {
    setForgotPassword(true);
  };
  //senmail
  const handleClickSendMail = (e) => {
    e.preventDefault();
    dispatch(postForgotPassword(email));
    if (user.user) {
      if (user.user.message === "Success Forgot") {
        setVerifyPassword(true);
      }
    }
  };

  useEffect(() => {
    if (user.user) {
      if (user.user.message === "Success Verified Forgot") {
        setVerifyPassword(false);
        setGetCode(true);
      }
      if (user.user.message === "Change password successfully") {
        setTimeout(() => {
          onSubmit();
          setForgotPassword(false);
        }, 2000);
      }
    }
  }, [user]);
  //submit forgot password
  const HandleSubmitForgot = (e) => {
    e.preventDefault();
    if (verifyPassword) {
      dispatch(postVerifyForgotPassword(email, code));
    }
    if (getCode) {
      if (password === passwordConfirm) {
        dispatch(postResetPassword(email, password));
        setCheckConfirm(false);
      } else {
        setCheckConfirm(true);
      }
    }
  };
  return (
    <div
      class="loginpage"
      {...(openformLogin === true ? { className: "loginpage openform" } : { className: "loginpage" })}
    >
      <div class="login-wrapper" id="login-content">
        <div class="login-content">
          {forgotPassword === false ? (
            <>
              {" "}
              <div class="login-close" onClick={BackOpenformLogin}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <a href="#" class="close">
                x
              </a>
              <h3>Login</h3>
              <form onSubmit={HandleSubmit}>
                <div class="row">
                  <label for="username">
                    Email
                    <input
                      type="text"
                      name="email"
                      value={email}
                      id="username"
                      placeholder="Jackman@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error === "Email does not exist" ? <span className="error">{error}</span> : null}
                  </label>
                </div>

                <div class="row">
                  <label for="password">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={password}
                      id="password"
                      placeholder="******"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error === "Password wrong!" ? <span className="error">{error}</span> : null}
                  </label>
                </div>

                <div class="row">
                  <div class="remember">
                    <button onClick={HandleForgotPassword} className="btn-auth forgot">
                      Forget password ?
                    </button>
                  </div>
                </div>

                <div class="row">
                  <button type="submit">Login</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div class="login-close" onClick={BackOpenformLogin}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
              <h3>Forgot password</h3>
              <form onSubmit={HandleSubmitForgot}>
                {getCode === true ? (
                  <>
                    <div class="row">
                      <label for="code">
                        Nhập password
                        <input
                          type="password"
                          value={password}
                          name="password"
                          id="password"
                          placeholder=""
                          required="required"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                    </div>
                    <div class="row">
                      <label for="code">
                        Nhập password
                        <input
                          type="password"
                          value={passwordConfirm}
                          name="passwordConfirm"
                          id="passwordConfirm"
                          placeholder=""
                          required="required"
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {checkConfirm ? <p className="fail">password not match</p> : null}
                        {user.user.message === "Change password successfully" ? (
                          <p className="fail">Change password successfully</p>
                        ) : null}
                      </label>
                    </div>
                  </>
                ) : (
                  <div class="row">
                    <label for="username">
                      Email
                      <div className=" group-input">
                        <div className="col-9">
                          <input
                            type="text"
                            name="email"
                            value={email}
                            id="username"
                            placeholder="Jackman@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-3">
                          <button onClick={handleClickSendMail} className="sendMail">
                            Send mail
                          </button>
                        </div>
                      </div>
                      {error === "Request failed with status code 403" ? (
                        <span className="error">Not exist email</span>
                      ) : null}
                    </label>
                  </div>
                )}
                {verifyPassword === true ? (
                  <div class="row">
                    <label for="code">
                      Nhập code
                      <input
                        type="text"
                        value={code}
                        name="code"
                        id="code"
                        placeholder=""
                        required="required"
                        onChange={(e) => setCode(e.target.value)}
                      />
                      {user.error ? <p className="fail">{user.error}</p> : null}
                    </label>
                  </div>
                ) : null}
                <div class="row">
                  <button type="submit">Confirm</button>
                </div>
              </form>{" "}
            </>
          )}

          <div class="row">
            <p>Or via social</p>
            <div class="social-btn-2">
              <a class="fb" href="#">
                <i class="ion-social-facebook"></i>Facebook
              </a>
              <a class="tw" href="#">
                <i class="ion-social-twitter"></i>twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
