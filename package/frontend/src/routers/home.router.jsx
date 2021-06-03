import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import HomeScreen from "../pages/Homepage/home.page";

function HomeRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.HOME} component={(props) => (
                    <HomeScreen {
                        ...props
                    } />
                )}/>
    </Switch>
  );
}

export default HomeRoute;
