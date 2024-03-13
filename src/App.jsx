import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/user/Heading/header";
import Home from "./components/user/Home/home";
import FooterUser from "./components/user/Footer/footer";
import Contact from "./components/user/Contact/contact";
import About from "./components/user/About/about";
import Service from "./components/user/Service/service";
import Parking from "./components/user/Parking/parking";

import SideBar from "./components/admin/Sidebar/SideBar";
import Profile from "./components/admin/profile/profile";
import Login from "./components/admin/login/login";
import ManageUsers from "./components/admin/manageUsers/manageUsers";
import ManagePayment from "./components/admin/managePayment/managePayment";
import ManageMessage from "./components/admin/manageMeassge/manageMessage";
import EditProfile from "./components/admin/editProfile/editProfile";
import EditPassword from "./components/admin/editPassword/editPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="footer" element={<FooterUser />} />
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="parking" element={<Parking />} />
        <Route path="admin/login" element={<Login />} />

        <Route path="/admin" element={<SideBar />}>
          <Route path="profile" element={<Profile />} />
          <Route path="manageUsers" element={<ManageUsers />} />
          <Route path="managePayment" element={<ManagePayment />} />
          <Route path="manageMessage" element={<ManageMessage />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="editPassword" element={<EditPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
