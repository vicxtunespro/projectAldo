import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import SignUp from "./routes/SignUp";
import LoginForm from "./routes/LoginIn";
import BookingForm from "./components/bookingForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginin" element={<LoginForm />} />
        <Route path="/bookingForm" element={<BookingForm />} />
      </Routes>
    </div>
  );
}

export default App;
