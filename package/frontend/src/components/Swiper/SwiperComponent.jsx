import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SwiperComponent.propTypes = {};

function SwiperComponent(props) {
  console.log(
    "🚀 ~ file: SwiperComponent.jsx ~ line 7 ~ props",
    props.item[0].poster
  );
  return (
    <div className="swipercomponent">
      {props.item.map((product) => (
        <div class="movie-grid">
          <div class="movie-thumb c-thumb">
            <a href="#0">
              <img src={product.poster} alt="movie" />
            </a>
          </div>
          <div class="movie-content bg-one">
            <h5 class="title m-0">
              <Link to={`detail/${product.slug}`}>{product.name_movie}</Link>
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
