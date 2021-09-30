import axios from 'axios';
import React, { Component } from 'react';



class ProductsForm extends Component {
  state = {  
    name:'',
    description:'',
    price:'',
    genres:'',

  }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit=(event)=>{
    event.preventDefault();
    let newProduct= {
      'name':this.state.name,
      'description':this.state.description,
      'price':this.state.price,
      'genres':this.state.genres,
    }
      this.addNewProduct(newProduct)
  }
  async addNewProduct(newProd){
    await axios.post(`https://localhost:44394/api/product`,newProd)
  }
  
  render() { 
    return ( 
     <form className= "productForm" onSubmit={(event) => this.handleSubmit (event)}>
     <input name= "name" onChange={this.handleChange} value={this.state.name}/>
     <label>Product Name</label>
     <input name= "description" onChange={this.handleChange} value={this.state.description}/>
     <label>Description</label>
     <input name= "price" onChange={this.handleChange} value={this.state.price}/>
     <label>Price</label>
     <input name= "genres" onChange={this.handleChange} value={this.state.genres}/>
     <label>Genre</label>
     </form> 

    );
  }
}
 
export default ProductsForm