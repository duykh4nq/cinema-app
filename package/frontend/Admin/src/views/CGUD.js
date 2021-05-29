import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.css";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col,
  CardFooter,
  Form,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import classnames from "classnames";

//import Actions
import {
  getCinema,
  getRooms ,
  getAddCineplex,
  getMovies,
} from "../redux/actions/adminActions";

function CGUD(props) {
  const myArr = [
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const dispatch = useDispatch();
  const [name_cineplex, setCineplex] = React.useState("");
  const [address_cineplex, setAddressCineplex] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //cineplex
  const  _cineplex = useSelector((state) => state.getCinema);
  const { loadingCineplex, errorCineplex, cinema } = _cineplex;

  React.useEffect(() => {
    dispatch(getCinema());
  }, [dispatch]);

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;

  const setValueCineplex = (e) => {
    dispatch(getRooms(e));
    dispatch(getMovies(e));
  };


  //add cineplex
  const addCineplexHandler = (e) => {
    e.preventDefault();
    setAddressCineplex(e.target.reset());
    setCineplex(e.target.reset());
    dispatch(getAddCineplex(name_cineplex, address_cineplex));
    dispatch(getCinema());
  console.log(`🚀 => file: CGUD.js => line 94 => _cineplex`, _cineplex)
  };

  //add Img
  
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
    console.log(`🚀 => file: CGUD.js => line 108 => _cineplex`, _cineplex)
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
              <TabPane tabId="2">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Cinema</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
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
                                  setValueCineplex(e.target.value)
                                }
                              >
                                {cinema.map((item) => (
                                  <option value={item.id}>{item.name}</option>
                                ))}
                              </Input>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label>Name</label>
                            <Input
                              // disabled
                              placeholder="Cinema"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="2">
                          <FormGroup>
                            <label>Horizontal Size</label>
                            <div className="input_size">
                              <Input
                                id="size_disabled"
                                placeholder="Chiều ngang"
                                type="text"
                                value="1"
                                disabled
                              />
                              <Input
                                id="size_select"
                                placeholder="Chiều ngang"
                                type="select"
                              >
                                {(function (rows, i, len) {
                                  while (++i <= len) {
                                    rows.push(<option>{i}</option>);
                                  }
                                  return rows;
                                })([], 1, 9)}
                              </Input>
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <label>Vertical Size</label>
                            <div className="input_size">
                              <Input
                                id="size_disabled"
                                placeholder="Chiều dọc"
                                type="text"
                                value="A"
                                disabled
                              />
                              <Input
                                id="size_select"
                                placeholder="Chiều dọc"
                                type="select"
                              >
                                {myArr.map((item, i) => <option key={item + i}>{item}</option>)}
                              </Input>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Add Cinema
                    </Button>
                  </CardFooter>
                </Card>
              </TabPane>
              <TabPane tabId="1">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Cineplex</h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={(e) => addCineplexHandler(e)}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Name</label>
                            <Input
                              // disabled
                              placeholder="Cineplex"
                              type="text"
                              value={name_cineplex}
                              onChange={(e) => setCineplex(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <label>Address</label>
                            <Input
                              type="text"
                              placeholder="Address Cineplex"
                              value={address_cineplex}
                              onChange={(e) =>
                                setAddressCineplex(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <Button
                            className="btn-fill"
                            color="primary"
                            type="submit"
                          >
                            Add Cineplex
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="3">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Movie</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Name</label>
                            <Input placeholder="Name" type="text" />
                          </FormGroup>
                        </Col>
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
                                  setValueCineplex(e.target.value)
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
                            <label>Choose Cinema</label>
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
                                  <option value={item.id}>{item.name_room}</option>
                                ))}
                              </Input>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Time</label>
                            <Input
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Premiere date</label>
                            <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <label for="exampleFile">Image movie</label>
                            <Input
                              type="file"
                              name="file"
                              id="fileupload" 
                              placeholder="date placeholder"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Add Movie
                    </Button>
                  </CardFooter>
                </Card>
              </TabPane>
              <TabPane tabId="4">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Showtime</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
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
                                  setValueCineplex(e.target.value)
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
                                  <option value={item.id}>{item.name_room}</option>
                                ))}
                              </Input>
                            )}
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col md="6">
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
                      <Row>
                      <Col md="3">
                          <FormGroup>
                            <label>Premiere date</label>
                            <Input
                              type="date"
                              name="date"
                              id="exampleDate"
                              placeholder="date placeholder"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Start Time</label>
                            <Input
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                            />
                          </FormGroup>
                        </Col>

                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Add Showtime
                    </Button>
                  </CardFooter>
                </Card>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CGUD;
