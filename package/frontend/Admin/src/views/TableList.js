/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{ useState } from "react";
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
  Col,TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Input
} from "reactstrap";
import classnames from "classnames";
import "./style.css";
import { getCinema, getRooms ,getAddCineplex,getMovies } from "../redux/actions/adminActions";

function Tables() {
  console.log("chạy List");
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
    dispatch(getCinema());
  }, [dispatch]);

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;
  
  const setValueCineplex = (e) => {
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
              <TabPane tabId="2">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Cinema List</CardTitle>
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
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Vertical size</th>
                          <th>Horizontal size</th>
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
                                <td>{item.vertical_size}</td>
                                <td>{item.horizontal_size}</td>
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
                    <CardTitle tag="h4">Movie List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Image movie</th>
                          <th className="text-center">Premiere date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                          <td className="text-center">$36,738</td>
                        </tr>
                        <tr>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                          <td className="text-center">$23,789</td>
                        </tr>
                        <tr>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                          <td className="text-center">$56,142</td>
                        </tr>
                        <tr>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                          <td className="text-center">$38,735</td>
                        </tr>
                        <tr>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                          <td className="text-center">$63,542</td>
                        </tr>
                        <tr>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                          <td className="text-center">$78,615</td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td>Gloucester</td>
                          <td className="text-center">$98,615</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </TabPane>
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
                          <th>Address</th>
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
                                <td>{item.address}</td>
                                <td className="text-center"><i className="tim-icons icon-simple-remove" /></td>
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
                    <CardTitle tag="h4">Showtime List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Cinema</th>
                          <th>Start time</th>
                          <th>End time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                        </tr>
                        <tr>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td>Sinaai-Waas</td>
                        </tr>
                        <tr>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td>Baileux</td>
                        </tr>
                        <tr>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td>Overland Park</td>
                        </tr>
                        <tr>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td>Feldkirchen in Kärnten</td>
                        </tr>
                        <tr>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td>Gloucester</td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td>Gloucester</td>
                        </tr>
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
