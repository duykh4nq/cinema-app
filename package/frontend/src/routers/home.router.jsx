import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
// import HomeScreen from "../pages/Homepage/home.page";
import DetailScreen from "../pages/Detailpage/detail.page";

function HomeRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.HOME} component={() => <DetailScreen />} />
    </Switch>
  );
}

export default HomeRoute;
