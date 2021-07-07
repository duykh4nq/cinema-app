import React from 'react';

//import css
import "../../assets/css/main.css";
import "./history.style.css"

import client from "../../assets/img/client02.jpg";

function HistoryPage(props) {
    return (
        <div class="app">
            <div class="container py-5">
                <input type="radio" name="tab-manager" id="tab-tatCa" hidden checked ></input>
                <input type="radio" name="tab-manager" id="tab-choXacNhan" hidden ></input>
                <input type="radio" name="tab-manager" id="tab-choLayHang" hidden ></input>
                <input type="radio" name="tab-manager" id="tab-dangGiao" hidden ></input>
                <input type="radio" name="tab-manager" id="tab-daGiao" hidden ></input>
                <input type="radio" name="tab-manager" id="tab-daHuy" hidden ></input>
                <input type="radio" name="tab-manager" id="tab-traHang" hidden ></input>
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
                                <div class="card mb-3 col-12 px-0">
                                    <div class="card-body row">
                                        <div class="col-lg-4 d-flex justify-content-between">
                                            <div className="wrap-movie">
                                                <img src={client} alt="avatar"></img>
                                                <span>Người nhân bản</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-2">
                                            <span>5v</span>
                                        </div>
                                        <div class="col-lg-3">
                                            <p>16-4-2020</p>
                                        </div>
                                        <div class="col-lg-3">
                                            <strong>đ250000</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-3 col-12 px-0">
                                    <div class="card-body row">
                                        <div class="col-lg-4 d-flex justify-content-between">
                                            <div className="wrap-movie">
                                                <img src={client} alt="avatar"></img>
                                                <span>Người nhân bản</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-2">
                                            <span>5v</span>
                                        </div>
                                        <div class="col-lg-3">
                                            <p>16-4-2020</p>
                                        </div>
                                        <div class="col-lg-3">
                                            <strong>đ250000</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryPage;