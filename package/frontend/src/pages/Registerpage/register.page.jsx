import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./register.page.scss";
import { PostRegister } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";

Register.propTypes = {};

function Register({ openformRegister, BackOpenformRegister }) {
  const [user, setUser] = useState("");
  const { email, password, name, phone } = user;
  //const typingTimeoutRef = useRef("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });

    // if (typingTimeoutRef.current) {
    //   clearTimeout(typingTimeoutRef.current);
    // }
    // typingTimeoutRef.current = setTimeout(() => {

    // }, 400);
  };
  const HandleSubmit = async (e) => {
    await dispatch(PostRegister(email, password, name, phone));
    console.log("succes");
  };
  return (
    <div
      class="register"
      {...(openformRegister === true
        ? { className: "register openform" }
        : { className: "register" })}
    >
      <div class="login-wrapper" id="signup-content">
        <div class="login-content">
          <div class="register-close" onClick={BackOpenformRegister}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <a href="#" class="close">
            x
          </a>
          <h3>sign up</h3>
          <form onSubmit={HandleSubmit}>
            <div class="row">
              <label for="username">
                Username:
                <input
                  value={name}
                  type="text"
                  name="name"
                  id="username"
                  placeholder="Hugh Jackman"
                  required="required"
                  onChange={handleOnChange}
                />
              </label>
            </div>

            <div class="row">
              <label for="email">
                your email:
                <input
                  value={email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder=""
                  required="required"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div class="row">
              <label for="password">
                Password:
                <input
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  required="required"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div class="row">
              <label for="phone">
                Your phone:
                <input
                  value={phone}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=""
                  required="required"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div class="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
