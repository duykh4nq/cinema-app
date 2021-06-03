import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import DetailScreen from "../pages/Detailpage/detail.page";

function DetailRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.DETAIL} component={(props) => (
                    <DetailScreen {
                        ...props
                    } />
                )} />
    </Switch>
  );
}

export default DetailRoute;
