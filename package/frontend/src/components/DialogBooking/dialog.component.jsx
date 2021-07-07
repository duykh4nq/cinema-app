import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "./dialog.style.css";
import "../../assets/css/main.css";
import "../../pages/Loginpage/login.style.scss"


const DialogBookingScreen = ({ openformLogin, BackOpenformLogin, movie, movies }) => {

    const [valueDay, setValueDay] = React.useState(null)
    const [valueCineplex, setValueCineplex] = React.useState(movie[0])
    const [category, setCategory] = React.useState(valueCineplex[0].details[0].detailsCat)
    const [schedule, setSchedule] = React.useState(category[0].schedule)
    const [time, setTime] = React.useState(null)

    const [color, setColor] = React.useState(new Array(7).fill(null))

    const setIndexDay = (index, value) => {
        for (let i = 0; i < movie.length; i++) {
            if (movie[i][0].date == value) {
                const newColor = new Array(7).fill(null);
                newColor[index] = "changeColorBackground"
                setColor(newColor)
                setValueCineplex(movie[i])
            }
        }
    }

    const setIndexCineplex = (index, value) => {
        for (let i = 0; i < valueCineplex.length; i++) {
            if (valueCineplex[i].details[0].cineplex == value) {
                setValueDay(value)
                const newColor = new Array(7).fill(null);
                newColor[index] = "changeColorBackground"
                setColor(newColor)
                setCategory(valueCineplex[i].details[0].detailsCat)
            }
        }
    };

    const setIndexCategory = (index, value) => {
        for (let i = 0; i < category.length; i++) {
            if (category[i].cate_room == value) {
                const newColor = new Array(7).fill(null);
                newColor[index] = "changeColorBackground"
                setColor(newColor)
                setSchedule(category[i].schedule)
            }
        }
    }

    const handleProceed = () => {
        sessionStorage.setItem("day", JSON.stringify(valueDay));
        sessionStorage.setItem("valueCineplex", JSON.stringify(valueCineplex));
        sessionStorage.setItem("category", JSON.stringify(category));
        sessionStorage.setItem("time", JSON.stringify(time));
    }

    return <div className="loginpage"
        {...(openformLogin === true
            ? { className: "loginpage openform" }
            : { className: "loginpage" })}>
        <div className="bookingscreen">
            <button className="custom-button close-dialog" onClick={BackOpenformLogin}>
                X
            </button>
            <div className="date">
                {openformLogin === true ? (movie.map((item, index) => (
                    <button className={`btncalendar ${color[index]}`} onClick={() => setIndexDay(index, item[0].date)}>
                        <div className="day">
                            <p className="texture">
                                {Moment(item[0].date).date()}</p></div>
                        <div className="month">
                            <p>{Moment(item[0].date).month() + " - " + Moment(item[0].date).year()}</p>
                        </div>
                    </button>
                ))) : <p></p>}
            </div>
            {(valueCineplex !== null) ? (<>
                <div className="theater-cluster">
                    {((valueCineplex[0].details.length > 0 ? (
                        <button className={`btncinema-complex ${color}`} onClick={() => setIndexCineplex(valueCineplex[0].details[0].cineplex)}>
                            <div>{valueCineplex[0].details[0].cineplex}</div>
                        </button>) : <p></p>))}
                </div>
                <div className="movie-genre ">
                    {(valueCineplex[0].details.length > 0 ? (
                        <button className={`btncategory ${color}`} onClick={() => setIndexCategory(valueCineplex[0].details[0].detailsCat[0].cate_room)}>
                            <div >{valueCineplex[0].details[0].detailsCat[0].cate_room}</div><div> phụ đề Việt</div>
                        </button>
                    ) : <p></p>
                    )}
                </div>
                <div className="time">
                    <div className="item">
                        <div className="list-time">
                            {(schedule?.map((item, index) => (
                                <button className={`showtime ${color}`} onClick={() => setTime(index, item.time_start)}>
                                    <p>{item.time_start}</p>
                                </button>
                            )))}
                        </div>
                    </div>
                </div></>) :
                <></>}
            <Link to={`booking/${movies.slug}`} className="proceed-dialog custom-button" onClick={() => handleProceed()}>
                Proceed
            </Link>
        </div>
    </div>;
}

export default DialogBookingScreen;
