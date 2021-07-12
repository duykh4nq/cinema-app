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
    getAddRoom,
} from "../../redux/actions/adminActions";

function AddCinemaComponent(props) {
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
    //cineplex
    const _cineplex = useSelector((state) => state.getCinema);
    const { loadingCineplex, errorCineplex, cinema } = _cineplex;
    const [id_cineplex, setId_cineplex] = React.useState(null);
    if (id_cineplex === null && cinema.length>0) setId_cineplex(cinema[0].id)

    React.useEffect(() => {
        dispatch(getCinema());
    }, [dispatch]);


    //add cinema
    const [name_room, setNameRoom] = React.useState("");
    const [horizontal, setHorizontal] = React.useState(2);
    const [vertical, setVertical] = React.useState("B");
    const [id_categoryRoom, setId_categoryRoom] = React.useState(1);

    const addCinemaHandler = (e) => {
        e.preventDefault();
        setNameRoom(e.target.reset());
        setHorizontal(2);
        setVertical("B");
        dispatch(
            getAddRoom(id_cineplex, name_room, horizontal, vertical, id_categoryRoom)
        );
    };

    return (
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
                                        {cinema.length > 0 ? cinema.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        )) : 0}
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
    );
}

export default AddCinemaComponent;