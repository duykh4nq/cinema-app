import { BrowserRouter as Router } from "react-router-dom";

//component
import HomeRoute from "./home.router";
import LoginScreen from "../pages/Loginpage/login.page";
function Routers() {
  return (
    <Router>
      <LoginScreen />
      <HomeRoute />
    </Router>
  );
}

export default Routers;
