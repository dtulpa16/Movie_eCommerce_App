import React, {Component} from 'react';
import axios from "axios";
import { Route, Router } from 'react-router';
import { Link } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';
import jwtDecode from 'jwt-decode';
import GetGenre from './GetGenre';
import './ProductList.css';
import './Button.css';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: [],
            search: '',
            user:''
         }
    }

    //first things to run
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

    filteredSearch = () =>{
        let filteredResults = this.state.product.filter(product => {
            return product.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        this.setState({
            product : filteredResults
        })
    }
    

    render() { 
        return (
        <React.Fragment>

            {console.log(this.state.user.id)}
            <h1>Movies For Sale</h1>
            <table class="rwd-table">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Genre</th>
                        <th>Average Customer Rating</th>
                        <th>            
                        <form onSubmit = {this.handleSubmit}>
                        <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/> 
                        <button type = 'submit'>Search!</button>
                    </form> 
                    </th>
                    </tr>
                {this.state.product.map((element) => <><tbody>{console.log(element)}
                    <tr class="active-row">
                        <td data-th="Movie Title">{element.name}</td>
                        <td data-th="Genre">{element.description}</td> 
                        <td data-th="Gross">{element.price}</td>
                        <td data-th="Genre"><GetGenre product = {element.name}/></td>
                        <td><Reviews product = {element.id}/></td>
                        <td ><Link class="button_slide slide_left" to ={{pathname: '/product_description', state:{product: [element]}}}>Product description</Link></td>
                        <td><div class="button_slide slide_left" onClick={() => this.addItemToCart(element)}>Add to cart</div></td>
                     </tr>
                     </tbody></>)}
             
            </table>
            
        </React.Fragment> 
         );
    }
}
 
export default ProductList;