import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../constants/PATH";
import ProfilePage from "../pages/Profile/profile.page";
function Profile(props) {
  return (
    <Switch>
      <Route exact path={PATH.PROFILE} component={() => <ProfilePage />} />
    </Switch>
  );
}

export default Profile;
