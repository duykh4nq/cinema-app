import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./checkout.style.css";
import "../../assets/css/main.css";
import card from "../../assets/img/card.png";
import paypal from "../../assets/img/paypal.png";

// Actions
import { checkoutCart } from "../../redux/actions/movieActions";


function CheckoutPage() {
  const dispatch = useDispatch();
  const total = JSON.parse(sessionStorage.getItem("total"));
  const seat = JSON.parse(sessionStorage.getItem("arrSeat"));
  const _schedule = JSON.parse(sessionStorage.getItem("movies"));
  const [address, setAddress] = React.useState(null)
  const name=JSON.parse(sessionStorage.getItem("users")).user.name
  const phone=JSON.parse(sessionStorage.getItem("users")).user.phone

  const proceedPayment = () => {
    if (!address)
      alert("Please enter your address😉");
    else {
      dispatch(checkoutCart(total, seat));}
  }

  return (<>
    {total && seat ? <>
      <section
        class="main-page-header"
      >
        <div class="container">
          <div class="speaker-banner-content">
            <h2 class="title">payment</h2>
          </div>
        </div>
      </section>
      <div class="event-facility padding-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="checkout-widget checkout-contact">
                <h5 class="title">Share your Contact Details</h5>
                <form class="checkout-contact-form">
                  <div class="form-group">
                    <input type="text" value={name} disabled />
                  </div>
                  <div class="form-group">
                    <input type="text" value={phone} disabled />
                  </div>
                  <div class="form-group form-address">
                    <input type="text" placeholder="Enter your Address" required
                      onChange={(e) => setAddress(e.target.value)} />
                  </div>
                </form>
              </div>
              <div class="checkout-widget checkout-card mb-0">
                <h5 class="title">Payment Option</h5>
                <ul class="payment-option">
                  <li class="active">
                    <a href="#0">
                      <img src={card} alt="payment" />
                      <span>Credit Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src={card} alt="payment" />
                      <span>Debit Card</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src={paypal} alt="payment" />
                      <span>paypal</span>
                    </a>
                  </li>
                </ul>
                <form class="payment-card-form">
                  <div class="form-group check-group">
                    <input id="card5" type="checkbox" checked />
                    <label>
                      <span class="info">Tôi đồng ý với điều khoản và mua vé với người có độ tuổi
                        phù hợp.</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="booking-summery bg-one">
                <h4 class="title">booking summery</h4>
                <ul>
                  <li>
                    <h6 class="subtitle">
                      <span>STD</span> <span>{(total/seat.length).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}vnd</span>
                    </h6>
                    <div class="info"><span>Số lượng</span><span>{seat.length}</span></div>
                  </li>
                  <li>
                    <h6 class="subtitle mb-0">
                      <span>Tổng cộng</span><span>{total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}vnd</span>
                    </h6>
                  </li>
                </ul>
                <ul class="side-shape">
                  <li>
                    <h6 class="subtitle">
                      <span>Your seat: </span> <span>{seat+"  "}</span>
                    </h6>
                  </li>
                </ul>
              </div>
              <div class="proceed-area text-center">
                <h6 class="info">
                  <h5>TỔNG TIỀN THANH TOÁN</h5>
                </h6>
                <div class="info-total"><span>{total.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}vnd</span></div>
                <Link to={address?`/`:`/payment/${_schedule.slug}`} class="custom-button back-button" onClick={() => proceedPayment()}>
                  proceed</Link>
              </div>
            </div>
          </div>
        </div>
      </div></>
      : <p></p>}</>
  );
}

export default CheckoutPage;