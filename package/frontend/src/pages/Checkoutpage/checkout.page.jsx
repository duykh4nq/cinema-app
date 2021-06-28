import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "./checkout.style.css";
import "../../assets/css/main.css";
import card from "../../assets/img/card.png";
import paypal from "../../assets/img/paypal.png";

// Actions
import { checkoutCart } from "../../redux/actions/movieActions";

function CheckoutPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkoutCart());
  }, [dispatch]);

    return (
        <>
    <div class="event-facility padding-bottom padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="checkout-widget checkout-contact">
              <h5 class="title">Share your Contact Details</h5>
              <form class="checkout-contact-form">
                <div class="form-group">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div class="form-group">
                  <input type="text" placeholder="Enter your Phone Number " />
                </div>
                <div class="form-group form-address">
                  <input type="text" placeholder="Enter your Address" />
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
                    <span>STD</span> <span>98.000.000đ</span>
                  </h6>
                  <div class="info"><span>Số lượng</span><span>02</span></div>
                </li>
                <li>
                  <h6 class="subtitle mb-0">
                    <span>Tổng cộng</span><span>98.000.000đ</span>
                  </h6>
                </li>
              </ul>
              <ul class="side-shape">
                <li>
                  <h6 class="subtitle">
                    <span>KHUYẾN MÃI</span><span>0đ</span>
                  </h6>
                </li>
              </ul>
            </div>
            <div class="proceed-area text-center">
              <h6 class="info">
                <h5>TỔNG TIỀN THANH TOÁN</h5>
              </h6>
              <div class="info"><span>98.000.000đ</span></div>
              <a href="#0" class="custom-button back-button">proceed</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    );
}

export default CheckoutPage;