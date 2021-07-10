import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import SearchComponent from "../pages/Search/Search.page";

function SearchRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.SEARCH} component={(props) => <SearchComponent {...props} />} />
    </Switch>
  );
}

export default SearchRoute;
