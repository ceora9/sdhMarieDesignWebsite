import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./App.css";

const Landing = () => (
    <Container className="p-3">
        <Jumbotron>
            <h1 className="header">artist</h1>
            <br></br>
            <h1 className="header">designer</h1>
            <br></br>
            <h1 className="header">coder</h1>
            <br></br>
        </Jumbotron>
    </Container>
);

export default Landing;