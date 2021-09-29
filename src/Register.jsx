import React,{ Component} from 'react';

class Register extends Component {
    state = { 
      firstName:'',
      lastName:'',
      loginName:'',
      userEmail:'',
      addressLine1:'',
      addressLine2:'',
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
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      loginName:this.state.loginName,
      userEmail:this.state.userEmail,
      addressLine1:this.state.addressLine1,
      addressLine2:this.state.addressLine2,
      city:this.state.city,
      state:this.state.state,
      zipCode:this.state.zipCode,
    }  
      this.props.newUser(aUser);
      this.setState({
        firstName:'',
        lastName:'',
        loginName:'',
        userEmail:'',
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        zipCode:'',
      });
  };


  render() { 
    return ( 
    
      <form className="form" onSubmit={(event) => this .handleSubmit (event)}>
      <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
      <label>First Name</label>
      <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
      <label>Last Name</label>
      <input name="loginName" onChange={this.handleChange} value={this.state.loginName}/>
      <label>login Name</label>
      <input name="userEmail" onChange={this.handleChange} value={this.state.userEmail}/>
      <label>Email</label>
      <input name="addressLine1" onChange={this.handleChange} value={this.state.addressLine1}/>
      <label>Address Line 1</label>
      <input name="addressLine2" onChange={this.handleChange} value={this.state.addressLine2}/>
      <label>Address Line 2</label>
      <input name="city" onChange={this.handleChange} value={this.state.city}/>
      <label>city</label>
      <input name="zipCode" onChange={this.handleChange} value={this.state.zipCode}/>
      <label>Zip Code</label>
      </form>
     );
  }
}
 
 export default Register
