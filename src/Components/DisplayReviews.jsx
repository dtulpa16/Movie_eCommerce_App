import React, {useEffect, useState, Component} from "react";
import axios from "axios";


const DisplayReviews = (props) => {
    const [reviews, setReviews] = useState(['No reviews'])

    async function getReviews(product){
        await axios.get(`https://localhost:44394/api/reviews/${product}`).then(response=>{setReviews(response.data)})
        console.log(reviews) 
    }
//First thing to run will be a function that will fetch the written reviews of each product based on the id. 
//Props is being passed in from the products list page.
    useEffect(()=>{
        getReviews(props.product.id)
    },[reviews])


    return ( 
        <div>
        {reviews.map((element)=><><p>{element.body}</p></>)}
        </div>
     );
}

export default DisplayReviews;