import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.scss';

class Navigation extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">theSantiagoWedding</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/wedding">Our Wedding</Nav.Link>
						<Nav.Link href="/gallery">Gallery</Nav.Link>
						<Nav.Link href="/registry">Registry</Nav.Link>
						<Nav.Link href="/rsvp">RSVP</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
