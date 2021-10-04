import jwtDecode from 'jwt-decode';
import React, {useEffect, useState} from "react";
import axios from "axios";


const ShoppingCart =(props) =>{
    const [products,setProducts] = useState([])

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
    <table class="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {products.map((element)=><>
                <tbody>
                  <tr>
                    <td>{element.products.name}</td>
                    <td>${element.products.price}</td>
                    <td><button onClick={()=> removeProduct(element.products.id)}>Remove From Cart</button></td>
                    </tr>
                    </tbody></>)}             
            </table>
  </div>

    );
}

export default ShoppingCart;