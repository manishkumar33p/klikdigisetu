import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About/About";
import Product from "./Product/Product";
import DataEntry from "./DataEntry/DataEntry";
import ContactUs from "./ContactUs/ContactUs";
import Dashboard from "./Dashboard/Dashboard";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
//import NavbarHook from './NavbarHook/NavbarHook';

function App() {
  return (
    <Router>
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navBar" element={<NavBar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
