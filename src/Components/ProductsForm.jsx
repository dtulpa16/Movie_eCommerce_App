import axios from 'axios';
import React, { Component } from 'react';



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

  handleSubmit=(event)=>{
    event.preventDefault();
    let newProduct= {
      name:this.state.name,
      description:this.state.description,
      price:this.state.price,
      genresId:this.state.genres
    }
      this.addNewProduct(newProduct)
  }
  async addNewProduct(newProd){
    await axios.post(`https://localhost:44394/api/product`,newProd)
  }
  
  render() { 
    return ( 
     <form className= "productForm" onSubmit={(event) => this.handleSubmit (event)}>
     <label>Product Name</label>
     <input name= "name" onChange={this.handleChange} value={this.state.name}/>
     <label>Description</label>
     <input name= "description" onChange={this.handleChange} value={this.state.description}/>
     <label>Price</label>
     <input name= "price" type = "number" onChange={this.handleChangeOne} value={this.state.price}/>
     <label>Genre</label>
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
     </form> 

    );
  }
}
 
export default ProductsForm