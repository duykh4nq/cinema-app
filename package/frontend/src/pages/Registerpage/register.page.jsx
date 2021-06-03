import React from "react";
import PropTypes from "prop-types";
import "./register.page.scss";

Register.propTypes = {};

function Register({ openformRegister, BackOpenformRegister }) {
  console.log(
    "🚀 -------------------------------------------------------------------------"
  );
  console.log(
    "🚀 ~ file: register.page.jsx ~ line 8 ~ openformRegister",
    openformRegister
  );
  console.log(
    "🚀 -------------------------------------------------------------------------"
  );

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
          <form method="post" action="#">
            <div class="row">
              <label for="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div class="row">
              <label for="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div class="row">
              <label for="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div class="row">
              <label for="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
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
