import React from "react";
import { useDispatch, useSelector } from "react-redux";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Input,
} from "reactstrap";
import classnames from "classnames";
import "./style.css";
import {
  getCinema,
  getSchedule,
  getAllShowtime,
  deleteRooms,
  deleteShowtime,
  deleteCineplexs,
  deleteMovies,
} from "../redux/actions/adminActions";

function Tables() {
  const dispatch = useDispatch();
  const [valuemovie, setMovie] = React.useState(null);
  const [valueCinema, setCinema] = React.useState(null);

  const [id_cineplex, setId_cineplex] = React.useState(null);
  console.log(
    `🚀 => file: TableList.js => line 39 => id_cineplex`,
    id_cineplex
  );

  const [delRoom, setDelRom] = React.useState(null);
  const [delShowtime, setDelShowtime] = React.useState(null);
  const [delCineplex, setDelCineplex] = React.useState(null);
  const [delMovie, setDelMovie] = React.useState(null);

  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setId_cineplex(null);
    }
  };

  //cineplex
  const _cineplex = useSelector((state) => state.getCinema);
  const { loadingCineplex, errorCineplex, cinema } = _cineplex;

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;
  console.log(`🚀 => file: TableList.js => line 86 => schedule`, schedule);

  React.useEffect(() => {
    if (id_cineplex === null) dispatch(getCinema());
    if (
      cinema.length > 0 &&
      id_cineplex === null &&
      valueCinema === null &&
      valuemovie === null
    ) {
      console.log("hahahahah");
      dispatch(getSchedule(cinema[0].id));
    }

    //delete
    if (valuemovie && valueCinema && delShowtime === null)
      dispatch(getAllShowtime(valuemovie, valueCinema));
    if (delRoom) dispatch(deleteRooms(delRoom, id_cineplex));
    if (delShowtime)
      dispatch(deleteShowtime(delShowtime, valuemovie, valueCinema));
    if (delCineplex) dispatch(deleteCineplexs(delCineplex));
    if (delMovie) dispatch(deleteMovies(delMovie, id_cineplex));
  }, [
    dispatch,
    valuemovie,
    valueCinema,
    delRoom,
    delShowtime,
    id_cineplex,
    delCineplex,
    delMovie,
    activeTab,
  ]);

  if (
    cinema.length > 0 &&
    id_cineplex === null &&
    valueCinema === null &&
    valuemovie === null &&
    schedule.rooms &&
    schedule.movies
  ) {
    setCinema(schedule.rooms[0].id);
    setMovie(schedule.movies[0].id);
  }

  const setValueCineplexInRoom = (e) => {
    setId_cineplex(e);
    dispatch(getSchedule(e));
  };
  const setValueCineplexInMovie = (e) => {
    setId_cineplex(e);
    dispatch(getSchedule(e));
  };

  const setValueCineplexInShowtime = (e) => {
    setDelCineplex(null);
    setDelMovie(null);
    setDelRom(null);
    setId_cineplex(e);
    dispatch(getSchedule(e));
  };

  //schedule
  const _showtime = useSelector((state) => state.getAllShowtime);
  const showtime = _showtime.data;

  const setValueMovie = (e) => {
    setMovie(e);
  };

  const setValueCinema = (e) => {
    setCinema(e);
  };

  //delete Cinema
  const deleteCinema = (id_room) => {
    setDelRom(id_room);
  };

  const deleteShowTime = (id_showtime) => {
    setDelShowtime(id_showtime);
  };

  const deleteCineplex = (id_cineplex) => {
    setDelCineplex(id_cineplex);
  };

  const deleteMovie = (id_movie) => {
    setDelMovie(id_movie);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Nav tabs>
              <NavItem color="info">
                <NavLink
                  id="TabPane"
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Cineplex
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="TabPane"
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Cinema
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="TabPane"
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Movie
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  id="TabPane"
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Showtime
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Cineplex List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th className="text-center">Address</th>
                          <th className="text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingCineplex ? (
                          <h2>Loading...</h2>
                        ) : errorCineplex ? (
                          <h2>{errorCineplex}</h2>
                        ) : cinema.length > 0 ? (
                          cinema?.map((item) => (
                            <tr>
                              <td>{item.name}</td>
                              <td className="text-center">{item.address}</td>
                              <td
                                className="text-center"
                                onClick={() => deleteCineplex(item.id)}
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </td>
                            </tr>
                          ))
                        ) : (
                          0
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="2">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label>Choose Cineplex</label>
                          {loadingCineplex ? (
                            <h2>Loading...</h2>
                          ) : errorCineplex ? (
                            <h2>{errorCineplex}</h2>
                          ) : (
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) =>
                                setValueCineplexInRoom(e.target.value)
                              }
                            >
                              {cinema.length > 0
                                ? cinema?.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                  ))
                                : 0}
                            </Input>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <CardTitle md="9" tag="h4">
                      Cinema List
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th className="text-center">Category</th>
                          <th className="text-center">Vertical size</th>
                          <th className="text-center">Horizontal size</th>
                          <th className="text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingSchedule ? (
                          <h2>Loading...</h2>
                        ) : errorSchedule ? (
                          <h2>{errorSchedule}</h2>
                        ) : (
                          schedule?.rooms?.map((item) => (
                            <tr>
                              <td>{item.name_room}</td>
                              {item.id_category_room === 1 ? (
                                <td className="text-center">2D</td>
                              ) : item.id_category_room === 2 ? (
                                <td className="text-center">3D</td>
                              ) : (
                                <td className="text-center">4DMAX</td>
                              )}
                              <td className="text-center">
                                {item.vertical_size}
                              </td>
                              <td className="text-center">
                                {item.horizontal_size}
                              </td>
                              <td
                                className="text-center"
                                onClick={() => deleteCinema(item.id)}
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="3">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label>Choose Cineplex</label>
                          {loadingCineplex ? (
                            <h2>Loading...</h2>
                          ) : errorCineplex ? (
                            <h2>{errorCineplex}</h2>
                          ) : (
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) =>
                                setValueCineplexInMovie(e.target.value)
                              }
                            >
                              {cinema.length > 0
                                ? cinema?.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                  ))
                                : 0}
                            </Input>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <CardTitle tag="h4">Movie List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th className="text-center">Time</th>
                          <th className="text-center">Release date</th>
                          <th className="text-center">Poster</th>
                          <th className="text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingSchedule ? (
                          <h2>Loading...</h2>
                        ) : errorSchedule ? (
                          <h2>{errorSchedule}</h2>
                        ) : (
                          schedule?.movies?.map((item) => (
                            <tr>
                              <td>{item.name_movie}</td>
                              <td className="text-center">{item.time} phút</td>
                              <td className="text-center">
                                {item.release_date}
                              </td>
                              <td className="text-center">
                                <img
                                  className="poster_movie"
                                  src={item.poster}
                                  alt={item.slug}
                                ></img>
                              </td>
                              <td
                                className="text-center"
                                onClick={() => deleteMovie(item.id)}
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="4">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label>Choose Cineplex</label>
                          {loadingCineplex ? (
                            <h2>Loading...</h2>
                          ) : errorCineplex ? (
                            <h2>{errorCineplex}</h2>
                          ) : (
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) =>
                                setValueCineplexInShowtime(e.target.value)
                              }
                            >
                              {cinema.length > 0
                                ? cinema?.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                  ))
                                : 0}
                            </Input>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Cinema</label>
                          {loadingSchedule ? (
                            <h2>Loading...</h2>
                          ) : errorSchedule ? (
                            <h2>{errorSchedule}</h2>
                          ) : (
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) => setValueCinema(e.target.value)}
                            >
                              {schedule?.rooms?.map((item) => (
                                <option value={item.id}>
                                  {item.name_room}
                                </option>
                              ))}
                            </Input>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="5">
                        <FormGroup>
                          <label>Choose Movie</label>
                          {loadingSchedule ? (
                            <h2>Loading...</h2>
                          ) : errorSchedule ? (
                            <h2>{errorSchedule}</h2>
                          ) : (
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) => setValueMovie(e.target.value)}
                            >
                              {schedule?.movies?.map((item) => (
                                <option value={item.id}>
                                  {item.name_movie}
                                </option>
                              ))}
                            </Input>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <CardTitle tag="h4">Showtime List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Id showtime</th>
                          <th className="text-center">Premiere date</th>
                          <th className="text-center">Start time</th>
                          <th className="text-center">Price (đ)</th>
                          <th className="text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showtime.length > 0 ? (
                          showtime.map((item) => (
                            <tr>
                              <td>{item.id}</td>
                              <td className="text-center">
                                {item.time.premiere_date}
                              </td>
                              <td className="text-center">
                                {item.time.start_time}
                              </td>
                              <td className="text-center">{item.price}</td>
                              <td
                                className="text-center"
                                onClick={() => deleteShowTime(item.id)}
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p>Không có xuất chiếu nào!</p>
                        )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
