import {Switch, Route} from 'react-router-dom';
import React, {Component} from "react";
import './App.css'
import axios from "axios";
import { render } from 'react-dom';
import './Home';
import './BuyerHome';
import './CheckOut';
import './Login'
import './ShoppingCart' 
import './ProductDescription'

class App extends Component{
    state = {
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch{

        }
    }

render(){
        return(
            <div className = "App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/user_home" component={BuyerHome}/>
                <Route path="/list_item" component={ListItem}/>
                <Route path="/product_description" component={ProductDescription}/>
                <Route path="/shopping_cart" component={ShoppingCart}/>
                <Route path="/checkout" component={Checkout}/>
            </Switch>
        </div>
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