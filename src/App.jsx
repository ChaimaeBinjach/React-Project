import { Route, Routes } from 'react-router-dom'; // Importing Route and Routes components from 'react-router-dom' library
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS file
import './App.css'; // Importing custom CSS file
import AddCustomer from './pages/AddCustomer'; // Importing AddCustomer component from './pages/AddCustomer' file
import Customer from './pages/Customer'; // Importing Customer component from './pages/Customer' file
import Customers from './pages/Customers'; // Importing Customers component from './pages/Customers' file
import EditCustomer from './pages/EditCustomer'; // Importing EditCustomer component from './pages/EditCustomer' file
import LandingPage from './pages/LandingPage'; // Importing LandingPage component from './pages/LandingPage' file
import NavBar from './comps/Navbar'; // Importing NavBar component from './comps/Navbar' file

function App() {

  return (
    <>
      <NavBar /> {/* Rendering the NavBar component */}
      <Routes> {/* Wrapping the routes in Routes component */}
        <Route path='/' element={<LandingPage />} /> {/* Rendering the LandingPage component for the root path */}
        <Route path='/customers' element={<Customers />} /> {/* Rendering the Customers component for '/customers' path */}
        <Route path='/addcustomer' element={<AddCustomer />} /> {/* Rendering the AddCustomer component for '/addcustomer' path */}
        <Route path='/customer/:id' element={<Customer />} /> {/* Rendering the Customer component for '/customer/:id' path */}
        <Route path='/customer/:id/edit' element={<EditCustomer />} /> {/* Rendering the EditCustomer component for '/customer/:id/edit' path */}
      </Routes>
    </>
  )
}

export default App; // Exporting the App component as default.
