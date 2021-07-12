import React, { Component } from "react";
import logo from "../../assets/images/logo1.png";
import "./footer.style.css"
import "../../assets/css/main.css";
export default class Footer extends Component {
  render() {
    return (
      <footer class="footer-section">
      <div class="">
        <div class="footer-bottom">
          <div class="footer-bottom-area">
            <div class="left">
              <p>
                Copyright © 2020.All Rights Reserved By <a href="#0">Block Buster </a>
              </p>
            </div>
            <ul class="links">
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Terms Of Use</a>
              </li>
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href="#0">FAQ</a>
              </li>
              <li>
                <a href="#0">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
