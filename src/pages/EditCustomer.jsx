import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustomer, updateCustomer  } from "../crud";

import CustomerForm from "../comps/CustomerForm";
const EditCustomer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: customer,
    error,
  } = useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomer(id),
  });
  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      navigate("/customers");
    }
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedCustomer) => {
    updateCustomerMutation.mutate({ id, ...updatedCustomer });
  };

  return (
    <div>
      <CustomerForm onSubmit={handleSubmit} initialValue={customer} />
    </div>
  );
};

export default EditCustomer;
