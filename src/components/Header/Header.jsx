import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from '../../images/user.png';

const Header = () => {
  return (
    <div className='container'>
      <Navbar>
        <Container>
          <Navbar.Brand><h2>Knowledge Cafe</h2></Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link>
              <img src={user} alt="" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default Header;