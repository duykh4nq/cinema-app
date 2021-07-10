import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    Form
} from "reactstrap";
//import Actions
import {
    getCinema,
    getMovie,
    getSchedule,
    getAddShowtime,
} from "../../redux/actions/adminActions";

function AddShowtimeComponent() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCinema());
        dispatch(getMovie());
    }, [dispatch]);

    //cineplex
    const _cineplex = useSelector((state) => state.getCinema);
    const { loadingCineplex, errorCineplex, cinema } = _cineplex;
    const [id_cineplex, setId_cineplex] = React.useState(0);
    //schedule
    const _schedule = useSelector((state) => state.getSchedule);
    const { loadingSchedule, errorSchedule, schedule } = _schedule;

    const setValueCineplex = (e) => {
        setId_cineplex(e);
        dispatch(getSchedule(e));
    };

    //add showtime
    const [id_room, setId_room] = React.useState("");
    const [id_movie, setId_movie] = React.useState("");
    const [date, setDate] = React.useState("");
    const [start_time, setStart_time] = React.useState("");
    const [price, setPrice] = React.useState("");

    if (id_room !== "" || id_movie !== "") {
        sessionStorage.setItem("id_room", JSON.stringify(schedule?.rooms[0].id));
        sessionStorage.setItem("id_movie", JSON.stringify(schedule?.movies[0].id));
    }

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
    return (<Card>
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
                                    onClick={(e) =>
                                        setValueCineplex(e.target.value)
                                    }
                                    required
                                >
                                    {cinema.map((item) => (
                                        <>
                                            <option value={item.id}>{item.name}</option>
                                        </>
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
                                    {schedule?.rooms?.map((item) => (
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
    );
}

export default AddShowtimeComponent