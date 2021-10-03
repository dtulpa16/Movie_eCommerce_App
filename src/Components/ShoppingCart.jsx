import jwtDecode from 'jwt-decode';
import React, {useEffect, useState} from "react";
import axios from "axios";


const ShoppingCart =(props) =>{
  // const [user, setUser] = useState()
  // const[customerId,detCustomerId]= useState([])
  const [products,setProducts] = useState([])

    useEffect(()=>{
      getProducts(props.user)
    },[products])


    async function getProducts(user){
        await axios.get(`https://localhost:44394/api/shoppingcart/${user.id}`).then(response=>{setProducts(response.data)})
    }

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
                {products.map((element)=><><tbody><tr><td>{element.products.name}</td><td>${element.products.price}</td><td><button onClick={()=> removeProduct(element.products.id)}>Remove From Cart</button></td></tr></tbody></>)}             
            </table>
  </div>

    );
}

export default ShoppingCart;