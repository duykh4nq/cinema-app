import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layouts/header/header.component";

function Routes(props) {
    return (
        <Router>
            <Header></Header>
    </Router>
    );
}

export default Routes;