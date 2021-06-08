import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PostLogin } from "../../redux/actions/authActions";
import "./login.style.scss";

LoginScreen.propTypes = {};

function LoginScreen({ openformLogin, BackOpenformLogin, onSubmit }) {
  const typingTimeoutRef = useRef("");
  const user = useSelector((state) => state.users);

  const error = user.error;
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  if (user.loggedIn === true) {
    onSubmit();
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostLogin(email, password));
  };
  return (
    <div
      class="loginpage"
      {...(openformLogin === true
        ? { className: "loginpage openform" }
        : { className: "loginpage" })}
    >
      <div class="login-wrapper" id="login-content">
        <div class="login-content">
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
                {error === "Email does not exist" ? (
                  <span className="error">{error}</span>
                ) : null}
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
                  onChange
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error === "Password wrong!" ? (
                  <span className="error">{error}</span>
                ) : null}
              </label>
            </div>

            <div class="row">
              <div class="remember">
                <div>
                  <input type="checkbox" name="remember" value="Remember me" />
                  <span>Remember me</span>
                </div>
                <a href="#">Forget password ?</a>
              </div>
            </div>
            <div class="row">
              <button type="submit">Login</button>
            </div>
          </form>
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
