import React from "react";
import { Link } from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css";

const Landing = () => (
    <Container className="p-3">
        <Row>
            <Col sm={4}>
                <Jumbotron>
                    <ul>
                        <li>
                            <Link to='#'>artist</Link>
                        </li>
                        <li>
                            <Link to='/SELApp'>designer</Link>
                        </li>
                        <li>
                            <Link to='#'>coder</Link>
                        </li>
                    </ul>
                </Jumbotron>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
);

export default Landing;