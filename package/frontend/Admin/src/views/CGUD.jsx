import React from "react";
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
  NavLink,
  FormText,
} from "reactstrap";
import classnames from "classnames";

//import Actions
import { getCinema as listCinema } from "../redux/actions/adminActions";
import { getSchedule} from "../redux/actions/adminActions";
import { getAddCineplex} from "../redux/actions/adminActions";

function CGUD() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name_cineplex, setCineplex] = React.useState("");
  const [address_cineplex, setAddressCineplex] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //cineplex
  const _cineplex = useSelector((state) => state.getCinema);
  const { loadingCineplex, errorCineplex, cinema } = _cineplex;
  React.useEffect(() => {
    dispatch(listCinema());
  }, [dispatch]);

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;
  
  const setValueCineplex = (e) => {
    dispatch(getSchedule(e-1));
  };

  //add cineplex
  const addCineplexHandler = (e) => {
    e.preventDefault();
    listCinema();
    dispatch(getAddCineplex(name_cineplex,address_cineplex));
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
              <TabPane tabId="2">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Cinema</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
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
                        <Col md="3">
                          <FormGroup>
                            <label>Seat configuration</label>
                            <Input placeholder="Cấu hình ghế" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Choose Cineplex</label>
                            {loadingCineplex ? (
                              <h2>Loading...</h2>
                            ) : errorCineplex ? (
                              <h2>{errorCineplex}</h2>
                            ) : (<Input
                              type="select"
                              name="select"
                              id="exampleSelect" onChange={(e) => setValueCineplex(e.target.value)} 
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}</Input>)}
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
                              type="textarea"
                              name="text"
                              id="exampleText"
                              value={address_cineplex}
              onChange={(e) => setAddressCineplex(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row><Col md="3">
                      <Button className="btn-fill" color="primary" type="submit">
                      Add Cineplex
                    </Button></Col>
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
                            ) : (<Input
                              type="select"
                              name="select"
                              id="exampleSelect" onChange={(e) => setValueCineplex(e.target.value)} 
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}</Input>)}
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Choose Cinema</label>
                            {loadingSchedule ? (
                              <h2>Loading...</h2>
                            ) : errorSchedule ? (
                              <h2>{errorSchedule}</h2>
                            ) : (<Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              {schedule.map((item) => (
                                <option>{item.name_room}</option>
                              ))}</Input>)}
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
                              id="exampleFile"
                              placeholder="date placeholder"
                            />
                            <FormText color="muted">
                              This is some placeholder block-level help text for
                              the above input. It's a bit lighter and easily
                              wraps to a new line.
                            </FormText>
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
                              id="exampleSelect" onChange={(e) => setValueCineplex(e.target.value)} 
                            >
                              {cinema.map((item) => (
                                <option value={item.id}>{item.name}</option>
                              ))}</Input>
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
                            ) : (<Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              {schedule.map((item) => (
                                <option>{item.name_room}</option>
                              ))}</Input>)}
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label>Choose Movie</label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >

                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row><Col md="3">
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
                        <Col md="3">
                          <FormGroup>
                            <label>End Time</label>
                            <Input
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                            />
                          </FormGroup>
                        </Col></Row>
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
