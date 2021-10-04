import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





class ProductsForm extends Component {
  state = {  
    name:'',
    description:'',
    price:0,
    genres:1,

  }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeOne=(event) =>{
    this.setState ({
      [event.target.name]: parseInt(event.target.value),
    });
  };


//once the form is submitted, an object is created. The values on the left should match the name of the rows in the table
  handleSubmit=(event)=>{
    event.preventDefault();
    let newProduct= {
      name:this.state.name,
      description:this.state.description,
      price:this.state.price,
      genresId:this.state.genres
    }
// The object we created is then passed into a function where we post the new user to the user table
    this.addNewProduct(newProduct)
  }
  async addNewProduct(newProd){
    await axios.post(`https://localhost:44394/api/product`,newProd).then(response => {alert("Movie Listed for sale!")})
  }
  
  render() { 
    return ( 
    <div>
        <h1>List an Item</h1>
        <form className= "productForm" onSubmit={(event) => this.handleSubmit (event)}>
          <ul>
        <li><label>Product Name</label></li>
        <input name= "name" onChange={this.handleChange} value={this.state.name}/>
        <li><label>Description</label></li>
        <input name= "description" onChange={this.handleChange} value={this.state.description}/>
        <li><label>Price</label></li>
        <input name= "price" type = "number" onChange={this.handleChangeOne} value={this.state.price}/>
        <li><label>Genre</label></li>
        <select id="genres" name="genres" type = "number"onChange={this.handleChangeOne}>
            <option value="1">Musical</option>
            <option value="2">Comedy</option>
            <option value="3">Documentary</option>
            <option value="4">Action</option>
            <option value="5">Suspense</option>
            <option value="6">Drama</option>
            <option value="7">Mystery</option>
        </select>
        <button type = "submit">Post product</button>
        </ul>
        </form>
   </div>
    );
  }
}
 
export default ProductsForm