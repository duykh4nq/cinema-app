import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./profile.page.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
ProfilePage.propTypes = {};

function ProfilePage(props) {
  const { user, loggedIn } = useSelector((state) => state.users);
  const [users, setUsers] = useState("");
  const { email, name, phone } = users;
  useEffect(() => {
    if (user != null || user != undefined) {
      setUsers(user);
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
    setUsers({ ...users, [name]: value });
  };
  //
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
                    <img src="images/uploads/user-img.png" alt="" />
                  </a>
                  <a href="#" className="redbtn">
                    Change avatar
                  </a>
                </div>
                <div className="user-fav">
                  <p>Account Details</p>
                  <ul>
                    <li className="active">
                      <a href="userprofile.html">Profile</a>
                    </li>
                    <li>
                      <a href="userfavoritelist.html">History movies</a>
                    </li>
                  </ul>
                </div>
                <div className="user-fav">
                  <p>Others</p>
                  <ul>
                    <li>
                      <button className="btn-function" onClick={ChangPassword}>
                        Change password
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="form-style-1 user-pro" action="#">
                <form action="#" className="user">
                  <h4>Profile details</h4>
                  <div className="row">
                    <div className="col-md-6 form-it">
                      <label>Username</label>
                      <input name="name" value={name ? name : ""} type="text" placeholder="edwardkennedy" onChange={handleOnChange} />
                    </div>
                    <div className="col-md-6 form-it">
                      <label>Email Address</label>
                      <input
                        name="email"
                        value={email ? email : ""}
                        type="text"
                        placeholder="edward@kennedy.com"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-it">
                      <label>Phone</label>
                      <input name="phone" value={phone ? phone : ""} type="text" placeholder="Kennedy" onChange={handleOnChange} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-2">
                      <input className="submit" type="submit" value="save" />
                    </div>
                  </div>
                </form>
                {changPassword === true ? (
                  <form action="#" className="password">
                    <h4>Change password</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Old Password</label>
                        <input type="text" placeholder="**********" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>New Password</label>
                        <input type="text" placeholder="***************" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Confirm New Password</label>
                        <input type="text" placeholder="*************** " />
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
