import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Moment from "moment";
import { Link } from "react-router-dom";

import "../../assets/css/main.css";
import "./booking.style.css";

import screen_thumb from "../../assets/img/screen-thumb.png";
import seat01 from "../../assets/img/seat.svg";
import seat_checked from "../../assets/img/seat_checked.svg";
import seat_booked from "../../assets/img/seat_booked.svg";

// Actions
import { postBookingSeat } from "../../redux/actions/movieActions";

const BookingPage = (getState) => {
  const seated = ["A1", "B5", "C3"]
  const [arrSeat, setArrSeat] = React.useState([])
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();
  const _schedule = JSON.parse(sessionStorage.getItem("movies"));

  const seatBooking = useSelector((state) => state.postBookingSeat);
  const { loading, error, seat } = seatBooking;
  console.log(`🚀 => file: booking.page.jsx => line 24 => seat`, seat)

  useEffect(() => {
    dispatch(postBookingSeat());
  }, [dispatch]);

  const setIndexSeat = (e, index) => {
    e.target.setAttribute("src", seat_checked)
    const abc = [...new Set([...arrSeat, index])]
    setArrSeat(abc)
    setTotal(55000 * (arrSeat.length + 1))
  };
  const renderSeatCode = () => {
    const arr = new Array(7 * 9).fill("");
    const newArr = arr.map((elem, index) => {
      const charI = String.fromCharCode(65 + ~~(index / 9));
      const number = ~~(index % 9) + 1;
      return { seat: `${charI}${number}`, available: false };
    });
    return newArr
  };

  const renderSeat = () => {
    return renderSeatCode().map((elm, _index) => {
      // const _widthSeat=100/9-2rem
      const renderImg = seated.includes(elm.seat) ? seat_booked : seat01

      return (<ul key={_index} style={{ width: "calc(100%/9 - 2rem)", margin: "1rem" }}>
        <li class="single-seat" onClick={(e) => setIndexSeat(e, elm.seat)}>
          <img src={renderImg} alt="seat" />
          <span class="sit-num">{elm.seat}</span>
        </li>
      </ul>)
    });
  };

  const ProceedCheckout = () => {
    sessionStorage.setItem("total",JSON.stringify(total));
    sessionStorage.setItem("arrSeat",JSON.stringify(arrSeat));
  }

  return (
    <>
      <section class="details-banner hero-area bg_img seat-plan-banner">
        <div>
          <div class="details-banner-wrapper">
            <div class="details-banner-content style-two">
              <h3 class="title">BOOKING ONLINE</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="page-title bg-one">
        <div class="container">
          <div class="page-title-area">
            <div class="item">
              <h5 class="title">{_schedule.name_movie}</h5>
            </div>
            <div class="item-right">
              <p>{Moment(_schedule.release_date).format("DD-MM-YYYY")} 14:10 ~ 16:37</p>
              <p>CGV Vincom Trà Vinh | Cinema 3 | Số ghế (141/141)</p>{" "}
              {/* ({seat.empty_seat}/{seat.sum_of_seat}) */}
            </div>
          </div>
        </div>
      </section>
      <div class="seat-plan-section padding-bottom padding-top">
        <div class="container">
          <div class="screen-area">
            <h4 class="screen">screen</h4>
            <div class="screen-thumb">
              <img src={screen_thumb} alt="movie" />
            </div>
            <div class="screen-wrapper">
              <ul class="seat-area couple">
                <li class="seat-line">
                  {renderSeat()}
                </li>
              </ul>
            </div>
          </div>
          <div class="proceed-book bg_img">
            <div class="proceed-to-book">
              <div class="book-item">
                <ul>
                  <li class="item-book">
                    <img src={seat01} alt="seat" />
                    <p class="book-info">Empty seats</p>
                  </li>
                  <li class="item-book">
                    <img src={seat_booked} alt="seat" />
                    <p class="book-info">Booked seats</p>
                  </li>
                  <li class="item-book">
                    <img src={seat_checked} alt="seat" />
                    <p class="book-info">Booking seats</p>
                  </li>
                </ul>
              </div>
              <div class="book-item">
                <span>You have Choosed Seat</span>
                <div className="list-selected">
                  {arrSeat.map(elm => {
                    return <h3 class="title">{elm}, </h3>
                  })}
                </div>
              </div>
              <div class="book-item">
                <span>total price</span>
                <h3 class="title">{total}đ</h3>
              </div>
              <div class="book-item" onClick={() => ProceedCheckout()}>
                <Link to={`/payment/${_schedule.slug}`} class="custom-button">
                  proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;