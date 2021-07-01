import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./dialog.style.css";
import "../../assets/css/main.css";
import "../../pages/Loginpage/login.style.scss"

// Actions
import { postBookingShow } from "../../redux/actions/movieActions";

const DialogBookingScreen = ({ openformLogin, BackOpenformLogin }) => {

    const _details = [
        {
            date: "05/06/2021",
            details: [
                {
                    cineplex: "CGV nhà làm",
                    detailsCat: [
                        {
                            cate_room: "2D",
                            schedule: [
                                {
                                    id_schedule: 3,
                                    time: "22:25"
                                }
                            ]
                        },
                        {
                            cate_room: "4D",
                            schedule: [
                                {
                                    id_schedule: 4,
                                    time: "22:15"
                                }
                            ]
                        }
                    ]
                },
                {
                    cineplex: "Galaxy nhà làm",
                    detailsCat: [
                        {
                            cate_room: "2D",
                            schedule: [
                                {
                                    id_schedule: 1,
                                    time: "12:55"
                                },
                                {
                                    id_schedule: 8,
                                    time: "6:25"
                                },
                                {
                                    id_schedule: 10,
                                    time: "6:25"
                                }
                            ]
                        },
                        {
                            cate_room: "3D",
                            schedule: [
                                {
                                    id_schedule: 2,
                                    time: "9:55"
                                },
                                {
                                    id_schedule: 9,
                                    time: "18:25"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    const A01 = _details[0].details;

    const dispatch = useDispatch();
    const [indexDetails, setIndexDetails] = React.useState(0)
    const [indexCatogory, setIndexCatogory] = React.useState(0)

    const DialogBooking = useSelector((state) => state.postBookingShow);
    const { loading, error, movie } = DialogBooking;
    useEffect(() => {
        dispatch(postBookingShow());
    }, [dispatch]);

    const setIndexSeat = (value) => {
        for (let i = 0;i < A01.length;i++) {
            if (value == A01[i].cineplex) {
                setIndexDetails(i)
            }
        }
    };

    const A02 = A01[indexDetails].detailsCat;

    const setValueCatogory = (value) => {
        for (let i = 0;i < A02.length;i++) {
            if (value == A02[i].cate_room) {
                setIndexCatogory(i)
            }
        }
    }

    const A03 = A02[indexDetails].schedule;

    return <div className="loginpage"
        {...(openformLogin === true
            ? { className: "loginpage openform" }
            : { className: "loginpage" })}>
        <div className="bookingscreen">
            <button className="custom-button close-dialog" onClick={BackOpenformLogin}>
                X
            </button>
            <div className="date">
                <button className="btncalendar">
                    <div className="day">
                        <p className="texture">{_details[0].date}</p>
                    </div>
                    <div className="month">
                        <p>05 TUE</p>
                    </div>
                </button>
            </div>
            <div className="theater-cluster">
                {(function (rows) {
                    for (let i = 0;i < A01.length;i++) {
                        rows.push(
                            <button className="btncinema-complex" onClick={() => setIndexSeat(A01[i].cineplex)}>
                                <div >{A01[i].cineplex}</div>
                            </button>
                        );
                    }
                    return rows;
                })([])}
            </div>
            <div className="movie-genre ">
                {(function (rows) {
                    for (let i = 0;i < A02.length;i++) {
                        rows.push(
                            <button className="btncategory" onClick={() => setValueCatogory(A02[i].cate_room)}>
                                <div >{A02[i].cate_room} Phụ đề tiếng Việt</div>
                            </button>
                        );
                    }
                    return rows;
                })([])}
            </div>
            <div className="time">
                <div className="item">
                    <div className="list-time">
                        {(function (rows) {
                            for (let i = 0;i < A03.length;i++) {
                                rows.push(
                                    <button className="showtime"><p>{A03[i].time}</p></button>
                                );
                            }
                            return rows;
                        })([])}

                    </div>
                </div>
            </div>
            <button className="proceed-dialog custom-button" >
                Proceed
            </button>
        </div>
    </div>;
}

export default DialogBookingScreen;
