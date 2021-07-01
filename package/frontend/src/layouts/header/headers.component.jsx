import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginScreen from "../../pages/Loginpage/login.page";
import Register from "../../pages/Registerpage/register.page";

//import css
import "./header.component.css";
import "../../assets/css/style.css";
import "../../assets/css/plugins.css";
import { useDispatch, useSelector } from "react-redux";
import { PostLogout } from "../../redux/actions/authActions";

import logo from "../../assets/images/logo1.png";

function HeadersComponent() {
  const userLoggedIn = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [openformLogin, setOpenformLogin] = useState(false);

  const ClickOpenformLogin = () => {
    setOpenformLogin(true);
  };

  const BackOpenformLogin = () => {
    setOpenformLogin(false);
  };

  const [openformRegister, setOpenformRegister] = useState(false);

  const ClickOpenformRegister = () => {
    setOpenformRegister(true);
  };

  const BackOpenformRegister = () => {
    setOpenformRegister(false);
  };
  const HandleLoginSucess = () => {
    setOpenformLogin(false);
  };
  const HandleRegisterSucess = () => {
    setOpenformRegister(false);
    history.push(history.location.pathname);
  };
  const HandleLogOut = () => {
    dispatch(PostLogout());
    history.push(history.location.pathname);
  };
  return (
    <>
      <LoginScreen
        onSubmit={HandleLoginSucess}
        openformLogin={openformLogin}
        BackOpenformLogin={BackOpenformLogin}
      />
      <Register
        onSubmit={HandleRegisterSucess}
        openformRegister={openformRegister}
        BackOpenformRegister={BackOpenformRegister}
      />
      <header>
        <div class="container">
          <nav class="navbar navbar-default navbar-custom">
            <div class="navbar-header logo">
              <div
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a href="index-2.html">
                <img class="logo" src={logo} alt="" width="119" height="58" />
              </a>
            </div>
            <div
              class="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <li class="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="dropdown first">
                  <a
                    class="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    movies<i class="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul class="dropdown-menu level1">
                    <li>
                      <a href="#">Movie grid</a>
                    </li>
                    <li>
                      <a href="movielist.html">Movie list</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/aboutUs">about us</Link>
                </li>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-right">
                {userLoggedIn === true ? (
                  <li class="loginLink" onClick={HandleLogOut}>
                    {" "}
                    <a href="#">LOG OUT</a>
                  </li>
                ) : (
                  <li class="loginLink" onClick={ClickOpenformLogin}>
                    <a href="#">LOG In</a>
                  </li>
                )}
                <li class="btn signupLink" onClick={ClickOpenformRegister}>
                  <a href="#">sign up</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* <div class="top-search">
            <select>
              <option value="united">TV show</option>
              <option value="saab">Others</option>
            </select>
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
          </div> */}
        </div>
      </header>
    </>
  );
}

export default HeadersComponent;
