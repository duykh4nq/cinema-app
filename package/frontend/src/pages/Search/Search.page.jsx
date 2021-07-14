import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import classnames from "classnames";

//import css
import "./search.style.scss";

//import actions
import { getAllCineplex, postAllMoviesByCineplex } from "../../redux/actions/movieActions";

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
  const userLoggedIn = useSelector((state) => state.users.loggedIn);
  const { Allcineplex } = useSelector((state) => state.AllCineplex);
  const { MoviesByCineplex } = useSelector((state) => state.AllMoviesByCineplex);
  const [NameCineplex, setNameCineplex] = useState("");
  let movies =
    MoviesByCineplex !== undefined && MoviesByCineplex.length > 0
      ? MoviesByCineplex.filter((x) => x.details.length > 0)
      : [];
  const getMovies = (e) => {
    let id = e.target.id;
    let Cineplex = e.target.innerText;
    setNameCineplex(Cineplex);
    dispatch(postAllMoviesByCineplex(id));
  };

  const [activeTab, setActiveTab] = useState("0");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //booking
  const handleProceed = (valueDay, category, time, movies) => {
  console.log(`🚀 => file: Search.page.jsx => line 64 => movies`, movies)
  console.log(`🚀 => file: Search.page.jsx => line 64 => time`, time)
  console.log(`🚀 => file: Search.page.jsx => line 64 => category`, category)
  console.log(`🚀 => file: Search.page.jsx => line 64 => valueDay`, valueDay)
  console.log(`🚀 => file: Search.page.jsx => line 69 => NameCineplex`, NameCineplex)
    if (time && category && valueDay && movies && NameCineplex) {
      sessionStorage.setItem("day", JSON.stringify(valueDay));
      sessionStorage.setItem("category", JSON.stringify(category));
      sessionStorage.setItem("time", JSON.stringify(time));
      sessionStorage.setItem("valueCineplex", JSON.stringify(NameCineplex));
      sessionStorage.setItem("movies", JSON.stringify(movies));
      if(!userLoggedIn) alert("You need to login 😅");
    } else {
      alert("You need to login 😅");
    }
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
                                      <Link to={`detail/${subItem.slug}`}>
                                        <img src={subItem.poster} alt="img_movie" />
                                      </Link>
                                    </div>
                                    <div class="movie-info">
                                      <Link to={`detail/${subItem.slug}`}>
                                        {" "}
                                        <p class="name">{subItem.movie_name}</p>
                                      </Link>

                                      {subItem.cate.length > 0 &&
                                        subItem.cate.map((cate, idx) => (
                                          <>
                                            <span key={idx}>
                                              {subItem.cate.length > 0 && cate.name_cate} Phụ đề Việt
                                            </span>
                                            <div className="movie-schedule">
                                              {cate.schedule_detail.length > 0 &&
                                                cate.schedule_detail.map((child, idn) => (
                                                  <div key={idn} class="item">
                                                    <Link
                                                      to={userLoggedIn?`/booking/${subItem.slug}`:'/search'}
                                                      onClick={() => handleProceed(item.date, cate, child, subItem)}
                                                    >
                                                      {child.time_start}
                                                    </Link>
                                                  </div>
                                                ))}
                                            </div>
                                          </>
                                        ))}
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