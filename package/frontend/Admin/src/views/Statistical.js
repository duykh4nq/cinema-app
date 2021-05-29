
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import "./style.css";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  revenue
} from "variables/charts.js";
//import Actions

function Statistical(props) {
  const dispatch = useDispatch();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bigChartData, setbigChartData] = React.useState("cineplex");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  //schedule
  // const _statiscal = useSelector((state) => state.getStatiscal);
  // const { loadingStatiscal, errorStatiscal, statiscal } = _statiscal;

  // React.useEffect(() => {
  //   dispatch(getStatiscal());
  // }, [dispatch]);
  return (
    <>
      <div className="content">
        <Row className="row_header">
          <Col xs="3">
            <label>Từ ngày</label>
          <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
          </Col>
          <Col xs="3">
            <label>đến</label>
          <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
          </Col>
          <Col xs="3">
          <label>Chọn cụm rạp</label>
          <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Statistical</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "cineplex",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("cineplex")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Cineplex
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "movie",
                        })}
                        onClick={() => setBgChartData("movie")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Movie
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={revenue[bigChartData]}
                    options={revenue.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Statistical;
