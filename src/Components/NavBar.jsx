import { Link } from "react-router-dom";
import React from "react";
import Logout from "./logout";

const NavBar = ({user}) => {
  return ( 
    <nav>
      {user &&
          <React.Fragment>
            <h4>Welcome {user.username}</h4>
            <Link to = '/products'>
              <li>Products for sale</li>
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
            <li><Logout/></li>
            </React.Fragment>
            }
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
    </nav>
   );
}

export default NavBar;
