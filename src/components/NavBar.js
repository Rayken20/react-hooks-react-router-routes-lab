import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <div className="navbar-nav d-flex justify-content-between w-50">
          <NavLink className="nav-link" to="/movies">Movies</NavLink>
          <NavLink className="nav-link" to="/directors">Directors</NavLink>
          <NavLink className="nav-link" to="/actors">Actors</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
