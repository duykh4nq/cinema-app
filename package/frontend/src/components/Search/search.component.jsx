import React from 'react';
//import css
import "./search.style.css";

//import img
import city from "../../assets/img/city.png";
import cinema from "../../assets/img/cinema.png";
import exp from "../../assets/img/exp.png";
import client01 from "../../assets/img/client01.jpg";


function SearchComponent() {
  return (
    <div>
      <section class="book-section bg-one">
        <div class="container">
          <form class="ticket-search-form two">
            <div class="form-group">
              <div class="thumb">
                <img src={city} alt="ticket" />
              </div>
              <span class="type">city</span>
              <select class="select-bar">
                <option value="london">London</option>
                <option value="dhaka">dhaka</option>
                <option value="rosario">rosario</option>
                <option value="madrid">madrid</option>
                <option value="koltaka">kolkata</option>
                <option value="rome">rome</option>
                <option value="khoksa">khoksa</option>
              </select>
            </div>
            <div class="form-group">
              <div class="thumb">
                <img src={cinema} alt="ticket" />
              </div>
              <span class="type">cinema</span>
              <select class="select-bar">
                <option value="Awaken">Awaken</option>
                <option value="Venus">Venus</option>
                <option value="wanted">wanted</option>
                <option value="joker">joker</option>
                <option value="fid">fid</option>
                <option value="kidio">kidio</option>
                <option value="mottus">mottus</option>
              </select>
            </div>
            <div class="form-group">
              <div class="thumb">
                <img src={exp} alt="ticket" />
              </div>
              <span class="type">Experience</span>
              <select class="select-bar">
                <option value="English-2D">English-2D</option>
                <option value="English-3D">English-3D</option>
                <option value="Hindi-2D">Hindi-2D</option>
                <option value="Hindi-3D">Hindi-3D</option>
                <option value="Telegu-2D">Telegu-2D</option>
                <option value="Telegu-3D">Telegu-3D</option>
              </select>
            </div>
          </form>
        </div>
      </section>

      <div class="ticket-plan-section padding-bottom padding-top">
        <div class="container">
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