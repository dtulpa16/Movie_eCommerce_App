import {Switch, Route} from 'react-router-dom';
import React, {Component} from "react";
import './App.css'
import axios from "axios";
import { render } from 'react-dom';

class App extends Component{
    state = {
        user = null
    }

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
        }catch{

        }
    }

render(){
        return(
            <Div className = "App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/user_home" exact component={BuyerHome}/>
                <Route path="/list_item" exact component={ListItem}/>
                <Route path="/product_description" exact component={ProductDescription}/>
                <Route path="/shopping_cart" exact component={ShoppingCart}/>
                <Route path="/checkout" exact component={Checkout}/>
            </Switch>
        </Div>
        )
    }
}
export default App;


// function App(){
//     <Div className = "App">
//         <Switch>
//             <Route path="/" exact component={Home}/>
//             <Route path="/login" exact component={Login}/>
//             <Route path="/register" exact component={Register}/>
//             <Route path="/buyer_home" exact component={BuyerHome}/>
//             <Route path="/seller_home" exact component={SellerHome}/>
//             <Route path="/list_item" exact component={ListItem}/>
//             <Route path="/product_description" exact component={ProductDescription}/>
//             <Route path="/shopping_cart" exact component={ShoppingCart}/>
//             <Route path="/checkout" exact component={Checkout}/>
//         </Switch>
//     </Div>
// }