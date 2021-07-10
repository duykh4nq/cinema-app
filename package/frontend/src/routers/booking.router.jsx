import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import BookingPage from "../pages/Bookingpage/booking.page";

function BookingRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.BOOKING} component={(props) => <BookingPage {
                        ...props
                    } />} />
    </Switch>
  );
}

export default BookingRoute;
