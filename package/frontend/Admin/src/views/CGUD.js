import React, { useState } from "react";
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

function CGUD() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Nav tabs>
              <NavItem color="info">
                <NavLink id="TabPane"
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Cineplex
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="TabPane"
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Cinema
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="TabPane"
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Movie
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="TabPane"
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
              <TabPane  tabId="2">
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
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
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
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Name</label>
                            <Input
                              // disabled
                              placeholder="Cineplex"
                              type="text"
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
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Add Cineplex
                    </Button>
                  </CardFooter>
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
                        <Col md="2">
                        <FormGroup>
                            <label>Choose Cineplex</label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </Col>
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
                        <Col md="2">
                          <FormGroup>
                            <label>Cinema</label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="2">
                        <FormGroup>
                            <label>Choose Cineplex</label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Input>
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
