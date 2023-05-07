import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchCustomers, deleteCustomer } from "../crud";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Customers = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: customers,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });

  const deleteCustomerMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    }
  });

  const handleDelete = (id) => {
    deleteCustomerMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Table responsive="xl" bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Birthdate</th>
            <th>Job Area</th>
            <th>Company Name</th>
            <th>Credit Card Number</th>
            <th colspan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.birthdate}</td>
              <td>{customer.jobarea}</td>
              <td>{customer.companyname}</td>
              <td>{customer.creditcardnum}</td>
              <td>
                <Button variant="info" onClick={() => navigate(`/customer/${customer.id}`)}>View</Button>
              </td>
              <td>
                <Button variant="warning" onClick={() => navigate(`/customer/${customer.id}/edit`)}>Edit</Button>
              </td>
              <td> 
                 <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Customers;
