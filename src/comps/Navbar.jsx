// Import necessary components and libraries
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

// Create a functional component called NavBar
const NavBar = () => {
  // Use the useNavigate hook from react-router-dom to enable navigation to other pages
  const navigate= useNavigate();
  
  // Render the Navbar component with Bootstrap styling
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">Shiny Shimi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Create a navigation link to the Customers page */}
          <Nav className="ms-auto">
            <Nav.Link href="/customers" className='list_item'>Customers</Nav.Link>
          </Nav>
          {/* Create a button to navigate to the Add Customer page */}
          <Nav className="ms-auto">
            <button onClick={() =>navigate(`/addcustomer`)} className="btn btn-success">Add Customer</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Export the NavBar component as the default export
export default NavBar
