import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/main.css";
import "./booking.style.css";
import screen_thumb from "../../assets/img/screen-thumb.png";
import seat01 from "../../assets/img/seat01.png";
import seat01_free from "../../assets/img/seat01-free.png";
import seat01_booked from "../../assets/img/seat01-booked.png";

// Actions
import { postBookingSeat } from "../../redux/actions/movieActions";
import { unstable_batchedUpdates } from "react-dom";

const BookingPage = (schedule) => {
  console.log(`🚀 => file: booking.page.jsx => line 16 => schedule`, schedule);
  const dispatch = useDispatch();
  const seatBooking = useSelector((state) => state.postBookingSeat);
  const { loading, error, seat } = seatBooking;
  console.log(`🚀 => file: booking.page.jsx => line 19 => seat`, seat);
  useEffect(() => {
    dispatch(postBookingSeat(schedule.id)); // truyền id_schedule
  }, []);

  const [horizontal, setHorizontal] = React.useState(0);
  const [vertical, setVertical] = React.useState("");

  const setIndexSeat = (e) => {};

  const clickconmegiday = (_seat) => {
    console.log(_seat);
  };
  const renderGhe = () => {
    const arr = new Array(7 * 9).fill("");
    const newArr = arr.map((elem, index) => {
      const charI = String.fromCharCode(65 + ~~(index / 9));
      const number = ~~(index % 9) + 1;
      return `${charI}${number}`;
    });
    return newArr;
  };
  const renderGhe1 = () => {
    
  console.log(`🚀 => file: booking.page.jsx => line 52 => renderGhe1`, 222)
    return renderGhe().map((elm,_index) => {
      // const _widthSeat=100/9-2rem
      return (<ul key={_index} style={{ width: "calc(100%/9 - 2rem)",margin: "1rem"}}>
        <li class="single-seat" onClick={() => clickconmegiday(elm)}>
          <img src={seat01} alt="seat" />
          <span class="sit-num">{elm}</span>
        </li>
      </ul>)
    });
  };
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
            <div class="item md-order-1">
              <a
                href="movie-ticket-plan.html"
                class="custom-button back-button"
              >
                <i class="flaticon-double-right-arrows-angles"></i>back
              </a>
            </div>
            <div class="item">
              <h5 class="title">{schedule.name_movie}</h5>
            </div>
            <div class="item-right">
              <p>{schedule.release_date} 14:10 ~ 16:37</p>
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
                  {/* {(function () {
                    let chr;
                    let seat_code;
                    let cols = [];
                    let rows = [];

                    for (let i = 1; i <= 9; i++) {
                      for (let j = 1; j <= 7; j++) {
                        chr = String.fromCharCode(64 + j);
                        seat_code = chr + i.toString();
                        console.log(
                          `🚀 => file: booking.page.jsx => line 89 => seat_code`,
                          seat_code
                        );
                        cols.push(
                          <ul>
                            <li
                              class="single-seat"
                              onClick={() =>
                                clickconmegiday(
                                  String.fromCharCode(64 + j) + i.toString()
                                )
                              }
                            >
                              <img src={seat01} alt="seat" />
                              <span class="sit-num">{seat_code}</span>
                            </li>
                          </ul>
                        );
                      }
                      rows.push(
                        <div key={chr}>
                          {cols.map((col, i) => {
                            // console.log(`🚀 => file: booking.page.jsx => line 102 => i`, i)
                            return <div>{col}</div>;
                          })}
                        </div>
                      );

                      cols = [];
                    }
                    console.log(
                      `🚀 => file: booking.page.jsx => line 153 => rows`,
                      rows[3]
                    );
                    return rows;
                  })([])} */}
                  {renderGhe1()}
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
                    <p class="book-info">Chưa chọn</p>
                  </li>
                  <li class="item-book">
                    <img src={seat01_free} alt="seat" />
                    <p class="book-info">Đã chọn</p>
                  </li>
                  <li class="item-book">
                    <img src={seat01_booked} alt="seat" />
                    <p class="book-info">Checked</p>
                  </li>
                </ul>
              </div>
              <div class="book-item">
                <span>You have Choosed Seat</span>
                <h3 class="title">d9, d10</h3>
              </div>
              <div class="book-item">
                <span>total price</span>
                <h3 class="title">$150</h3>
              </div>
              <div class="book-item">
                <a href="/checkout" class="custom-button">
                  proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
