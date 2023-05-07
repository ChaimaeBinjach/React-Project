import axios from 'axios'; // Importing axios library

const API_BASE_URL = 'http://localhost:3000'; // Setting the base URL for the API

export async function fetchCustomers() { // Defining a function to fetch all customers
  try {
    const response = await axios.get(`${API_BASE_URL}/customers`); // Sending a GET request to fetch all customers from the API
    return response.data; // Returning the data from the response
  } catch (error) { // Handling errors if any
    console.error(error); // Logging the error to the console
  }
}

export async function fetchCustomer(id) { // Defining a function to fetch a single customer by id
  try {
    const response = await axios.get(`${API_BASE_URL}/customers/${id}`); // Sending a GET request to fetch the customer by id from the API
    return response.data; // Returning the data from the response
  } catch (error) { // Handling errors if any
    console.error(error); // Logging the error to the console
  }
}

export async function createCustomer(newCustomer) { // Defining a function to create a new customer
  try {
    const response = await axios.post(`${API_BASE_URL}/customers`, newCustomer); // Sending a POST request to create the new customer in the API
    return response.data; // Returning the data from the response
  } catch (error) { // Handling errors if any
    console.error(error); // Logging the error to the console
    throw error; // Rethrow the error to handle it in the component
  }
}

export async function updateCustomer(updatedCustomer) { // Defining a function to update an existing customer
  try {
    const response = await axios.put(`${API_BASE_URL}/customers/${updatedCustomer.id}`, updatedCustomer); // Sending a PUT request to update the existing customer in the API
    return response.data; // Returning the data from the response
  } catch (error) { // Handling errors if any
    console.error(error); // Logging the error to the console
  }
}

export async function deleteCustomer(id) { // Defining a function to delete a customer by id
  try {
    const response = await axios.delete(`${API_BASE_URL}/customers/${id}`); // Sending a DELETE request to delete the customer by id from the API
    return response.data; // Returning the data from the response
  } catch (error) { // Handling errors if any
    console.error(error); // Logging the error to the console
  }
}
