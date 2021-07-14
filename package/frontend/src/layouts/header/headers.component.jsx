import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginScreen from "../../pages/Loginpage/login.page";
import Register from "../../pages/Registerpage/register.page";
import "../../constants/function";
//import css
import "./header.component.css";
import "../../assets/css/style.css";
import "../../assets/css/plugins.css";
import { useDispatch, useSelector } from "react-redux";
import { PostLogout } from "../../redux/actions/authActions";
import logo from "../../assets/images/logo1.png";

function HeadersComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const AccountHandle = () => {
    dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
  };
  const { loggedIn, user } = useSelector((state) => state.users);
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
    setDropdownOpen(false);
  };
  return (
    <>
      <LoginScreen onSubmit={HandleLoginSucess} openformLogin={openformLogin} BackOpenformLogin={BackOpenformLogin} />
      <Register
        onSubmit={HandleRegisterSucess}
        openformRegister={openformRegister}
        BackOpenformRegister={BackOpenformRegister}
      />
      <header>
        <div class="container">
          <nav class="navbar navbar-default navbar-custom My-custom">
            <div class="navbar-header logo">
              <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
            <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav flex-child-menu menu-left">
                <li class="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/search">Cineplexs</Link>
                </li>
                <li>
                  <Link to="/aboutUs">about us</Link>
                </li>
              </ul>
              <ul class="nav navbar-nav flex-child-menu menu-right">
                {loggedIn === true ? (
                   <div className="account">
                    <li onClick={AccountHandle}>
                      Hi, {user.name}'s <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </li>
                    <div className={dropdownOpen ? "dropdown-account active-account" : "dropdown-account"}>
                      <li>
                        <Link to="/profile" className="my-account">My account</Link>
                      </li>
                      <li onClick={HandleLogOut}>
                        <button className="logout">Log out</button>
                      </li>
                    </div>
                  </div> 
                ) : (
                  <>
                    <li class="loginLink" onClick={ClickOpenformLogin}>
                      <button className="btn-signin">Login</button>
                    </li>
                    <li class="btn signupLink" onClick={ClickOpenformRegister}>
                      <button className="btn-auth">Register</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeadersComponent;
