import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
import { getCinema, getRooms, getMovies } from "../redux/actions/adminActions";

function Tables() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //cineplex
  const _cineplex = useSelector((state) => state.getCinema);
  const { loadingCineplex, errorCineplex, cinema } = _cineplex;
  console.log(`🚀 => file: TableList.js => line 36 => cinema`, cinema);
  React.useEffect(() => {
    dispatch(getCinema());
  }, [dispatch]);

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;
  console.log(`🚀 => file: TableList.js => line 44 => schedule`, schedule);

  const setValueCineplex = (e) => {
    dispatch(getRooms(e));
  };
  const setValueCineplex2 = (e) => {
    dispatch(getMovies(e));
  };

  const setValueCineplex3 = (e) => {
    dispatch(getRooms(e));
    dispatch(getMovies(e));
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
                        ) : (
                          cinema.map((item) => (
                            <tr>
                              <td>{item.name}</td>
                              <td className="text-center">{item.address}</td>
                              <td className="text-center">
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
                              onChange={(e) => setValueCineplex(e.target.value)}
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
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
                          schedule.map((item) => (
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
                              <td className="text-center">
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
                                setValueCineplex2(e.target.value)
                              }
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
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
                          schedule.map((item) => (
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
                              <td className="text-center">
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
                                setValueCineplex3(e.target.value)
                              }
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}
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
                            >
                              {schedule.map((item) => (
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
                            >
                              {schedule.map((item) => (
                                <option>{item.name_movie}</option>
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
                          <th className="text-center">Price</th>
                          <th className="text-center">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loadingCineplex ? (
                          <h2>Loading...</h2>
                        ) : errorCineplex ? (
                          <h2>{errorCineplex}</h2>
                        ) : (
                          cinema.map((item) => (
                            <tr>
                              <td>{item.name}</td>
                              <td className="text-center">{item.name}</td>
                              <td className="text-center">{item.name}</td>
                              <td className="text-center">{item.address}</td>
                              <td className="text-center">
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
            </TabContent>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
