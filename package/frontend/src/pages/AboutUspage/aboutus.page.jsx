import React from 'react';
import "../../assets/css/main.css";
import about01 from "../../assets/img/about01.png";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import icon3 from "../../assets/img/icon3.png";
import client01 from "../../assets/img/client01.jpg";
import client02 from "../../assets/img/client02.jpg";
import client03 from "../../assets/img/client03.jpg";
import client04 from "../../assets/img/client04.jpg";
import speaker01 from "../../assets/img/speaker01.jpg";
import speaker02 from "../../assets/img/speaker02.jpg";
import speaker03 from "../../assets/img/speaker03.jpg";
import speaker04 from "../../assets/img/speaker04.jpg";

function AboutUsPage() {
    return (
        <body>
    <section
      class="main-page-header speaker-banner bg_img"
      data-background="./assets/images/banner/banner07.jpg"
    >
      <div class="container">
        <div class="speaker-banner-content">
          <h2 class="title">about us</h2>
          <ul class="breadcrumb">
            <li>
              <a href="index.html"> Home </a>
            </li>
            <li>about us</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about-section padding-top padding-bottom">
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
      data-background="./assets/images/about/about-bg.jpg"
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
                  <img src="../img/about-counter01.png" alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="30"></h3>
                  <h3 class="title">M+</h3>
                </div>
                <span class="d-block info">Customers</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src="../img/about-counter02.png" alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="11"></h3>
                </div>
                <span class="d-block info">Contries</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src="../img/about-counter03.png" alt="about" />
                </div>
                <div class="counter-content">
                  <h3 class="title odometer" data-odometer-final="650"></h3>
                  <h3 class="title">+</h3>
                </div>
                <span class="d-block info">Towns & Cities</span>
              </div>
              <div class="counter-item">
                <div class="counter-thumb">
                  <img src="../img/about-counter04.png" alt="about" />
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
    
    <section
      class="client-section padding-bottom padding-top bg_img"
      data-background="./assets/images/client/client-bg.jpg"
    >
      <div class="container">
        <div class="section-header-3">
          <span class="cate">testimonials</span>
          <h2 class="title">the fans have spoken</h2>
        </div>
        <div class="client-slider owl-carousel owl-theme">
          <div class="client-item">
            <div class="client-thumb">
              <img src={client01} alt="client" />
            </div>
            <div class="client-content">
              <h5 class="title">
                <a href="#0">Rafuz</a>
              </h5>
              <span class="info"><i class="fas fa-check"></i> Verified</span>
              <blockquote class="client-quote">
                "Great prices and Cheaper than other sites! Easy to use."
              </blockquote>
            </div>
          </div>
          <div class="client-item">
            <div class="client-thumb">
              <img src={client03} alt="client" />
            </div>
            <div class="client-content">
              <h5 class="title">
                <a href="#0">Rudra</a>
              </h5>
              <span class="info"><i class="fas fa-check"></i> Verified</span>
              <blockquote class="client-quote">
                "Id iure est sint at illum ipsum non beatae cumque"
              </blockquote>
            </div>
          </div>
          <div class="client-item">
            <div class="client-thumb">
              <img src={client02} alt="client" />
            </div>
            <div class="client-content">
              <h5 class="title">
                <a href="#0">Raihan</a>
              </h5>
              <span class="info"><i class="fas fa-check"></i> Verified</span>
              <blockquote class="client-quote">
                "amet consectetur adipisicing elit. Animi, ut consequuntur"
              </blockquote>
            </div>
          </div>
          <div class="client-item">
            <div class="client-thumb">
              <img src={client04} alt="client" />
            </div>
            <div class="client-content">
              <h5 class="title">
                <a href="#0">Shahidul</a>
              </h5>
              <span class="info"><i class="fas fa-check"></i> Verified</span>
              <blockquote class="client-quote">
                "Quia voluptatum animi libero recusandae error."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section class="speaker-section padding-bottom padding-top">
      <div class="container">
        <div class="section-header-3">
          <span class="cate">meet our most valued</span>
          <h2 class="title">expert team members</h2>
          <p>
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience,
            gender, gender identity and expression
          </p>
        </div>
        <div class="speaker--slider">
          <div class="speaker-slider owl-carousel owl-theme">
            <div class="speaker-item">
              <div class="speaker-thumb">
                <a href="event-speaker.html">
                  <img src={speaker01} alt="speaker" />
                </a>
              </div>
              <div class="speaker-content">
                <h5 class="title">
                  <a href="event-speaker.html"> Gerard Bryan </a>
                </h5>
                <span>CO-FOUNDER, CEO</span>
              </div>
            </div>
            <div class="speaker-item">
              <div class="speaker-thumb">
                <a href="event-speaker.html">
                  <img src={speaker02} alt="speaker" />
                </a>
              </div>
              <div class="speaker-content">
                <h5 class="title">
                  <a href="event-speaker.html"> Raihan Rafuj </a>
                </h5>
                <span>CO-FOUNDER, CEO</span>
              </div>
            </div>
            <div class="speaker-item">
              <div class="speaker-thumb">
                <a href="event-speaker.html">
                  <img src={speaker03} alt="speaker" />
                </a>
              </div>
              <div class="speaker-content">
                <h5 class="title">
                  <a href="event-speaker.html"> Bela Bose </a>
                </h5>
                <span>CO-FOUNDER, CEO</span>
              </div>
            </div>
            <div class="speaker-item">
              <div class="speaker-thumb">
                <a href="event-speaker.html">
                  <img src={speaker04} alt="speaker" />
                </a>
              </div>
              <div class="speaker-content">
                <h5 class="title">
                  <a href="event-speaker.html"> Grass Hopper </a>
                </h5>
                <span>CO-FOUNDER, CEO</span>
              </div>
            </div>
          </div>
          <div class="speaker-prev">
            <i class="flaticon-double-right-arrows-angles"></i>
          </div>
          <div class="speaker-next">
            <i class="flaticon-double-right-arrows-angles"></i>
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
                <img src="../img/gallery05.jpg" alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery06.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery06.jpg" alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery07.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery07.jpg" alt="gallery" />
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 order-lg-1">
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery11.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery11.jpg" alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery12.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery12.jpg" alt="gallery" />
              </div>
            </div>
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery13.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery13.jpg" alt="gallery" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="gallery-item two">
              <div class="gallery-thumb">
                <a href="./assets/images/gallery/gallery08.jpg" class="img-pop">
                  <i class="flaticon-loupe"></i>
                </a>
                <img src="../img/gallery08.jpg" alt="gallery" />
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
                    <img src="../img/gallery09.jpg" alt="gallery" />
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
                    <img src="../img/gallery10.jpg" alt="gallery" />
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
                    <img src="../img/icon01.png" alt="tour" />
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
                    <img src="../img/icon02.png" alt="tour" />
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
              <img src="../img/tour.png" alt="tour" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
    );
}

export default AboutUsPage;