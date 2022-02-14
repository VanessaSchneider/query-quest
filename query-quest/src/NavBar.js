import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink exact to="/">Home  </NavLink>
      <NavLink to="/movies">Play Game  </NavLink>
      <NavLink to="/actors">New Question  </NavLink>
    </nav>  
  </div>)
}

export default NavBar;