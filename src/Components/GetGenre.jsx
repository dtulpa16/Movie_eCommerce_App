import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
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

    async genreType(){
        console.log(this.props.product)
        var search = (this.props.product).slice(0,4)
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