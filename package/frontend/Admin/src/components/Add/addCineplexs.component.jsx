import React from "react";
import { useDispatch } from "react-redux";
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
} from "reactstrap";

//import Actions
import {
    getAddCineplex
} from "../../redux/actions/adminActions";

function AddCineplexsComponent() {
    const dispatch = useDispatch();

    //add cineplex
    const [name_cineplex, setCineplex] = React.useState("");
    const [address_cineplex, setAddressCineplex] = React.useState("");

    const addCineplexHandler = (e) => {
        e.preventDefault();
        setAddressCineplex(e.target.reset());
        setCineplex(e.target.reset());
        dispatch(getAddCineplex(name_cineplex, address_cineplex));
    };

    return (
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
    );
}

export default AddCineplexsComponent;