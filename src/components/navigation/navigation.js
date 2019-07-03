import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.scss';

class Navigation extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand className="wedding-nav" href="/">
					<span>The</span>
					<span>Santiago</span>
					<span>Wedding</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
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
