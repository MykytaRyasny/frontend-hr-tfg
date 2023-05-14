import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";

function MainPage() {
    const location = useLocation();
    const {state:userData} = location;
    const navigate = useNavigate();
    axios.defaults.baseURL = 'http://127.0.0.1:8080';
    function onClickList(){
        axios
            .get('/employee/all')
            .then(response => navigate('/employees', {state: response.data}))
            .catch(error => console.log(error))

    }
    return (
        <Container fluid>
            <Row style={{padding:20}}>
                <Col md={{span:1, offset:11}}> <Button variant="outline-primary" onClick={
                    event => navigate('/')
                }>Logout</Button></Col>
            </Row>
            {(() => { if(userData.rol === "admin" || userData.rol === "hr") {
                return <Button variant="outline-primary" onClick={
                event => onClickList()
            }>Todos los trabajadores</Button>;
            } else {
                return console.log();
            }})()}
        </Container>
    );
}

export default MainPage;