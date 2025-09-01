import React from "react";
import Dock from "../react-bits/Dock";

import Home from '../icons/Home.png'

// dock items
const items = [
  { icon: <img src={Home} alt="Home" />, label: "Home", onClick: () => alert("Home!") },
  { icon: <img src={Home} alt="Archive" />, label: "Archive", onClick: () => alert("Archive!") },
  { icon: <img src={Home} alt="Profile" />, label: "Profile", onClick: () => alert("Profile!") },
  { icon: <img src={Home} alt="Settings" />, label: "Settings", onClick: () => alert("Settings!") },
];

const Navbar = () => {
  return (
    <div>
      {/* You can add a header/logo above if you want */}
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
