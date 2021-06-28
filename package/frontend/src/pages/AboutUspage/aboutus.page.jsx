import React from 'react';
import "../../assets/css/main.css";
import "./aboutus.style.css";
import about01 from "../../assets/img/about01.png";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import icon01 from "../../assets/img/icon01.png";
import icon02 from "../../assets/img/icon02.png";
import tour from "../../assets/img/tour.png";
import aboutCounter01 from "../../assets/img/about-counter01.png";
import aboutCounter02 from "../../assets/img/about-counter02.png";
import aboutCounter03 from "../../assets/img/about-counter03.png";
import aboutCounter04 from "../../assets/img/about-counter04.png";
import gallery05 from "../../assets/img/gallery05.jpg";
import gallery06 from "../../assets/img/gallery06.jpg";
import gallery07 from "../../assets/img/gallery07.jpg";
import gallery08 from "../../assets/img/gallery08.jpg";
import gallery09 from "../../assets/img/gallery09.jpg";
import gallery10 from "../../assets/img/gallery10.jpg";
import gallery11 from "../../assets/img/gallery11.jpg";
import gallery12 from "../../assets/img/gallery12.jpg";
import gallery13 from "../../assets/img/gallery13.jpg";

function AboutUsPage() {
    return (
        <body>
    <section
      class="main-page-header bg_img"
    >
      <div class="container">
        <div class="speaker-banner-content">
          <h2 class="title">about us</h2>
        </div>
      </div>
    </section>

    <section class="about-section padding-top">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <div class="event-about-content">
              <div class="section-header-3 left-style m-0">
                <span class="cate">we are Boleto </span>
                <h2 class="title">Get to know us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
                <a href="#0" class="custom-button">book tickets</a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="about-thumb">
              <img src={about01} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="
        philosophy-section
        padding-top padding-bottom
        bg-one bg_img bg_quater_img
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-9 offset-lg-3 bg-two">
            <div class="philosophy-content">
              <div class="section-header-3 left-style">
                <span class="cate">Take look at</span>
                <h2 class="title">Our philosophy</h2>
                <p class="ml-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmtempor incididunt labore et dolore magna aliqu enim ad
                  minim veniam quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                </p>
              </div>
              <ul class="phisophy-list">
                <li>
                  <div class="thumb">
                    <img src={icon1} alt="philosophy" />
                  </div>
                  <h5 class="title">Honesty & Fairness</h5>
                </li>
                <li>
                  <div class="thumb">
                    <img src={icon2} alt="philosophy" />
                  </div>
                  <h5 class="title">Clarity & Transparency</h5>
                </li>
                <li>
                  <div class="thumb">
                    <img src={icon3} alt="philosophy" />
                  </div>
                  <h5 class="title">Focus on Customers</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="about-counter-section padding-bottom padding-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-header-3 left-style mb-lg-0">
              <span class="cate">quick facts</span>
              <h2 class="title">fun facts</h2>
              <p>
                Objectively seize scalable metrics whereas proactive services
                seamlessly empower fully researched growth strategies
              </p>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="about-counter">
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src={aboutCounter01} alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="30"></h3>
                  <h3 class="title">M+</h3>
                </div>
                <span class="d-block info">Customers</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src={aboutCounter02} alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="11"></h3>
                </div>
                <span class="d-block info">Contries</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src={aboutCounter03} alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="650"></h3>
                  <h3 class="title">+</h3>
                </div>
                <span class="d-block info">Towns & Cities</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src={aboutCounter04} alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="5000"></h3>
                  <h3 class="title">+</h3>
                </div>
                <span class="d-block info">Screens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <section class="gallery-section padding-top padding-bottom bg-one">
      <div class="container">
        <div class="section-header-3">
          <span class="cate">Take a look at our</span>
          <h2 class="title">A ticket for every fan.</h2>
          <p>
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience,
            gender, gender identity and expression
          </p>
        </div>
        <div class="row justify-content-center gallery-wrapper mb-30-none">
          <div class="col-lg-3 col-sm-6">
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery05.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery05} alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery06.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery06} alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery07.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery07} alt="gallery" />
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 order-lg-1">
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery11.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery11} alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery12.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery12} alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery13.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery13} alt="gallery" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery08.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src={gallery08} alt="gallery" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="gallery-item two">
                  <div class="gallery-thumb">
                    <a
                      href="./assets/images/gallery/gallery09.jpg"
                      class="img-pop"
                    >
                      <i class="flaticon-loupe"></i>
                    </a>
                    <img src={gallery09} alt="gallery" />
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="gallery-item two">
                  <div class="gallery-thumb">
                    <a
                      href="./assets/images/gallery/gallery10.jpg"
                      class="img-pop"
                    >
                      <i class="flaticon-loupe"></i>
                    </a>
                    <img src={gallery10} alt="gallery" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="tour-section padding-top padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="tour-content">
              <div class="section-header-3 left-style">
                <span class="cate">take a look at our tour</span>
                <h2 class="title">Guarantees you can trust.</h2>
                <p class="ml-0">
                  Because more peace of mind means more love for the event.
                </p>
              </div>
              <ul class="list-tour">
                <li>
                  <div class="thumb">
                    <img src={icon01} alt="tour" />
                  </div>
                  <div class="content">
                    <h5 class="title">Get In Guarantee</h5>
                    <p>
                      Authentic tickets, on-time delivery, and access to your
                      event. Or your money back. Period.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="thumb">
                    <img src={icon02} alt="tour" />
                  </div>
                  <div class="content">
                    <h5 class="title">price match guarantee</h5>
                    <p>
                      The best prices are here. If you spot a better deal
                      elsewhere, we’ll cover the difference.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <div class="tour-thumb">
              <img src={tour} alt="tour" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
    );
}

export default AboutUsPage;