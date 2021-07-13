import React, { useEffect, useState } from "react";
//import css
import "./search.style.scss";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
//import img

import client01 from "../../assets/img/client01.jpg";
import { getAllCineplex, postAllMoviesByCineplex } from "../../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Data = [
  {
    date: "10/07/2021",
    details: [
      {
        id_movie: 167,
        movie_name: "PALM SPRINGS: MỞ MẮT THẤY HÔM QUA",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/cinema-app-ea4a7.appspot.com/o/ImageMovie%2FPalm_Springs_M%E1%BB%9F_m%E1%BA%AFt_th%E1%BA%A5y_h%C3%B4m_qua_poster.jpg?alt=media&token=86e2e3f8-fe30-40eb-b645-893501407484",
        cate: [
          {
            id_cate: 79,
            name_cate: "3D",
            schedule_detail: [
              {
                id_schedule: 2,
                time: "21:00",
              },
            ],
          },
        ],
      },
      {
        id_movie: 36,
        movie_name: "NGƯỜI NHÂN BẢN",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/cinema-app-ea4a7.appspot.com/o/ImageMovie%2Fngang-3-16184129931631178967046.jpg?alt=media&token=5d4ed045-c34a-4fd4-8d08-4b6d708b282c",
        cate: [
          {
            id_cate: 78,
            name_cate: "2D",
            schedule_detail: [
              {
                id_schedule: 4,
                time: "17:00",
              },
              {
                id_schedule: 1,
                time: "21:00",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "11/07/2021",
    details: [],
  },
  {
    date: "12/07/2021",
    details: [],
  },
  {
    date: "13/07/2021",
    details: [],
  },
  {
    date: "14/07/2021",
    details: [],
  },
  {
    date: "15/07/2021",
    details: [],
  },
  {
    date: "16/07/2021",
    details: [
      {
        id_movie: 36,
        movie_name: "NGƯỜI NHÂN BẢN",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/cinema-app-ea4a7.appspot.com/o/ImageMovie%2Fngang-3-16184129931631178967046.jpg?alt=media&token=5d4ed045-c34a-4fd4-8d08-4b6d708b282c",
        cate: [
          {
            id_cate: 78,
            name_cate: "2D",
            schedule_detail: [
              {
                id_schedule: 3,
                time: "11:00",
              },
            ],
          },
        ],
      },
    ],
  },
];
//convert date
const getDate = (day) => {
  var parts = day.split("/");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
  return mydate;
};
const days = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" };
const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
function SearchComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCineplex());
  }, [dispatch]);
  const { Allcineplex } = useSelector((state) => state.AllCineplex);
  const { MoviesByCineplex } = useSelector((state) => state.AllMoviesByCineplex);
  let movies =
    MoviesByCineplex !== undefined && MoviesByCineplex.length > 0
      ? MoviesByCineplex.filter((x) => x.details.length > 0)
      : [];
  console.log("🚀 ~ file: Search.page.jsx ~ line 133 ~ SearchComponent ~ movies", movies);
  const getMovies = (e) => {
    let id = e.target.id;
    dispatch(postAllMoviesByCineplex(id));
  };
  const [activeTab, setActiveTab] = useState("0");

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
            {movies.length > 0 &&
              movies.map(
                (item, index) =>
                  item.details.length > 0 && (
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === `${index}` })}
                        onClick={() => {
                          toggle(`${index}`);
                        }}
                      >
                        <div className="tab-content">
                          <div className="content">
                            <div className="tab-left">
                              <p className="month">{months[getDate(item.date).getMonth()]}</p>
                              <p className="sort">{days[getDate(item.date).getDay()]}</p>
                            </div>
                            <div className="tab-right">
                              <p className="days">{getDate(item.date).getDate()}</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                  )
              )}
          </Nav>
          <TabContent activeTab={activeTab}>
            {movies.length > 0 &&
              movies.map(
                (item, index) =>
                  item.details.length > 0 &&
                  item.details.map((subItem, indx) => (
                    <TabPane key={indx} tabId={`${index}`}>
                      <Row>
                        <Col sm="12">
                          <div class="container movie">
                            <div class="row justify-content-center">
                              <div class="col-lg-12 mb-5 mb-lg-0">
                                <ul class="seat-plan-wrapper bg-five">
                                  <li>
                                    <div class="movie-name">
                                      <Link to={`detail/${subItem.id_movie}`}>
                                        <img src={subItem.poster} alt="img_movie" />
                                      </Link>
                                    </div>
                                    <div class="movie-info">
                                      <Link to={`detail/${subItem.id_movie}`}>
                                        {" "}
                                        <p class="name">{subItem.movie_name}</p>
                                      </Link>

                                      <span>{subItem.cate.length > 0 && subItem.cate[0].name_cate} Phụ đề Việt</span>

                                      <div className="movie-schedule">
                                        {subItem.cate.length > 0 &&
                                          subItem.cate[0].schedule_detail.length > 0 &&
                                          subItem.cate[0].schedule_detail.map((child, ind) => (
                                            <div key={ind} class="item">
                                              {child.time}
                                            </div>
                                          ))}
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
                  ))
              )}
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
