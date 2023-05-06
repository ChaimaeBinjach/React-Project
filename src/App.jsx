import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './comps/Navbar';
import AddCustomer from './pages/AddCustomer';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import EditCustomer from './pages/EditCustomer';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/addcustomer' element={<AddCustomer />} />
        <Route path='/customer/:id' element={<Customer />} />
        <Route path='/customer/:id/edit' element={<EditCustomer />} />
      </Routes>
    </>
  )
}

export default App
