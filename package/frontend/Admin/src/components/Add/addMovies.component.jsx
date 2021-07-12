import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../firebase";
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
    ButtonGroup,
} from "reactstrap";

//import Actions
import {
    getAddMovie
} from "../../redux/actions/adminActions";

function AddMoviesComponent() {
    const dispatch = useDispatch();
    //cineplex
    const _cineplex = useSelector((state) => state.getCinema);
    const { loadingCineplex, errorCineplex, cinema } = _cineplex;
    const [id_cineplex, setId_cineplex] = React.useState(0);
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
    const [classLoading, setLoading] = React.useState("");

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
                if (refImg.current == null) {
                    setLoading("loader");
                }
                updateTask.on(
                    "state_changed",
                    (snapshot) => { },
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
                        setLoading("");
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
    const optionsMovie = movie.map((item) => ({
        value: item.id_movie,
        label: item.name_movie,
    }));

    const _optionsCineplex = cinema.length > 0 ? cinema
        .filter((i) => {
            const _data = dataCineplexs.length>0?dataCineplexs.find((d) => {
                return d.id_cineplex === i.id;
            }):0;
            return _data === undefined;
        })
        .map((i) => ({
            value: i.id,
            label: i.name,
        })) : 0;
    return (
        <Card>
            {classLoading !== "" ? (
                <div class={classLoading}></div>
            ) : (
                <>
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
                                                onChange={(e) =>
                                                    setName_movie(e.target.value)
                                                }
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
                                            onChange={(e) =>
                                                setRelease_date(e.target.value)
                                            }
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
                </>
            )}
        </Card>
    );
}

export default AddMoviesComponent;