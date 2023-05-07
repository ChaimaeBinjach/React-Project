import { createCustomer } from "../crud";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';

import CustomerForm from "../comps/CustomerForm";

const AddCustomer = () => {
  const queryClient = useQueryClient();
  const navigate= useNavigate();

  const createCustomerMutation = useMutation({
    mutationFn: createCustomer,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      console.log("Success!");
      navigate(`/customer/${data.id}`); // Navigate to the newly created customer's page
    },
  });

  const handleAddCustomer = (customer) => {
    createCustomerMutation.mutate({
      id: crypto.randomUUID(),
      ...customer,
    });
  };
  return (
    <CustomerForm onSubmit={handleAddCustomer} initialValue={{}} />
  )
}

export default AddCustomer