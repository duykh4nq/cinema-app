import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/header/header.component";
import Footer from "../layouts/footer/footer.component";
import DetailRoute from "./detail.router";
import BookingRoute from "./booking.router";
import HomeRoute from "./home.router";
import CheckoutRoute from "./checkout.router";
import AboutUsRoute from "./aboutus.router";

function Routes() {
  return (
    <Router>
      <Header />
      <HomeRoute />
      <DetailRoute />
      <AboutUsRoute />
      <BookingRoute />
      <CheckoutRoute />
      <Footer />
    </Router>
  );
}

export default Routes;
