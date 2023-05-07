import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CustomerForm = ({ onSubmit, initialValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData.entries());
    onSubmit(customer);
    
  };

  return (
    <div className="container border p-4">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
             
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Enter address"
            name="address"
           
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBirthdate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter birth date"
            name="birthdate"
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridJobArea">
          <Form.Label>Job Area</Form.Label>
          <Form.Control
            placeholder="Enter job area"
            name="jobarea"
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            placeholder="Enter company name"
            name="companyname"
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCreditCardNum">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter credit card number"
            name="creditcardnum"
            
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CustomerForm;
