import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

//This component fetches the genre of the product.
//Because we didnt have a "genre" row in our table, we had to utilize the search endpoint we created as a workaround.
//This endpoint when tested in postaman returned the product as well as all the linked foreign key data. The genre was one of these datapoints
class GetGenre extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genre:[]
         }
    }
    componentDidMount() {
        this.genreType()
    }

    //If we had a genre field in our products table, we wouldnt need to use this function, as we could just map through it on the products list page.
    async genreType(){
        console.log(this.props.product)
        var search = (this.props.product).slice(0,6)
        var response = await axios.get(`https://localhost:44394/api/product/searchresults${search}`)
        this.setState({
            genre:response.data
        })
        
    }
    
    render() { 
        return ( 
            <React.Fragment>
            {this.state.genre.map((element) => <tr>{element.genres.type}</tr>)}
            </React.Fragment>
         );
    }
}
 
export default GetGenre;

// function GetGenre(props) {
//     const [genre,setGenre] = useState([])

    // async function genreType(props){
    //     let response
    //     console.log(genre)
    //     response = await axios.get(`https://localhost:44394/api/product/searchresults/`,props).then(response=>{setGenre(response.data)})
    //     console.log(response)
    // }

//     useEffect (()=>{
//         genreType(props.product)
        
//     }, [])

//     return ( 
//         <React.Fragment>
//         {genre.map((element) => <tr>{element.genres.type}</tr>)}
//         </React.Fragment>
//      );
// }

// export default GetGenre;