import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/"               element={<Home />}     />
          <Route path="/home"            element={<Home />}     />
          <Route path="/login"          element={<Login />}    />
          <Route path="/about"          element={<About />}    />
          <Route path="/user"          element={<User />}    />
          <Route path="/users"          element={<Users />}    />
          <Route path="/contact"          element={<Contact />}    />
          <Route path="/register"        element={<Register />}  />
          <Route path="/notfound"       element={<NotFound />} />
          <Route path="/*"              element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
