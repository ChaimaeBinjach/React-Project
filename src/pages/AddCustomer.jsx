// Import necessary functions and components from external libraries and files
import { createCustomer } from "../crud";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import CustomerForm from "../comps/CustomerForm";

// Define a functional component called AddCustomer
const AddCustomer = () => {
  // Get access to the query client object and navigate function through hooks
  const queryClient = useQueryClient();
  const navigate= useNavigate();

  // Use a mutation hook to handle adding a new customer
  const createCustomerMutation = useMutation({
    mutationFn: createCustomer, // Define the function to be called to create a new customer
    onSuccess: (data) => { // Define what to do when the new customer is successfully created
      // Invalidate the customers query in the cache to reflect the new data
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      console.log("Success!");
      // Navigate to the newly created customer's page
      navigate(`/customer/${data.id}`);
    },
  });

  // Define a function to handle form submission and use the mutation hook to create the new customer
  const handleAddCustomer = (customer) => {
    createCustomerMutation.mutate({ // Call the create customer mutation
      id: crypto.randomUUID(), // Generate a new random ID for the new customer
      ...customer, // Spread the submitted customer object
    });
  };

  // Render a CustomerForm component and pass in a handler for form submission
  return (
    <CustomerForm onSubmit={handleAddCustomer} initialValue={{}} />
  )
}

// Export the AddCustomer component as the default export of this module
export default AddCustomer;
