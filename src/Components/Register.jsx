import axios from 'axios';
import React,{ Component} from 'react';
import './app.css'

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
     }

  handleChange=(event) =>{
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  //once the form is submitted, an object is created. The values on the left should match the name of the rows in the table
  handleSubmit=(event) =>{
    event.preventDefault()
    let aUser ={
      'firstname' : this.state.firstName,
      'lastname': this.state.lastName,
      'username': this.state.userName,
      'password': this.state.password,
      'email': this.state.userEmail,
      // 'addressLine1': this.state.addressLine1,
      // 'city': this.state.city,
      // 'state': this.state.state,
    }  
    // The object we created is then passed into a function where we post the new user to the user table
      this.addNewUser(aUser)
  };

  async addNewUser(newUser){
    await axios.post(`https://localhost:44394/api/authentication`, newUser).then(response => {alert("Registration complete! You may now login.")})
  }


  render() { 
    return ( 
    <div className='regwrapper regfadeInDown'>
    <div id='registerContent'>
      <form className="register" onSubmit={this.handleSubmit}>

      <input placeholder="First Name" id="reginput" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>

      <input placeholder="Last Name" id="reginput" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>

      <input placeholder="Username" id="reginput" name="userName" onChange={this.handleChange} value={this.state.userName}/>

      <input placeholder="Password" id="reginput" name="password" onChange={this.handleChange} value={this.state.password}/>

      <input placeholder="Email" id="reginput" name="userEmail" onChange={this.handleChange} value={this.state.userEmail}/>

      <button type = "submit">Create account</button>
      </form></div>
      </div>
     );
  }
}
 
 export default Register
