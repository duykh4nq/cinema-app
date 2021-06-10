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
import { revenue } from "variables/charts.js";
//import Actions
//import Actions
import {
  getCinema,
  getMovies,
  postStatiscalForCineplex,
} from "../redux/actions/adminActions";

function Statistical(props) {
  const dispatch = useDispatch();
  //cineplex
  const _cineplex = useSelector((state) => state.getCinema);
  const { cinema } = _cineplex;

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;

  const setValueCineplex = (e) => {
    dispatch(getMovies(e));
  };

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [bigChartData, setbigChartData] = React.useState("cineplex");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  React.useEffect(() => {
    dispatch(getCinema());
    dispatch(postStatiscalForCineplex(start, end));
  }, [dispatch, start, end]);

  let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };

  let revenue = {
    cineplex: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: cinema.map((item) => item.name),
        datasets: [
          {
            label: "Total",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          },
        ],
      };
    },
    movie: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: schedule.map((item) => item.name),
        datasets: [
          {
            label: "Total",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 150],
          },
        ],
      };
    },

    options: chart1_2_options,
  };

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
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </Col>
          <Col xs="3">
            <label>đến</label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
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
                <div className="chart-area"></div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Statistical;
