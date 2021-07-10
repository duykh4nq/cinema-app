import React, { useEffect } from "react";
//import css
import "./search.style.scss";

//import img
import city from "../../assets/img/city.png";
import cinema from "../../assets/img/cinema.png";
import exp from "../../assets/img/exp.png";
import client01 from "../../assets/img/client01.jpg";
import { getAllCineplex, postAllMoviesByCineplex } from "../../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";

function SearchComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCineplex());
  }, [dispatch]);
  const { Allcineplex } = useSelector((state) => state.AllCineplex);
  const { MoviesByCineplex } = useSelector((state) => state.AllMoviesByCineplex);
  console.log("🚀 ~ file: Search.page.jsx ~ line 21 ~ SearchComponent ~ MoviesByCineplex", MoviesByCineplex);
  const getMovies = (e) => {
    let id = e.target.id;
    dispatch(postAllMoviesByCineplex(id));
  };
  return (
    <div>
      <div class="ticket-plan-section padding-bottom padding-top">
        <div className="list-booth">
          <h2 className="head">CINIMAS</h2>
          <div className="list">
            {Allcineplex &&
              Allcineplex.map((item, index) => (
                <span className="item" id={item.id} key={index} onClick={getMovies}>
                  {item.name}
                </span>
              ))}
          </div>
        </div>
        <div class="container movie">
          <div class="row justify-content-center">
            <div class="col-lg-12 mb-5 mb-lg-0">
              <ul class="seat-plan-wrapper bg-five">
                <li>
                  <div class="movie-name">
                    <img src={client01} alt="img_movie" />
                  </div>
                  <div class="movie-info">
                    <p class="name">Genesis Cinema</p>
                    <span>2D Phụ Đề Việt</span>
                    <div className="movie-schedule">
                      <div class="item">09:40</div>
                      <div class="item">13:45</div>
                      <div class="item">15:45</div>
                      <div class="item">19:50</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="movie-name">
                    <img src={client01} alt="img_movie" />
                  </div>
                  <div class="movie-info">
                    <p class="name">Genesis Cinema</p>
                    <span>2D Phụ Đề Việt</span>
                    <div className="movie-schedule">
                      <div class="item">09:40</div>
                      <div class="item">13:45</div>
                      <div class="item">15:45</div>
                      <div class="item">19:50</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="movie-name">
                    <img src={client01} alt="img_movie" />
                  </div>
                  <div class="movie-info">
                    <p class="name">Genesis Cinema</p>
                    <span>2D Phụ Đề Việt</span>
                    <div className="movie-schedule">
                      <div class="item">09:40</div>
                      <div class="item">13:45</div>
                      <div class="item">15:45</div>
                      <div class="item">19:50</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="movie-name">
                    <img src={client01} alt="img_movie" />
                  </div>
                  <div class="movie-info">
                    <p class="name">Genesis Cinema</p>
                    <span>2D Phụ Đề Việt</span>
                    <div className="movie-schedule">
                      <div class="item">09:40</div>
                      <div class="item">13:45</div>
                      <div class="item">15:45</div>
                      <div class="item">19:50</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
