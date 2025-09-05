import React from "react";
import {useNavigate } from "react-router-dom";
import Dock from "../react-bits/Dock";

import Home from '../icons/Home.png'
import Add from '../icons/Add.png'
import User from '../icons/User.png'
import Logout from '../icons/Logout.png'

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  }
  const items = [
    { icon: <img src={Home} alt="Home" />, label: "Home", onClick: () => navigate("/home") },
    { icon: <img src={Add} alt="Add record" />, label: "Add Record", onClick: () => navigate("/newRecord") },
    { icon: <img src={User} alt="Profile" />, label: "Profile", onClick: () => navigate("/userdetails") },
    { icon: <img src={Logout} alt="Logout" />, label: "Logout", onClick: logout },
  ];

  return (
    <div>
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navbar;
