import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchCustomers, deleteCustomer } from "../crud";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Customers = () => {
  // initialize variables and hooks
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // retrieve customers data using the useQuery hook
  const {
    isLoading,
    isError,
    data: customers,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });

  // initialize the delete mutation using the useMutation hook
  const deleteCustomerMutation = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      // invalidate the query cache to fetch fresh data
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    }
  });

  // handle delete button click and call the delete mutation function
  const handleDelete = (id) => {
    deleteCustomerMutation.mutate(id);
  };

  // show loading state while data is being fetched
  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  
  // show error state if there is an error in fetching data
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // show table with customer data
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
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* map through the customer data and display in table rows */}
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
                {/* button to view customer details */}
                <Button variant="info" onClick={() => navigate(`/customer/${customer.id}`)}>View</Button>
              </td>
              <td>
                {/* button to edit customer details */}
                <Button variant="warning" onClick={() => navigate(`/customer/${customer.id}/edit`)}>Edit</Button>
              </td>
              <td> 
                 {/* button to delete customer */}
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
