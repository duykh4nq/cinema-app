import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

// Actions
import { postBookingShow } from "../../redux/actions/movieActions";

const DialogBookingScreen = ({ posts }) => {
    const dispatch = useDispatch();
    const DialogBooking = useSelector((state) => state.postBookingShow);
    const { loading, error, movie } = DialogBooking;
    useEffect(() => {
        dispatch(postBookingShow(posts.id));
    }, [dispatch]);

    
    return <div className="containerdialog">
        {loading ? (
            <h2>Loading...</h2>
        ) : error ? (
            <h2>{error}</h2>
        ) : (
            <div className="bookingscreen">
                <div className="date">
                    <button className="btncalendar">
                        <div className="day">
                            <p className="texture">25</p>
                        </div>
                        <div className="month">
                            <p>05 TUE</p>
                        </div>
                    </button>
                </div>
                <div className="theater-cluster">
                    <button className="btncinema-complex">
                        <div >Hà Tĩnh</div>
                    </button>
                    <button className="btncinema-complex">
                        <div >An Giang</div>
                    </button>
                </div>
                <div className="movie-genre ">
                    <button className="btncategory">
                        <div >2D Phụ đề tiếng Việt</div>
                    </button>
                </div>
                <div className="time">
                    <div className="item">
                        <div className="theater-name"><h4>CGV Vincom Hà Tĩnh</h4></div>
                        <div className="list-time">
                            <button className="showtime"><p>14:00PM</p></button>
                            <button className="showtime"><p >14:00PM</p></button>
                        </div>


                    </div>
                </div>
            </div>)}
    </div>;
}

export default DialogBookingScreen;
