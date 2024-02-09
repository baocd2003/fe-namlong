import './App.css';
import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import SideBar from './Component/Sidebar/SideBar';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import Booking from './Component/Booking/Booking';
import AddBookingForm from './Component/Booking/AddBookingForm';
import CustomerPage from './Component/Customer/CustomerPage';
import AddCustomerPage from './Component/Customer/AddCustomerPage';
import ManageBooking from './Component/ManageBooking/ManageBooking';
import CreateBooking from './Component/ManageBooking/CreateBooking';
import Transaction from './Component/Transaction/Transaction';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Hàm xử lý toggle sidebar
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    
  };
  return (
    <div className="App">
      <Navbar onToggleSidebar={handleToggleSidebar}/>

      <div className="app-container">
        <SideBar open={sidebarOpen} />
        <div className={`content ${sidebarOpen ? 'content-open' : 'content-closed'}`}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings-event" element={<Booking />} />
            <Route path="/bookings-event/create" element={<AddBookingForm />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/customers/create" element={<AddCustomerPage />} />
            <Route path="/bookings" element={<ManageBooking />} />
            <Route path="/bookings/create" element={<CreateBooking />} />
            <Route path="/transactions" element={<Transaction />} />


            {/* Add more routes as needed */}
          </Routes>
          
        </div>
      </div>
      <footer className={sidebarOpen ? 'footer-open' : ''}>
		<div className="footer-container">
			<div className="foot-left">Powered by 
			<a href="">lavarel-admin</a>
			</div>
			<div className="foot-right">
        <div>env</div>
        <div>production</div>
        <div>Version</div>
        <div>1.8.14</div>
      </div>
		</div>
	</footer>
     
    </div>
  );
}

export default App;
