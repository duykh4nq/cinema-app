import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMovies as listMovies } from "../../redux/actions/movieActions";

import Slider from "react-slick";
//import img
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.png";

import "./home.style.css";
import "swiper/swiper.min.css";
import SwiperComponent from "../../components/Swiper/SwiperComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const getMovies = useSelector((state) => state.getMovies);
  const { movies } = getMovies;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var arrData = [];

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);
  return (
    <div class="homepage">
      <div className="banner">
        <Slider {...settings}>
          <div>
            <img src={banner1}></img>
          </div>
          <div>
            <img src={banner2}></img>
          </div>
          <div>
            <img src={banner3}></img>
          </div>
        </Slider>
      </div>

      <section class="movie-section padding-bottom bg-two">
        <div class="container">
          <div class="row flex-wrap-reverse justify-content-center">
            <div class="col-lg-12">
              <div class="article-section padding-bottom">
                <div class="section-header-1">
                  <h2 class="title">movies</h2>
                </div>
                {arrData ? (
                  <Swiper
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    allowTouchMove={true}
                    lazy={true}
                    slidesPerGroup={3}
                    loop={true}
                  >
                    {arrData.map((item, index) => (
                      <SwiperSlide key={index}>
                        <SwiperComponent item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : null}

                <div class="row mb-30-none justify-content-center"></div>
              </div>

              <div class="article-section padding-bottom">
                <div class="section-header-1">
                  <h2 class="title">movies</h2>
                  <a class="view-all" href="movie-grid.html">
                    View All
                  </a>
                </div>
                <Swiper
                  pagination={true}
                  slidesPerView={3}
                  spaceBetween={20}
                  allowTouchMove={true}
                  lazy={true}
                  slidesPerGroup={3}
                  loop={true}
                >
                  {arrData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <SwiperComponent item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div class="row mb-30-none justify-content-center"></div>
              </div>

              <div class="article-section padding-bottom">
                <div class="section-header-1">
                  <h2 class="title">movies</h2>
                  <a class="view-all" href="movie-grid.html">
                    View All
                  </a>
                </div>
                <Swiper
                  pagination={true}
                  slidesPerView={3}
                  spaceBetween={20}
                  allowTouchMove={true}
                  lazy={true}
                  slidesPerGroup={3}
                  loop={true}
                >
                  {arrData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <SwiperComponent item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div class="row mb-30-none justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
