import React from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../util/images/logo.png'
export const AppNav: React.FC = ({ }) => {
  return (<Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        Shy Chat
      </Navbar.Brand>
      <Nav>
        <Button style={{marginRight:'10px',backgroundColor:'#6BC9BB',border:'none',}}>
          <Link to='/editprofile'>Your Profile </Link>
        </Button>
        <Logout />
      </Nav>
    </Container>
  </Navbar>
  );
}