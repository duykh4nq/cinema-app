import React, { useEffect, useState } from "react";
//import css
import "./search.style.scss";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
//import img

import client01 from "../../assets/img/client01.jpg";
import { getAllCineplex, postAllMoviesByCineplex } from "../../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
const Data = [
  {
    date: "9/7/2021",
    details: [
      {
        movie_name: "Bob",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/cinema-app-ea4a7.appspot.com/o/ImageMovie%2Fb_n_tay_di_t_qu__teaser_poster.jpg?alt=media&token=58b21787-ef55-40c9-ba8c-d33c4410ec04",
      },
    ],
  },
];

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
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <div class="ticket-plan-section padding-bottom padding-top">
        <div className="list-booth">
          <h2 className="head">CINEMAS</h2>
          <div className="list">
            {Allcineplex &&
              Allcineplex.map((item, index) => (
                <span className="item" id={item.id} key={index} onClick={getMovies}>
                  {item.name}
                </span>
              ))}
          </div>
        </div>
        <div className="tab">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                More Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
