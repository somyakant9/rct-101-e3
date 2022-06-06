import React from "react";

// use react-router Link or NavLink
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" >Logo</Link>
      <span data-cy="navbar-cart-items-count">{`Cart()`}</span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
