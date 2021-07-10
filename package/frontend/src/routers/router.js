import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../layouts/header/headers.component";
import Footer from "../layouts/footer/footer.component";
import DetailRoute from "./detail.router";
import BookingRoute from "./booking.router";
import HomeRoute from "./home.router";
import CheckoutRoute from "./checkout.router";
import AboutUsRoute from "./aboutus.router";
import Profile from "./profile.router";
import MovieRoute from "./movie.router";
import SearchRoute from "./search.router";
import HistoryRoute from "./history.router";

function Routes() {
  return (
    <Router>
      <Header />
      <HomeRoute />
      <Profile />
      <DetailRoute />
      <AboutUsRoute />
      <BookingRoute />
      <CheckoutRoute />
      <MovieRoute />
      <SearchRoute />
      <HistoryRoute />
      <Footer />
    </Router>
  );
}

export default Routes;
