import jwtDecode from 'jwt-decode';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Checkout from './CheckOut';
import './ProductList.css';
import './Button.css';


const ShoppingCart =(props) =>{
    const [products,setProducts] = useState([])
    const [checkout,setCheckout] = useState(false)

//useEffect operated the same as componentsDidMount. Whatever is in the first part will run first. When the value of whats in the brackets changes, useEffect will run again.
//props.user is passed in from the products list page. This is going to be whatever user is logged in.

    useEffect(()=>{
      getProducts(props.user)
    },[products])


//gets products in the cart based on the user logged in
//The .then() runs after the axios call is completed. In this case, it fetches all products attached to the user then sets the "products" variable up top to whatever data is fetched.

    async function getProducts(user){
        await axios.get(`https://localhost:44394/api/shoppingcart/${user.id}`).then(response=>{setProducts(response.data)})
    }
//removes a product from the cart
    async function removeProduct(id){
      await axios.delete(`https://localhost:44394/api/shoppingcart/${id}/${props.user.id}`)
    }


  return (
  <div>
    <h1>Your Cart</h1><hr/>
    <table class="rwd-table" width="100%">
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                {products.map((element)=>
                <>
                  <tr class="active-row">
                    <td data-th="Movie Title">{element.products.name}</td>
                    <td data-th="Gross">${element.products.price}</td>
                    <td><div class="button_slide slide_left" onClick={()=> removeProduct(element.products.id)}>Remove From Cart</div></td>
                    </tr>
                </>)}             
            </table>
            {checkout ?(
              <Checkout/>
            ):(
              <div class="button_slide slide_left" onClick={()=>setCheckout(true)}>Checkout</div>
            )}
  </div>

    );
}

export default ShoppingCart;