import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustomer, deleteCustomer } from '../crud';
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

const Customer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, data: customer, error } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomer(id),
    staleTime: 600000, // cache for 10 minutes
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries("customers");
      queryClient.invalidateQueries(["customers", id]);
      navigate("/");
    },
  });

  const handleEdit = () => {
    navigate(`/customer/${id}/edit`);
  };

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return "loading...";
  if (error) return `Error: ${error.message}`;

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
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={handleDelete} disabled={deleteMutation.isLoading}>
              {deleteMutation.isLoading ? "Deleting..." : "Delete"}
            </Button>{" "}
            <Button variant="secondary" onClick={() => navigate("/customers")}>
              Back to List Customers
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Customer;
