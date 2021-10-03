import React, {useEffect, useState, Component} from "react";
import axios from "axios";
const DisplayReviews = (props) => {
    const [reviews, setReviews] = useState(['No reviews'])

    async function getReviews(product){
        await axios.get(`https://localhost:44394/api/reviews/${product}`).then(response=>{setReviews(response.data)})
        console.log(reviews) 
    }

    useEffect(()=>{
        getReviews(props.product.id)
    },[props,reviews])


    return ( 
        <div>
        {reviews.map((element)=><><p>{element.body}</p></>)}
        </div>
     );
}

export default DisplayReviews;