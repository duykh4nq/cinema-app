import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/header/headers.component";
import Footer from "../layouts/footer/footer.component";
import DetailRoute from "./detail.router";
import BookingRoute from "./booking.router";
import HomeRoute from "./home.router";
import CheckoutRoute from "./checkout.router";
import AboutUsRoute from "./aboutus.router";
import Homepage from "../pages/Homepage/home.page";

function Routes() {
  return (
    <Router>
      <Header />
      <Homepage/>
      {/* <HomeRoute /> */}
      {/* <DetailRoute />
      <AboutUsRoute />
      <BookingRoute />
      <CheckoutRoute /> */}
      <Footer />
    </Router>
  );
}

export default Routes;
