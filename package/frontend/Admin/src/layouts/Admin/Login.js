import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginAdmin } from "redux/actions/adminActions";
import "../../assets/css/login.scss";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAdmin(email, password));
  };
  if (admin.loggedIn) {
    history.push("/admin");
  }
  return (
    <div class="loginpage">
      <div class="login-wrapper" id="login-content">
        <div class="login-content">
          <h3>Login admin</h3>
          <form onSubmit={handleLogin}>
            <div class="row">
              <label for="username">
                Email
                <input
                  type="text"
                  name="email"
                  value={email}
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div class="row">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
