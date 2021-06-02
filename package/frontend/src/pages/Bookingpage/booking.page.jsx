import React from 'react';
import "../../assets/css/main.css";
import "./booking.style.css";
import screen_thumb from '../../assets/img/screen-thumb.png';
import seat01 from "../../assets/img/seat01.png";
import seat01_free from "../../assets/img/seat01-free.png";
import seat01_booked from "../../assets/img/seat01-booked.png";


function BookingPage() {
    return (
        <>
    <section
      class="details-banner hero-area bg_img seat-plan-banner"
    >
      <div >
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
            <a href="movie-ticket-plan.html" class="custom-button back-button">
              <i class="flaticon-double-right-arrows-angles"></i>back
            </a>
          </div>
          <div class="item" > 
            <h5 class="title">BÀN TAY DIỆT QUỶ (2D)</h5>
          </div>
          <div class="item-right" >
            <p>26/05/2021 14:10 ~ 26/05/2021 16:37</p>
            <p>CGV Vincom Trà Vinh | Cinema 3 | Số ghế (141/141)</p>
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
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul class="list-seat">
                      <li class="single-seat" >1</li>
                      <li class="single-seat" >2</li>
                      <li class="single-seat" >3</li>
                      <li class="single-seat" >4</li>
                      <li class="single-seat" >5</li>
                      <li class="single-seat" >6</li>
                      <li class="single-seat" >7</li>
                      <li class="single-seat" >8</li>
                      <li class="single-seat" >9</li>
                      <li class="single-seat" >10</li>
                      <li class="single-seat" >11</li>
                      <li class="single-seat" >12</li>
                      <li class="single-seat" >13</li>
                      <li class="single-seat" >14</li>
                      <li class="single-seat" >15</li>
                      <li class="single-seat" >16</li>
                      <li class="single-seat" >17</li>
                      <li class="single-seat" >18</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="seat-line">
                <span>A</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>A</span>
              </li>
              <li class="seat-line">
                <span>B</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>b</span>
              </li>
              <li class="seat-line">
                <span>c</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>c</span>
              </li>
              <li class="seat-line">
                <span>d</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>d</span>
              </li>
              <li class="seat-line">
                <span>e</span>
                <ul class="seat--area">
                  <li class="front-seat">
                    <ul>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                      <li class="single-seat">
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>e</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="proceed-book bg_img"
        >
          <div class="proceed-to-book">
            <div class="book-item">
              <ul>
                <li class="item-book">
                  <img src={seat01} alt="seat" />
                  <p class="book-info">
                      Chưa chọn</p>
                </li>
                <li
                  class="item-book"
                >
                  <img src={seat01_free} alt="seat" />
                  <p class="book-info">Đã chọn</p>
                </li>
                <li class="item-book"
                >
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
              <a href="/checkout" class="custom-button">proceed</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    );
}

export default BookingPage;