import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/header/header.component";
import Footer from "../layouts/footer/footer.component";
import Detail from "../pages/Detailpage/detail.page";

function Routes(props) {
    return (
        <Router>
            <Header />
            <Detail />
            <Footer />
        </Router>
    );
}

export default Routes;
