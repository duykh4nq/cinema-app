import React from "react";
import PropTypes from "prop-types";

SwiperComponent.propTypes = {};

function SwiperComponent(props) {
  return (
    <div className="swipercomponent">
      {props.item.map((product) => (
        <div class="movie-grid">
          <div class="movie-thumb c-thumb">
            <a href="#0">
              <img src={`./images/${product.poster}.jpg`} alt="movie" />
            </a>
          </div>
          <div class="movie-content bg-one">
            <h5 class="title m-0">
              <a href="#0">{product.name_movie}</a>
            </h5>
            <ul class="movie-rating-percent">
              <li>
                <span class="content">{product.time}</span>
              </li>
              <li>
                <span class="content">{product.release_date}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SwiperComponent;
