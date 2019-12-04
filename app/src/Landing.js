import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./App.css";

const Landing = () => (
    <Container className="p-3">
        <Row>
            <Col sm={4}>
                <Jumbotron>
                    <h2 className="header">artist</h2>
                    <br></br>
                    <Link to='./UXDesign/SELApp'>designer</Link>
                    <h2 className="header"></h2>
                    <br></br>
                    <h2 className="header">coder</h2>
                    <br></br>
                </Jumbotron>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
);

export default Landing;