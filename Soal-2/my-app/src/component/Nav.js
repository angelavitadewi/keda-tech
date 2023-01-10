import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';

function NavHeader() {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='/' style={{ color: 'white' }}>
          <b>HOME</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/about'>
              <b>ABOUT</b>
            </Nav.Link>
            <Nav.Link href='/pricing'>
              <b>PRICING</b>
            </Nav.Link>
            <Nav.Link href='/contact'>
              <b>CONTACT</b>
            </Nav.Link>
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
