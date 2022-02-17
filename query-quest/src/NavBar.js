import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className="navBarLink" exact to="/">Home  </NavLink>
      <NavLink className="navBarLink" to="/playgame">Play Game  </NavLink>
      <NavLink className="navBarLink" to="/newQuestion">Submit a Question  </NavLink>
    </nav>  
  </div>)
}

export default NavBar;