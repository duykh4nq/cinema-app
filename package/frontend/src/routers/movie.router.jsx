import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import MovieList from "../pages/Moviepage/movie.list";

function MovieRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.MOVIE} component={(props) => (
                    <MovieList {
                        ...props
                    } />
                )}/>
    </Switch>
  );
}

export default MovieRoute;
