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

const BookingPage = () => {
  const [arrSeat, setArrSeat] = React.useState([])
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();

  const _schedule = JSON.parse(sessionStorage.getItem("movies"));
  const cineplex_name = JSON.parse(sessionStorage.getItem("valueCineplex"));
  const _time = JSON.parse(sessionStorage.getItem("time"));
  const _day = JSON.parse(sessionStorage.getItem("day"));

  const seatBooking = useSelector((state) => state.postBookingSeat);
  const { loading, error, movie } = seatBooking;

  useEffect(() => {
    dispatch(postBookingSeat());
  }, [dispatch]);

  const setIndexSeat = (e, index) => {
    if (movie.seats.includes(index)) {
      alert("Seats have been booked💔")
    } else {
      e.target.setAttribute("src", seat_checked)
      const abc = [...new Set([...arrSeat, index])]
      setArrSeat(abc)
      setTotal(55000 * (arrSeat.length + 1))
    }
  };
  const renderSeatCode = () => {
    if(movie.vertical_size){
    const vertical_size= 16;
    const arr = new Array(vertical_size * movie.horizontal_size).fill("");
    const newArr = arr.map((elem, index) => {
      const charI = String.fromCharCode(65 + ~~(index / movie.horizontal_size));
      const number = ~~(index % movie.horizontal_size) + 1;
      return { seat: `${charI}${number}`, available: false };
    });
    return newArr;}
  };

  const renderSeat = () => {
    if(renderSeatCode()!==undefined){
    return renderSeatCode().map((elm, _index) => {
      const renderImg = movie.seats.includes(elm.seat) ? seat_booked : seat01
      return (<ul key={_index} style={{ width: `calc(100%/${movie.horizontal_size} - 2rem)`, margin: "1rem" }}>
        <li class="single-seat" onClick={(e) => setIndexSeat(e, elm.seat)}>
          <img src={renderImg} alt="seat" />
          <span class="sit-num">{elm.seat}</span>
        </li>
      </ul>)
    });}
  };

  const ProceedCheckout = () => {
    if (total == 0) {
      alert("Please choose a seat💺")
    } else {
      sessionStorage.setItem("total", JSON.stringify(total));
      sessionStorage.setItem("arrSeat", JSON.stringify(arrSeat));
    }
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
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (<>
        <section class="page-title bg-one">
          <div class="container">
            <div class="page-title-area">
              <div class="item">
                <h5 class="title">{_schedule.name_movie}</h5>
              </div>
              <div class="item-right">
                <p>{Moment(_day).format("DD-MM-YYYY") + " " + _time.time_start + " ~ " + _time.time_end}</p>
                <p>{cineplex_name} | Số ghế ({movie.empty_seat}/{movie.sum_of_seat})</p>
              </div>
            </div>
          </div>
        </section>
        <div class="seat-plan-section">
          <div>
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
            <div class="proceed-book bg_img container">
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
                  <h3 class="title">{total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}vnd</h3>
                </div>
                <div class="book-item" onClick={() => ProceedCheckout()}>
                  <Link to={total > 0 ? `/payment/${_schedule.id_movie}` : `/detail/booking/${_schedule.id_movie}`} class="custom-button">
                    proceed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div></>)}
    </>
  );
};

export default BookingPage;