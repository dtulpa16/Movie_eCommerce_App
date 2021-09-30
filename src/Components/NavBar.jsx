import { Link } from "react-router-dom";
import React from "react";

const NavBar = ({user}) => {
  return ( 
    <nav>
      {user &&<h4>Welcome {user.username}</h4>}
        <ul>
            <Link to = '/'>
              <li>Home</li>
            </Link>  
            <Link to = '/home'>
              <li>Home</li>
            </Link> 
            <Link to = '/productsform'>
              <li>List Item</li>
            </Link>  
            <Link to = '/checkOut'>
              <li>CheckOut</li>
            </Link> 
            <Link to = '/shoppingcart'>
              <li>ShoppingCart</li>
            </Link>
        {!user && 
        <React.Fragment>

            <Link to = '/register'>
              <li>Register</li>
            </Link>  
            <Link to = '/Login'>
              <li>Login</li>
            </Link>

        </React.Fragment>  
        }
      </ul>
    </nav>
   );
}

export default NavBar;
