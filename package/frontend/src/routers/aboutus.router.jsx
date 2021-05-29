import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import AboutUsPage from "../pages/AboutUspage/aboutus.page";

function AboutUsRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.ABOUT} component={() => <AboutUsPage />} />
    </Switch>
  );
}

export default AboutUsRoute;
