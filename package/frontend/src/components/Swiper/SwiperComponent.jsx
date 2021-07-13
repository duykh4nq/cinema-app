import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Swiper.scss";
SwiperComponent.propTypes = {};

function SwiperComponent({ movie }) {
  return (
    <div className="swipercomponent">
      {movie && (
        <div class="movie-grid">
          <div class="movie-thumb c-thumb">
            <Link to={`detail/${movie.slug}`}>
              <img src={movie.poster} alt="movie" />
            </Link>
          </div>
          <div class="movie-content bg-one">
            <h5 class="title m-0">
              <Link to={`detail/${movie.slug}`}>{movie.name_movie}</Link>
            </h5>
            <ul class="movie-rating-percent">
              <li>
                <span class="content">Time: {movie.time}</span>
              </li>
              <li>
                <span class="content">{movie.release_date}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwiperComponent;
