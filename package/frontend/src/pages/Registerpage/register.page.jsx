import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./register.page.scss";
import { PostLogin, PostRegister, postVerifyEmail } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

Register.propTypes = {};

function Register({ openformRegister, BackOpenformRegister, onSubmit }) {
  const history = useHistory();
  const [users, setUsers] = useState("");
  const { email, password, name, phone } = users;
  const register = useSelector((state) => state.register);
  const user = useSelector((state) => state.users);
  const [check, setCheck] = useState(false);
  const [code, setCode] = useState();
  //const typingTimeoutRef = useRef("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUsers({ ...users, [name]: value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(PostRegister(email, password, name, phone));
    // dispatch(postVerifyEmail(register.message.user.code));
    // console.log("succes");
  };
  //check succes
  useEffect(() => {
    if (register.message.user !== undefined) {
      setCheck(true);
    }
  }, [register]);
  //check code
  const HandleSubmitPostCode = async (e) => {
    e.preventDefault();
    dispatch(postVerifyEmail(email, code));
  };

  useEffect(() => {
    if (user.message === "Verified success") {
      dispatch(PostLogin(email, password));
    }
    if (user.loggedIn) {
      onSubmit();
      history.push(history.location.pathname);
      setCheck(false);
    }
  }, [user]);
  return (
    <div class="register" {...(openformRegister === true ? { className: "register openform" } : { className: "register" })}>
      {check === false ? (
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
                  <input value={email} type="text" name="email" id="email" placeholder="" required="required" onChange={handleOnChange} />
                  {register.error ? <p className="fail">existed email</p> : null}
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
                  <input value={phone} type="text" name="phone" id="phone" placeholder="" required="required" onChange={handleOnChange} />
                </label>
              </div>
              <div class="row">
                <button type="submit">sign up</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div class="login-wrapper" id="signup-content">
          <div class="login-content">
            <div class="register-close" onClick={BackOpenformRegister}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <a href="#" class="close">
              x
            </a>
            <h3>sign up</h3>
            <form onSubmit={HandleSubmitPostCode}>
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
              <div class="row">
                <button type="submit">Accept</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
