import {Switch, Route} from 'react-router-dom';
import React, {Component} from "react";
import './App.css'
import axios from "axios";
import { render } from 'react-dom';
import Home from './Home';
import BuyerHome from'./BuyerHome';
import CheckOut from './CheckOut';
import Login from './Login'
import ShoppingCart from'./ShoppingCart' 
import ProductDescription from './ProductDescription'
import ListItem from './ListItem'
import Register from './Register'
import NavBar from './NavBar';
// import jwtDecode 

class App extends Component{
    state = {}

    //  componentDidMount() {
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const user = jwtDecode(jwt);
    //         this.setState({user});
    //     }catch{

    //     }
    // }

render(){
    // const user = this.state.user;
        return(
            <div className = "App">
            <NavBar />   
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/user_home" component={BuyerHome}/>
                <Route path="/list_item" component={ListItem}/>
                <Route path="/product_description" component={ProductDescription}/>
                <Route path="/shopping_cart" component={ShoppingCart}/>
                <Route path="/checkout" component={CheckOut}/>
            </Switch>
        </div>
        )
    }
}
export default App;


