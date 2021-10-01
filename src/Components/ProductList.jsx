import React, {Component} from 'react';
import axios from "axios";
import { Route, Router } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';
import jwtDecode from 'jwt-decode';
import GetGenre from './GetGenre';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: [],
            search: '',
            user:''
         }
    }

    

    componentDidMount(){
        this.getProduct()
        this.getUser(localStorage)
    }

    async getUser(localStorage) {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch{
        }
        const response = await axios.get('https://localhost:44394/api/users', { headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({
            user: response.data.id
        })
    }
    
    async getProduct(){
        let response = await axios.get('https://localhost:44394/api/product')
        this.setState({
            product: response.data
        })
    }
    
    


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        this.filteredSearch()
    }

    async addItemToCart(element){
        alert(`${element.name} added to cart!`)
        let addToCart = {userId: this.state.user, productId: element.id, quantity:1}
        await axios.post(`https://localhost:44394/api/shoppingcart`,addToCart)
    }


    

    render() { 
        return (
        <React.Fragment>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Genre</th>
                        <th>Average Customer Rating</th>
                    </tr>
                </thead>
                {this.state.product.map((element) => <><tbody><tr class="active-row"><td>{element.name}</td> <td>{element.description}</td> <td>{element.price}</td><td><GetGenre product = {element.name}/></td><td><Reviews product = {element.id}/></td><td><Link to ={{pathname: '/product_description', state:{product: [element]}}}>Product description</Link></td><td><button onClick={() => this.addItemToCart(element)}>Add to cart</button></td></tr></tbody></>)}
             
            </table>
            
        </React.Fragment> 
         );
    }
}
 
export default ProductList;