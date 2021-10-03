import jwtDecode from 'jwt-decode';
import React, {useEffect, useState} from "react";
import axios from "axios";


const ShoppingCart =(props) =>{
  // const [user, setUser] = useState()
  // const[customerId,detCustomerId]= useState([])
  const [products,setProducts] = useState([])

    useEffect(()=>{
      getProducts(props.user)
    },[])



    // async function getUser(localStorage) {
    //       let jwt = localStorage.getItem('token');
    //       try{
    //           let currentUser = jwtDecode(jwt);
    //           setUser(currentUser);
    //       }catch{
    //       }
    //       let response = await axios.get('https://localhost:44394/api/users', { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setUser(response.data)});
    //   }

    async function getProducts(user){
        await axios.get(`https://localhost:44394/api/shoppingcart/${user.id}`).then(response=>{setProducts(response.data)})
    }


  return (
  <div>
    <h1>Your Cart</h1><hr/>
    {products.map((element)=><><h3>{element.products.name}</h3><h5>${element.products.price}</h5></>)}
  </div>

    );
}

export default ShoppingCart;