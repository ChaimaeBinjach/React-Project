// Import necessary libraries and functions
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustomer, deleteCustomer } from '../crud';
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

// Create a functional component called "Customer"
const Customer = () => {
  // Get the navigate and id values using hooks
  const navigate = useNavigate();
  const { id } = useParams();

  // Use useQuery hook to fetch data from the server
  const { isLoading, data: customer, error } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomer(id),
    staleTime: 600000, // cache for 10 minutes
  });

  // Create a queryClient instance
  const queryClient = useQueryClient();

  // Use useMutation hook to delete data from the server
  const deleteMutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      // Invalidate the cache for customers and the specific customer
      queryClient.invalidateQueries("customers");
      queryClient.invalidateQueries(["customers", id]);
      // Navigate back to the home page
      navigate("/");
    },
  });

  // Handle the edit button click
  const handleEdit = () => {
    navigate(`/customer/${id}/edit`);
  };

  // Handle the delete button click
  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  // If the data is still loading, display "loading..."
  if (isLoading) return "loading...";
  // If there is an error, display the error message
  if (error) return `Error: ${error.message}`;

  // Render the customer details in a container
  return (
    <Container className="customer-container ">
      <Row>
        <Col >
          <div className="customer-header">
            <h2>{customer.name}</h2>
          </div>
          <div className="customer-details">
            <div className="customer-info">
              <span className="info-label">Email:</span> {customer.email}
            </div>
            <div className="customer-info">
              <span className="info-label">Address:</span> {customer.address}
            </div>
            <div className="customer-info">
              <span className="info-label">Birth Date:</span> {customer.birthdate}
            </div>
            <div className="customer-info">
              <span className="info-label">Job Area:</span> {customer.jobarea}
            </div>
            <div className="customer-info">
              <span className="info-label">Company Name:</span> {customer.companyname}
            </div>
            <div className="customer-info">
              <span className="info-label">Credit Card Number:</span> {customer.creditcardnum}
            </div>
          </div>
          <div className="customer-actions">
            {/* Render an "Edit" button that navigates to the edit page */}
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>{" "}
            {/* Render a "Delete" button that triggers the deleteMutation and is disabled when the mutation is loading */}
            <Button variant="danger" onClick={handleDelete} disabled={deleteMutation.isLoading}>
              {deleteMutation.isLoading ? "Deleting..." : "Delete"}
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Export the Customer component as the default export
export default Customer;
