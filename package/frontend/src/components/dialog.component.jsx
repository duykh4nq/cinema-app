import React from "react";
import PropTypes from "prop-types";
import "./style.css";
DialogBookingScreen.propTypes = {};

function DialogBookingScreen(props) {
    return <div className="containerdialog">
        <div className="bookingscreen">
            <div className="date">
                <button className="btncalendar" >
                    <div className="day">
                        <p>25</p>
                       
                    </div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>26</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>27</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>28</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>29</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>30</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
                <button className="btncalendar">
                    <div className="day"><p>31</p></div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
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
