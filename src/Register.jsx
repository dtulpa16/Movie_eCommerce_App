import axios from 'axios';
import React,{ Component} from 'react';

class Register extends Component {
    state = { 
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      userEmail:'',
      password:'',
      addressLine1:'',
      city:'',
      state:'',
      zipCode:'',
     }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit=(event) =>{
    event.preventDefault();
    let aUser ={
      'firstname' : this.state.firstName,
      'lastname': this.state.lastName,
      'username': this.state.userName,
      'password': this.state.password,
      'email': this.state.userEmail,
      'addressLine1': this.state.addressLine1,
      'city': this.state.city,
      'state': this.state.state,
      'zipCode' : this.state.zipCode,
    }  

      this.addNewUser(aUser)
  };

  async addNewUser(newUser){
    await axios.post(`https://localhost:44394/api/authentication`,newUser)
  }


  render() { 
    return ( 
    <ul>
      <form className="form" onSubmit={this.handleSubmit}>
      <li><label>First Name</label></li>
      <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
      <li><label>Last Name</label></li>
      <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
      <li><label>Username</label></li>
      <input name="userName" onChange={this.handleChange} value={this.state.userName}/>
      <li><label>Password</label></li>
      <input name="password" onChange={this.handleChange} value={this.state.password}/>
      <li><label>Email</label></li>
      <input name="userEmail" onChange={this.handleChange} value={this.state.userEmail}/>
      <li><label>State</label></li>
      <input name="state" onChange={this.handleChange} value={this.state.state}/>
      <li><label>Address Line 1</label></li>
      <input name="addressLine1" onChange={this.handleChange} value={this.state.addressLine1}/>
      <li><label>city</label></li>
      <input name="city" onChange={this.handleChange} value={this.state.city}/>
      <li><label>Zip Code</label></li>
      <input type = "number" name="zipCode" onChange={this.handleChange} value={this.state.zipCode}/>
      <button type = "submit">Create account</button>
      </form>
      </ul>
     );
  }
}
 
 export default Register
