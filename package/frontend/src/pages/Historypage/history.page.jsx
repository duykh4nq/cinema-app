import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";

//import css
import "../../assets/css/main.css";
import "./history.style.css"

//import actions
import { postAllHistoryBooking, postAllWaitHistoryBooking, postAllBookedHistoryBooking } from "../../redux/actions/movieActions";


function HistoryPage() {
    const dispatch = useDispatch();
    const HistoryBooking = useSelector((state) => state.postAllHistoryBooking);
    const { loading, error, history } = HistoryBooking;
    console.log(`🚀 => file: history.page.jsx => line 18 => history`, history)

    const WaitHistory = useSelector((state) => state.postAllWaitHistoryBooking);
    const { waitting_history } = WaitHistory;
    console.log(`🚀 => file: history.page.jsx => line 21 => waitting_history`, waitting_history)

    const BookedHistory = useSelector((state) => state.postAllBookedHistoryBooking);
    const { booked_history } = BookedHistory;
    console.log(`🚀 => file: history.page.jsx => line 25 => booked_history`, booked_history)

    useEffect(() => {
        dispatch(postAllHistoryBooking());
        dispatch(postAllWaitHistoryBooking());
        dispatch(postAllBookedHistoryBooking());
    }, [dispatch])

    return (
        loading ? (
            <h2>Loading...</h2>
        ) : error ? (
            <h2>{error}</h2>
        ) : (
            <div class="app">
                <div class="container py-5">
                    <input type="radio" name="tab-manager" id="tab-tatCa" hidden checked></input>
                    <input type="radio" name="tab-manager" id="tab-choLayHang" hidden ></input>
                    <input type="radio" name="tab-manager" id="tab-daGiao" hidden ></input>
                    <div class="wrap-status">
                    </div>
                    <section
                        class="main-page-header bg_img"
                    >
                        <div class="container">
                            <div class="speaker-banner-content">
                                <h2 class="title">all tickets booked</h2>
                            </div>
                        </div>
                    </section>
                    <div class="wrap-content mt-5">
                        <div class="wrap-name-column">
                            <label for="tab-tatCa">All tickets</label>
                            <label for="tab-choLayHang">Waiting ticket</label>
                            <label for="tab-daGiao">Ticket has been taken</label>
                        </div>
                        <div class="content-tab padding-top mt-5">
                            <div class="tab-item tabTatCa">
                                <div class="row title-colum-tab d-flex align-items-center my-3">
                                    <span class="col-lg-4">Movie name</span>
                                    <span class="col-lg-2">Amount</span>
                                    <span class="col-lg-3">Booking date</span>
                                    <span class="col-lg-3">Total</span>
                                </div>
                                <div class="wrap-cart row">
                                    {history.length > 0 ? history?.map((elm) => (
                                        <div class="card mb-3 col-12 px-0">
                                            <div class="card-body row">
                                                <div class="col-lg-4 d-flex justify-content-between">
                                                    <div className="wrap-movie">
                                                        <img src={elm.schedule.movie.poster} alt="avatar"></img>
                                                        <span>{elm.schedule.movie.name_movie}</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <p>x{elm.tickets.length}</p>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{Moment(elm.created_at).format("DD-MM-YYYY")}</strong>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{elm.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}đ</strong>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p>You haven't booked any seats yet😤</p>}
                                </div>
                            </div>

                            <div class="tab-item tabChoLayHang">
                                <div class="row title-colum-tab d-flex align-items-center my-3">
                                    <span class="col-lg-4">Movie name</span>
                                    <span class="col-lg-2">Amount</span>
                                    <span class="col-lg-3">Booking date</span>
                                    <span class="col-lg-3">Total</span>
                                </div>
                                <div class="wrap-cart row">
                                    {waitting_history!==undefined > 0 ? waitting_history?.map((elm) => (
                                        <div class="card mb-3 col-12 px-0">
                                            <div class="card-body row">
                                                <div class="col-lg-4 d-flex justify-content-between">
                                                    <div className="wrap-movie">
                                                        <img src={elm.schedule.movie.poster} alt="avatar"></img>
                                                        <span>{elm.schedule.movie.name_movie}</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <p>x{elm.tickets.length}</p>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{Moment(elm.created_at).format("DD-MM-YYYY")}</strong>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{elm.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}đ</strong>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p>You haven't booked any seats yet😤</p>}
                                </div>
                            </div>

                            <div class="tab-item tabDaGiao">
                                <div class="row title-colum-tab d-flex align-items-center my-3">
                                    <span class="col-lg-4">Movie name</span>
                                    <span class="col-lg-2">Amount</span>
                                    <span class="col-lg-3">Booking date</span>
                                    <span class="col-lg-3">Total</span>
                                </div>
                                <div class="wrap-cart row">
                                    {booked_history!==undefined ? booked_history?.map((elm) => (
                                        <div class="card mb-3 col-12 px-0">
                                            <div class="card-body row">
                                                <div class="col-lg-4 d-flex justify-content-between">
                                                    <div className="wrap-movie">
                                                        <img src={elm.schedule.movie.poster} alt="avatar"></img>
                                                        <span>{elm.schedule.movie.name_movie}</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <p>x{elm.tickets.length}</p>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{Moment(elm.created_at).format("DD-MM-YYYY")}</strong>
                                                </div>
                                                <div class="col-lg-3">
                                                    <strong>{elm.total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}đ</strong>
                                                </div>
                                            </div>
                                        </div>
                                    )) : <p>You haven't booked any seats yet😤</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    );
}

export default HistoryPage;