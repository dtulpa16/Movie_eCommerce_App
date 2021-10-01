import { Link } from "react-router-dom";
import React from "react";
import Logout from "./logout";
import './NavBar.css';

const NavBar = ({user}) => {
  return ( 
    <nav className="navbar">
      {user &&
          <React.Fragment>
            <h4>Welcome {user.username}</h4>
            <Link to = '/products'>
              <li className="li" >Products for sale</li>
            </Link> 
            <Link to = '/productsform'>
              <li className="li">List Item</li>
            </Link>  
            <Link to = '/checkOut'>
              <li className="li" >CheckOut</li>
            </Link> 
            <Link to = '/shoppingcart'>
              <li className="li">ShoppingCart</li>
            </Link>
            <li><Logout/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/register'>
              <li className="li" >Register</li>
            </Link>  
            <Link to = '/Login'>
              <li className="li">Login</li>
            </Link>

        </React.Fragment>  
        }
    </nav>
   );
}

export default NavBar;
