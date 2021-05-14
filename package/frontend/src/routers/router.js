import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/Header/Header.js";
import Footer from "../layouts/Footer/Footer.js";
//component
import HomeRoute from "./home.router";
import LoginScreen from "../pages/Loginpage/login.page";

function Routers() {
  return (
    <Router >
      <Header />
      <LoginScreen />
      <HomeRoute />
      <Footer />
    </Router>
  );
}

export default Routers;
