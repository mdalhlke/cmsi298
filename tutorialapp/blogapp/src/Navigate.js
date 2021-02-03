import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigate() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Blog App</Navbar.Brand>
      <Nav className="mr-auto" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigate;
