import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import "./dialog.style.css";
import "../../assets/css/main.css";


const DialogBookingScreen = ({ openformLogin, BackOpenformLogin, movie, movies }) => {
    const [valueDay, setValueDay] = React.useState(null)
    const [valueCineplex, setValueCineplex] = React.useState(null)
    console.log(`🚀 => file: dialog.component.jsx => line 11 => valueCineplex`, valueCineplex)
    const [category, setCategory] = React.useState(null)
    console.log(`🚀 => file: dialog.component.jsx => line 12 => category`, category)
    const [schedule, setSchedule] = React.useState(null)
    const [time, setTime] = React.useState(null)
    console.log(`🚀 => file: dialog.component.jsx => line 14 => time`, time)

    const [colorDay, setColorDay] = React.useState(new Array(7).fill(null))
    const [colorCineplex, setColorCineplex] = React.useState(new Array(7).fill(null))
    const [colorCategory, setColorCategory] = React.useState(new Array(7).fill(null))
    const [colorTime, setColorTime] = React.useState(new Array(7).fill(null))

    const setIndexDay = (idx, value) => {
        for (let i = 0; i < movie.length; i++) {
            if (movie[i][0].date == value) {
                setValueDay(value)
                const newColor = new Array(7).fill(null);
                newColor[idx] = "changeColorBackground"
                setColorDay(newColor)
                setColorCineplex(new Array(7).fill(null))
                setColorCategory(new Array(7).fill(null))
                setColorTime(new Array(7).fill(null))
                if (movie[i][0].details[0]) {
                    setValueCineplex(movie[i])
                    setSchedule(movie[i][0].details[0].detailsCat[0].schedule)
                    setCategory(movie[i][0].details[0].detailsCat)
                    setTime(movie[i][0].details[0].detailsCat[0].schedule[0])
                } else {
                    setValueCineplex(null)
                    setSchedule(null);
                    setCategory(null)
                }
            }
        }
    }

    const setIndexCineplex = (idx, value) => {
        for (let i = 0; i < valueCineplex.length; i++) {
            const result = valueCineplex[i].details.find((el) => (
                el.cineplex == value
            ))
            const newColor = new Array(valueCineplex.length).fill(null);
            newColor[idx] = "changeColorBackground"
            setColorCineplex(newColor)
            setCategory(result.detailsCat)
            if (result.detailsCat) {
                setSchedule(result.detailsCat[0].schedule)
            }
            sessionStorage.setItem("valueCineplex", JSON.stringify(value));
        }
    };

    const setIndexCategory = (idx, value) => {
        for (let i = 0; i < category.length; i++) {
            const result = category.find((el) => (
                el.cate_room == value
            ))
            const newColor = new Array(valueCineplex.length).fill(null);
            newColor[idx] = "changeColorBackground"
            setColorCategory(newColor)
            setSchedule(result.schedule)
        }
    }
    const setIndexTime = (idx, value) => {
        const newColor = new Array(schedule.length).fill(null);
        newColor[idx] = "changeColorBackground"
        setColorTime(newColor)
        setTime(value)
    }

    const handleProceed = () => {
        if (time && category && valueCineplex && valueDay) {
            sessionStorage.setItem("day", JSON.stringify(valueDay));
            sessionStorage.setItem("category", JSON.stringify(category));
            sessionStorage.setItem("time", JSON.stringify(time));
        } else {
            alert("Please choose showtime 😅")
        }
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
                {openformLogin === true ? (movie.map((item, idx) => (
                    <button className={`btncalendar ${colorDay[idx]}`} onClick={() => setIndexDay(idx, item[0].date)}>
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
                    {((valueCineplex[0].details.length > 0 ? (valueCineplex[0].details.map((dt, idx) => (
                        <button className={`btncinema-complex ${colorCineplex[idx]}`} onClick={() => setIndexCineplex(idx, dt.cineplex)}>
                            <div>{
                                dt.cineplex
                            }</div>
                        </button>))) : <p></p>))}
                </div>
                <div className="movie-genre ">
                    {(category?.map((dtc, idx) => (
                        <button className={`btncategory ${colorCategory[idx]}`} onClick={() => setIndexCategory(idx, dtc.cate_room)}>
                            <div >{dtc.cate_room}</div><div> phụ đề Việt</div>
                        </button>
                    )))
                    }
                </div>
                <div className="time">
                    <div className="item">
                        <div className="list-time">
                            {(schedule?.map((item, idx) => (
                                <button className={`showtime ${colorTime[idx]}`} onClick={() => setIndexTime(idx, item)}>
                                    <p>{item.time_start}</p>
                                </button>
                            )))}
                        </div>
                    </div>
                </div></>) :
                <p className="alert-null">Sorry, there is no showing on this date, please choose another date 😅</p>}
            {(time && category && valueCineplex && valueDay)?<Link to={`/booking/${movies.slug}`} className="proceed-dialog custom-button" onClick={() => handleProceed()}>
                Proceed
            </Link>:<></>}
        </div>
    </div>;
}

export default DialogBookingScreen;
