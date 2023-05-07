import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate= useNavigate();
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">Shiny Shimi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/customers" className='list_item'>Customers</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <button onClick={() =>navigate(`/addcustomer`)} className="btn btn-success">Add Customer</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar