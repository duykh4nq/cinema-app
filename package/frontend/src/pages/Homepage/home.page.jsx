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
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Pagination]);

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.getMovies);
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
              {movies && Object.values(movies).length > 0 && movies.newest.length > 0 && (
                <div class="article-section padding-bottom">
                  <div class="section-header-1">
                    <h2 class="title">Newest</h2>
                  </div>
                  <Swiper
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    allowTouchMove={true}
                    lazy={true}
                    slidesPerGroup={3}
                  >
                    {movies.newest &&
                      movies.newest.map((item, index) => (
                        <SwiperSlide key={index}>
                          <SwiperComponent movie={item} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <div class="row mb-30-none justify-content-center"></div>
                </div>
              )}

              {movies && Object.values(movies).length > 0 && movies.commingsoon.length > 0 && (
                <div class="article-section padding-bottom">
                  <div class="section-header-1">
                    <h2 class="title">Commingsoon</h2>
                  </div>
                  <Swiper
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    allowTouchMove={true}
                    lazy={true}
                    slidesPerGroup={3}
                  >
                    {movies.commingsoon &&
                      movies.commingsoon.map((item, index) => (
                        <SwiperSlide key={index}>
                          <SwiperComponent movie={item} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <div class="row mb-30-none justify-content-center"></div>
                </div>
              )}
              {movies && Object.values(movies).length > 0 && movies.bestSelling.length > 0 && (
                <div class="article-section padding-bottom">
                  <div class="section-header-1">
                    <h2 class="title">Best Selling</h2>
                  </div>
                  <Swiper
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    allowTouchMove={true}
                    lazy={true}
                    slidesPerGroup={3}
                  >
                    {movies.bestSelling &&
                      movies.bestSelling.map((item, index) => (
                        <SwiperSlide key={index}>
                          <SwiperComponent movie={item} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <div class="row mb-30-none justify-content-center"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
