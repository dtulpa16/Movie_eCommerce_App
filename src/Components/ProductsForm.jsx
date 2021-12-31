import axios from "axios";
import React, { Component } from "react";
import "./login.css";

const defaultImgSrc = '/img/placeholder.jpg'
class ProductsForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    genres: 1,
    imageName:'',
    imageSrc:defaultImgSrc,
    imageFile:null
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChangeOne = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value),
    });
  };

  showPreview = e =>{
    if(e.target.files && e.target.files[0]){
      let imageFile = e.target.files[0]
      const reader = new FileReader()
      reader.onload = x =>{
        this.setState({
          imageFile,
          imageSrc: x.target.result
        })
      }
      reader.readAsDataURL(imageFile)
    } else{
      this.setState({
        imageFile:null,
        imageSrc: defaultImgSrc
      })
    }
  }

  //once the form is submitted, an object is created. The values on the left should match the name of the rows in the table
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append('name', this.state.name)
    formData.append('description', this.state.description)
    formData.append('price', this.state.price)
    formData.append('genresId', this.state.genres)
    formData.append('imageName', this.state.imageName)
    formData.append('imageFile', this.state.imageFile)
    
    // let newProduct = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   price: this.state.price,
    //   genresId: this.state.genres,
    //   imageName:this.state.imageName,
    //   imageFile:this.state.imageFile
    // };
    // The object we created is then passed into a function where we post the new user to the user table
    this.addNewProduct(formData);
  };
  async addNewProduct(newProd) {
    await axios
      .post(`https://localhost:44394/api/product`, newProd)
      .then((response) => {
        alert("Movie Listed for sale!");
      });
  }

  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
        <h4>List an Item</h4>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input
            type="text"
              id="login"
              placeholder="Movie Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />

            <input
            type="text"
              placeholder="Description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            /><br/>

            <input
            
              placeholder="Price"
              name="price"
              type="number"
              onChange={this.handleChangeOne}
            />
            <label>Genre</label>
            <select
              id="genres"
              name="genres"
              type="number"
              onChange={this.handleChangeOne}
            >
              <option value="1">Musical</option>
              <option value="2">Comedy</option>
              <option value="3">Documentary</option>
              <option value="4">Action</option>
              <option value="5">Suspense</option>
              <option value="6">Drama</option>
              <option value="7">Mystery</option>
            </select>
            <div>
            <img src = {this.state.imageSrc} height="150" width="200" />
            <input type='file' accept="image/*" onChange = {this.showPreview}/>
            </div>
            <input type="submit" class="fadeIn" value="List Item" />
          </form>
        </div>
      </div>
    );
  }
}

export default ProductsForm;
