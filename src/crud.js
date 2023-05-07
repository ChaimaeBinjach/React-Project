import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export async function fetchCustomers() {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCustomer(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createCustomer(newCustomer) {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers`, newCustomer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateCustomer(updatedCustomer) {
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${updatedCustomer.id}`, updatedCustomer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCustomer(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
