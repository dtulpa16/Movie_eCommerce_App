import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <nav>
      <ul>
        <Link to = '/'>
          <li>Home</li>
        </Link>  
        <Link to = '/about'>
          <li>About</li>
        </Link> 
        <Link to = '/buyerhome'>
          <li>BuyerHome</li>
        </Link> 
        <Link to = '/listitem'>
          <li>ListItem</li>
        </Link>  
        <Link to = '/checkOut'>
          <li>CheckOut</li>
        </Link> 
        <Link to = '/shoppingcart'>
          <li>ShoppingCart</li>
        </Link>
        <Link to = '/register'>
          <li>Register</li>
        </Link>  
        <Link to = '/Login'>
          <li>Login</li>
        </Link>  
      </ul>
    </nav>
   );
}

export default NavBar;
