import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar" className ="prettierBar">
    <nav>
      <NavLink exact to="/">Home  </NavLink>
      <NavLink to="/playgame">Play Game  </NavLink>
      <NavLink to="/newQuestion">New Question  </NavLink>
    </nav>  
  </div>)
}

export default NavBar;