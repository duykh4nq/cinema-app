import React from "react";
import PropTypes from "prop-types";
//import "./style.css";
DialogBookingScreen.propTypes = {};

function DialogBookingScreen(props) {
    return <div className="containerdialog">
        <div className="bookingscreen">
            <div className="date">
                <button className="btncalendar">
                    <div className="day"><h2>25</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>26</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>27</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>28</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>29</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>30</h2></div>
                    <h3>05 TUE</h3>
                </button>
                <button className="btncalendar">
                    <div className="day"><h2>31</h2></div>
                    <h3>05 TUE</h3>
                </button>
            </div>
            <div className="theater-cluster">
                <button className="btncinema-complex">
                    <div>Hà Tĩnh</div>
                </button>
                <button className="btncinema-complex">
                    <div>An Giang</div>
                </button>
            </div>
            <div className="movie-genre ">
                <button className="btncategory">
                    <div>2D Phụ đề tiếng Việt</div>
                </button>
            </div>
            <div className="time ">
                <div className="theater-name">CGV Vincom Hà Tĩnh</div>
                <button className="showtime"><div>14:00PM</div></button>
            </div>
        </div>
    </div>;
}

export default DialogBookingScreen;
