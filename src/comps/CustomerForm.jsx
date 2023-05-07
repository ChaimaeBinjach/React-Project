import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CustomerForm = ({ onSubmit, initialValue }) => {
  const [customer, setCustomer] = useState(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(customer);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
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
              value={customer.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={customer.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Enter address"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridBirthdate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter birth date"
            name="birthdate"
            value={customer.birthdate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridJobArea">
          <Form.Label>Job Area</Form.Label>
          <Form.Control
            placeholder="Enter job area"
            name="jobarea"
            value={customer.jobarea}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            placeholder="Enter company name"
            name="companyname"
            value={customer.companyname}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCreditCardNum">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter credit card number"
            name="creditcardnum"
            value={customer.creditcardnum}
            onChange={handleChange}
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
