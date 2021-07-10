import React from "react";
//import css
import "./search.style.scss";

//import img
import city from "../../assets/img/city.png";
import cinema from "../../assets/img/cinema.png";
import exp from "../../assets/img/exp.png";
import client01 from "../../assets/img/client01.jpg";

const cineplex = [
  { id: 1, name: "Hung Vuong" },
  { id: 2, name: "Hung Vuong" },
  { id: 3, name: "Hung Vuong" },
  { id: 4, name: "Hung Vuong" },
  { id: 5, name: "Hung Vuong" },
  { id: 6, name: "Hung Vuong" },
  { id: 7, name: "Hung Vuong" },
  { id: 8, name: "Hung Vuong" },
  { id: 9, name: "Hung Vuong" },
  { id: 10, name: "Hung Vuong" },
  { id: 11, name: "Hung Vuong" },
  { id: 12, name: "Hung Vuong" },
  { id: 13, name: "Hung Vuong" },
  { id: 14, name: "Hung Vuong" },
  { id: 15, name: "Hung Vuong" },
  { id: 16, name: "Hung Vuong" },
];

function SearchComponent() {
  const getMovies = (e) => {
    let id = e.target.id;
  };
  return (
    <div>
      <div class="ticket-plan-section padding-bottom padding-top">
        <div className="list-booth">
          <h2 className="head">CINIMAS</h2>
          <div className="list">
            {cineplex &&
              cineplex.map((item, index) => (
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
