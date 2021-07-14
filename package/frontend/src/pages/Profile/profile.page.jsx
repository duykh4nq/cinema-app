import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./profile.page.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postChangePassword, postChangeProfile } from "../../redux/actions/authActions";
ProfilePage.propTypes = {};

function ProfilePage(props) {
  const { user, loggedIn, message } = useSelector((state) => state.users);
  const us = useSelector((state) => state.users);
  console.log("🚀 ~ file: profile.page.jsx ~ line 12 ~ ProfilePage ~ us", us);
  const [users, setUsers] = useState("");
  const { email, name, phone } = users;
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirm, setPasswordConfirm] = useState();
  const [checkNotMatch, setCheckNotMatch] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user != null || user != undefined) {
      setUsers(user);
    }
    if (message === "Change password successfully") {
      setChangPassword(false);
    }
  }, [user]);

  //onchangPassword
  const [changPassword, setChangPassword] = useState(false);
  const ChangPassword = () => {
    changPassword === true ? setChangPassword(false) : setChangPassword(true);
  };
  //onchang value form
  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUsers({ ...users, [name]: value });
  };
  //submit changeProfile
  const handleChangProfile = (e) => {
    e.preventDefault();
    dispatch(postChangeProfile(email, name, phone));
    //history.push("/");
  };
  // changPassword
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordConfirm) {
      setCheckNotMatch(true);
    } else {
      dispatch(postChangePassword(email, oldPassword, newPassword));
      //setChangPassword(false);
    }
  };

  return (
    <>
      <div className="hero user-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1>{name}</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <span className="ion-ios-arrow-right"></span>Profile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="user-information">
                <div className="user-img">
                  <a href="#">
                    <img src="images/avatar.png" alt="" />
                  </a>
                </div>
                <div className="user-fav">
                  <p>Account Details</p>
                  <ul>
                    <li className="active">
                      <a href="userprofile.html">Profile</a>
                    </li>
                    <li>
                      <Link to="/history">History Booking</Link>
                    </li>
                  </ul>
                </div>
                <div className="user-fav">
                  <p>Others</p>
                  <ul>
                    <li>
                      <button
                        style={{ color: changPassword ? "#dcf836" : "#f4f4f4" }}
                        className="btn-function"
                        onClick={ChangPassword}
                      >
                        Change password
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="form-style-1 user-pro" action="#">
                <form action="#" className="user" onSubmit={handleChangProfile}>
                  <h4>Profile details</h4>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Username</label>
                      <input
                        name="name"
                        value={name ? name : ""}
                        type="text"
                        placeholder="edwardkennedy"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-md-6 form-it">
                      <label>Email Address</label>
                      <input
                        name="email"
                        value={email ? email : ""}
                        type="email"
                        placeholder="edward@kennedy.com"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-it">
                      <label>Phone</label>
                      <input
                        name="phone"
                        value={phone ? phone : ""}
                        type="text"
                        placeholder="Kennedy"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-2">
                      <input className="submit" type="submit" value="save" />
                    </div>
                  </div>
                </form>
                {changPassword === true ? (
                  <form action="#" className="password" onSubmit={handleChangePassword}>
                    <h4>Change password</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Old Password</label>
                        <input
                          type="password"
                          name="oldPassword"
                          value={oldPassword ? oldPassword : ""}
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={newPassword ? newPassword : ""}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Confirm New Password</label>
                        <input
                          type="password"
                          name="passwordConfirm"
                          value={newPasswordConfirm ? newPasswordConfirm : ""}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        {checkNotMatch && <p className="fail">Password not match</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <input className="submit" type="submit" value="change" />
                      </div>
                    </div>
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
