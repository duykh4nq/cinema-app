import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATH } from "../constants/PATH";
import CheckoutPage from "../pages/Checkoutpage/checkout.page";

function CheckoutRoute(props) {
  return (
    <Switch>
      <Route exact path={PATH.CHECKOUT} component={() => <CheckoutPage />} />
    </Switch>
  );
}

export default CheckoutRoute;
