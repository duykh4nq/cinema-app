import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import LoginScreen from "../pages/Loginpage/login.page";

function HomeRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.LOGIN} component={() => <LoginScreen />} />
    </Switch>
  );
}

export default HomeRoute;
