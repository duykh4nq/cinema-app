import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./home.style.css";
import { getMovies as listMovies } from "../../redux/actions/movieActions";

import "swiper/swiper.min.css";
import SwiperComponent from "../../components/Swiper/SwiperComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const getMovies = useSelector((state) => state.getMovies);
  const { movies } = getMovies;

  var arrData = [];
  if (movies["commingsoon"]) {
    arrData = [
      movies["commingsoon"],
      movies["commingsoon"],
      movies["commingsoon"],
      movies["commingsoon"],
      movies["commingsoon"],
      movies["commingsoon"],
    ];
  }

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);
  return (
    <div class="homepage">
      <section class="movie-section padding-top padding-bottom bg-two">
        <div class="container">
          <div class="row flex-wrap-reverse justify-content-center">
            <div class="col-lg-3 col-sm-10  mt-50 mt-lg-0">
              <div class="widget-1 widget-facility">
                <div class="widget-1-body">
                  <ul>
                    <li>
                      <a href="#0">
                        <span class="img">
<<<<<<< HEAD
                        <img src={`https://firebasestorage.googleapis.com/v0/b/cinema-app-ea4a7.appspot.com/o/ImageMovie%2F3.png?alt=media&token=11c2351d-21d1-477a-89bb-d12779e275b8`} alt="movie" />
=======
                        <img src="./images/sidebar01.png" alt="movie" />
>>>>>>> 3bcaf4ce5b1a7a2f0843dce0ae326d79b5cb92ab
            
                        </span>
                        <span class="cate">24X7 Care</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span class="img">
                          <img src="./images/sidebar02.png" alt="sidebar" />
                        </span>
                        <span class="cate">100% Assurance</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span class="img">
                          <img src="./images/sidebar03.png" alt="sidebar" />
                        </span>
                        <span class="cate">Our Promise</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget-1 widget-banner">
                <div class="widget-1-body">
                  <a href="#0">
                    <img src="./images/banner01.jpg" alt="banner" />
                  </a>
                </div>
              </div>
              <div class="widget-1 widget-trending-search">
                <h3 class="title">Trending Searches</h3>
                <div class="widget-1-body">
                  <ul>
                    <li>
                      <h6 class="sub-title">
                        <a href="#0">mars</a>
                      </h6>
                      <p>Movies</p>
                    </li>
                    <li>
                      <h6 class="sub-title">
                        <a href="#0">alone</a>
                      </h6>
                      <p>Movies</p>
                    </li>
                    <li>
                      <h6 class="sub-title">
                        <a href="#0">music event</a>
                      </h6>
                      <p>event</p>
                    </li>
                    <li>
                      <h6 class="sub-title">
                        <a href="#0">NBA Games 2020</a>
                      </h6>
                      <p>Sports</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="widget-1 widget-banner">
                <div class="widget-1-body">
                  <a href="#0">
                    <img src="./images/banner02.jpg" alt="banner" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="article-section padding-bottom">
                <div class="section-header-1">
                  <h2 class="title">movies</h2>
                  <a class="view-all" href="movie-grid.html">
                    View All
                    </a>
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
