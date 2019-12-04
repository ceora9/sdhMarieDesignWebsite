import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
	render() {
		return (
			<Navbar sticky="top" bg="light" expand="xl">
				<Container fluid={true}>
					<Navbar.Brand href="/">SDH MARIE DESIGN</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/about">about</Nav.Link>
							<Nav.Link href="/contact">contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar >
		)
	}
}

export default () => (<Navigation />)