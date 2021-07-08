import React, { Component } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { storage } from "../firebase";
// nodejs library that concatenates classes
import classNames from "classnames";
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
  Form,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  ButtonGroup,
} from "reactstrap";
import classnames from "classnames";

//import Actions
import {
  getCinema,
  getRooms,
  getMovie,
  getMovies,
  getAddCineplex,
  getAddRoom,
  getAddMovie,
  getAddShowtime,
} from "../redux/actions/adminActions";

function CGUD() {
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

  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //cineplex
  const _cineplex = useSelector((state) => state.getCinema);
  const { loadingCineplex, errorCineplex, cinema } = _cineplex;

  React.useEffect(() => {
    dispatch(getCinema());
    dispatch(getMovie());
  }, [dispatch, selectStatus]);

  //schedule
  const _schedule = useSelector((state) => state.getSchedule);
  const { loadingSchedule, errorSchedule, schedule } = _schedule;

  const setValueCineplex = (e) => {
    console.log(`🚀 => file: CGUD.js => line 93 => e`, e);
    dispatch(getRooms(e));
    dispatch(getMovies(e));
  };

  //add cineplex
  const [name_cineplex, setCineplex] = React.useState("");
  const [address_cineplex, setAddressCineplex] = React.useState("");

  const addCineplexHandler = (e) => {
    e.preventDefault();
    setAddressCineplex(e.target.reset());
    setCineplex(e.target.reset());
    dispatch(getAddCineplex(name_cineplex, address_cineplex));
  };

  //add cinema
  const [name_room, setNameRoom] = React.useState("");
  const [horizontal, setHorizontal] = React.useState(2);
  const [vertical, setVertical] = React.useState("B");
  const [id_cineplex, setId_cineplex] = React.useState(null);
  const [id_categoryRoom, setId_categoryRoom] = React.useState(1);

  const addCinemaHandler = (e) => {
    e.preventDefault();
    setNameRoom(e.target.reset());
    setHorizontal(e.target.reset());
    setVertical(e.target.reset());
    dispatch(
      getAddRoom(id_cineplex, name_room, horizontal, vertical, id_categoryRoom)
    );
  };

  //select
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      fontSize: 12,
      color: "#2b3553",
      border: "1px solid #2b3553",
      paddingLeft: 9,
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "gray",
        fontSize: 12,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
      };
    },
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  //cineplex
  const [disabled, setDisabled] = React.useState("");
  const _movie = useSelector((state) => state.getMovie);
  const { movie } = _movie;
  const [dataCineplexs, setDataCineplexs] = React.useState(cinema);

  const setValueMovie = (e) => {
    setDisabled("disabled");
    setDataCineplexs(cinema);
    movie.forEach((item) => {
      if (e.value == item.id_movie) {
        setRelease_date(item.release_date);
        setTime(item.time);
        setImgData(item.poster);
        setPoster(item.poster);
        setDataCineplexs(item.cineplexs);
        setName_movie(item.name_movie);
      }
    });
  };

  //add movie
  const [selectStatus, setSelectStatus] = React.useState("new");
  const setValueStatus = (name) => {
    if (selectStatus == "old") {
      setDisabled("");
      setRelease_date("");
      setTime("");
      setPoster("");
      setImgData("");
      setName_movie("");
      setDataCineplexs(cinema);
    }
    setSelectStatus(name);
  };
  //add Img
  const [imgData, setImgData] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const check = file.name.match(/\.(jpg|jepg|png|gif)$/);
      if (check) {
        setImage(file);
        setImgData(URL.createObjectURL(file));
      }
    }
  };

  const [name_movie, setName_movie] = React.useState("");
  const [time, setTime] = React.useState("");
  const [release_date, setRelease_date] = React.useState("");
  const [poster, setPoster] = React.useState("");

  const refImg = React.useRef(null);

  const addMovieHandler = (e) => {
    e.preventDefault();
    if (poster === null) {
      console.log(image);
      return;
    }
    if (id_cineplex !== undefined) {
      if (image !== null) {
        const updateTask = storage.ref(`ImageMovie/${image.name}`).put(image);
        updateTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => console.log("firebase", error),
          async () => {
            const res = await storage
              .ref("ImageMovie")
              .child(image.name)
              .getDownloadURL();
            refImg.current = res;

            setId_cineplex(e.target.reset());
            setImgData(e.target.reset());
            setTime(e.target.reset());
            setRelease_date(e.target.reset());
            setName_movie(e.target.reset());
            dispatch(
              getAddMovie(
                id_cineplex,
                name_movie,
                time,
                release_date,
                refImg.current
              )
            );
          }
        );
      } else {
        setId_cineplex(e.target.reset());
        setImgData(e.target.reset());
        setTime(e.target.reset());
        setRelease_date(e.target.reset());
        setName_movie(e.target.reset());
        dispatch(
          getAddMovie(id_cineplex, name_movie, time, release_date, poster)
        );
      }
    } else {
      alert("Please choose cineplexs 👐!");
    }
  };

  //add showtime
  const [id_room, setId_room] = React.useState("");
  const [id_movie, setId_movie] = React.useState("");
  const [date, setDate] = React.useState("");
  const [start_time, setStart_time] = React.useState("");
  const [price, setPrice] = React.useState("");

  const addShowtimeHandler = (e) => {
    e.preventDefault();
    if (start_time == "" || price == undefined || date == undefined) {
      alert("Please enter full data!!!");
      setId_room(e.target.reset());
      setId_movie(e.target.reset());
      setDate(e.target.reset());
      setStart_time(e.target.reset());
      setPrice(e.target.reset());
    } else {
      setId_room(e.target.reset());
      setId_movie(e.target.reset());
      setDate(e.target.reset());
      setStart_time(e.target.reset());
      setPrice(e.target.reset());
      dispatch(getAddShowtime(id_room, id_movie, date, start_time, price));
    }
  };

  const optionsMovie = movie.map((item) => ({
    value: item.id_movie,
    label: item.name_movie,
  }));

  const _optionsCineplex = cinema
    .filter((i) => {
      const _data = dataCineplexs.find((d) => {
        return d.id_cineplex === i.id;
      });
      return _data === undefined;
    })
    .map((i) => ({
      value: i.id,
      label: i.name,
    }));

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
                              required
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
                              required
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
              <TabPane tabId="2">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Cinema</h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={(e) => addCinemaHandler(e)}>
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
                                onChange={(e) => setId_cineplex(e.target.value)}
                                color="primary"
                                required
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
                              value={name_room}
                              onChange={(e) => setNameRoom(e.target.value)}
                              placeholder="Cinema"
                              type="text"
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Choose Category</label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              onChange={(e) =>
                                setId_categoryRoom(e.target.value)
                              }
                              required
                            >
                              <option value="1">2D</option>
                              <option value="2">3D</option>
                              <option value="3">4D</option>
                            </Input>
                          </FormGroup>
                        </Col>
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
                                value={horizontal}
                                onChange={(e) => setHorizontal(e.target.value)}
                              >
                                {(function (rows, i, len) {
                                  while (++i <= len) {
                                    rows.push(<option>{i}</option>);
                                  }
                                  return rows;
                                })([], 1, 18)}
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
                                value={vertical}
                                onChange={(e) => setVertical(e.target.value)}
                              >
                                {(function (rows) {
                                  for (let i = 0; i < myArr.length; i++) {
                                    rows.push(<option>{myArr[i]}</option>);
                                  }
                                  return rows;
                                })([])}
                              </Input>
                            </div>
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
                            Add Cinema
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
                    <Row>
                      <Col sm="1">
                        <ButtonGroup
                          className="btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: selectStatus === "new",
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => setValueStatus("new")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              New
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
                              active: selectStatus === "old",
                            })}
                            onClick={() => setValueStatus("old")}
                          >
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Old
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
                    <Form onSubmit={(e) => addMovieHandler(e)}>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <label>Name</label>
                            {selectStatus === "old" ? (
                              <Select
                                required
                                placeholder="Name"
                                options={optionsMovie}
                                styles={colourStyles}
                                theme={(theme) => ({
                                  ...theme,
                                  borderRadius: 7,
                                  colors: {
                                    ...theme.colors,
                                    primary25: "#1d8cf8",
                                    primary: "#e14eca",
                                    neutral0: "#FFF",
                                  },
                                })}
                                onChange={(e) => setValueMovie(e)}
                              />
                            ) : (
                              <Input
                                type="text"
                                name="nameMovie"
                                placeholder="Name movie"
                                value={name_movie}
                                onChange={(e) => setName_movie(e.target.value)}
                                required
                              />
                            )}
                          </FormGroup>
                        </Col>
                        <Col md="5">
                          <FormGroup>
                            <label>Choose Cineplex</label>
                            {loadingCineplex ? (
                              <h2>Loading...</h2>
                            ) : errorCineplex ? (
                              <h2>{errorCineplex}</h2>
                            ) : (
                              <>
                                <Select
                                  placeholder="Name"
                                  isMulti
                                  required
                                  options={_optionsCineplex}
                                  styles={colourStyles}
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                  theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 7,
                                    colors: {
                                      ...theme.colors,
                                      primary25: "#1d8cf8",
                                      primary: "#e14eca",
                                      neutral0: "#FFF",
                                    },
                                  })}
                                  onChange={(e) =>
                                    setId_cineplex(e.map((i) => i.value))
                                  }
                                />
                              </>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <FormGroup>
                            <label>Time (minutes)</label>
                            <Input
                              type="text"
                              name="time"
                              id={disabled}
                              placeholder="time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Premiere date</label>
                            <Input
                              type="date"
                              name="date"
                              id={disabled}
                              placeholder="date placeholder"
                              value={release_date}
                              onChange={(e) => setRelease_date(e.target.value)}
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <Row>
                              <Col>
                                <Button
                                  className="btnAddimgMovie"
                                  id={disabled}
                                >
                                  <Input
                                    type="file"
                                    name="file"
                                    id={disabled}
                                    className={disabled}
                                    placeholder="date placeholder"
                                    onChange={onChangePicture}
                                  ></Input>
                                  Add image
                                </Button>
                              </Col>
                            </Row>
                            <img className="ImgMovie" src={imgData}></img>
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
                            Add Movie
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tabId="4">
                <Card>
                  <CardHeader>
                    <h5 className="title">Add Showtime</h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={(e) => addShowtimeHandler(e)}>
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
                                required
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
                                onChange={(e) => setId_room(e.target.value)}
                                required
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
                                onChange={(e) => setId_movie(e.target.value)}
                                required
                              >
                                {schedule.map((item) => (
                                  <option value={item.id}>
                                    {item.name_movie}
                                  </option>
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
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              required
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
                              value={start_time}
                              onChange={(e) => setStart_time(e.target.value)}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup>
                            <label>Price</label>
                            <Input
                              type="text"
                              name="price"
                              placeholder="300000"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              required
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
                            Add Showtime
                          </Button>
                        </Col>
                      </Row>
                    </Form>
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

export default CGUD;
