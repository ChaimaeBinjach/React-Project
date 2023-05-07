// Importing required modules
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustomer, updateCustomer  } from "../crud";

import CustomerForm from "../comps/CustomerForm";

// Define EditCustomer component
const EditCustomer = () => {
  // Get query client and navigation hooks from react-router-dom
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // Get URL parameter 'id' using useParams hook
  const { id } = useParams();
  // Use useQuery hook to fetch the customer data from the API
  const {
    isLoading,
    isError,
    data: customer,
    error,
  } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomer(id),
  });
  // Use useMutation hook to handle the customer update request
  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      // Invalidate the query cache after updating the customer
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      // Navigate back to the customers list page
      navigate("/customers");
    }
  });

  // If the customer data is loading, display a loading message
  if (isLoading) return "loading...";
  // If there's an error, display an error message
  if (isError) return `Error: ${error.message}`;

  // Define the function to handle form submission
  const handleSubmit = (updatedCustomer) => {
    // Use the updateCustomerMutation to update the customer data
    updateCustomerMutation.mutate({ id, ...updatedCustomer });
  };

  // Render the CustomerForm component with the customer data as initial values
  return (
    <div>
      <CustomerForm onSubmit={handleSubmit} initialValue={customer} />
    </div>
  );
};

// Export the EditCustomer component as the default export
export default EditCustomer;
