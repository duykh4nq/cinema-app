import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import HistoryPage from "../pages/Historypage/history.page";

function HistoryRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.HISTORY} component={() => <HistoryPage />} />
    </Switch>
  );
}

export default HistoryRoute;
