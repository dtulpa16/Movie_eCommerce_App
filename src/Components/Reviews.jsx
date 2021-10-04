import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

//This fetches the rating (1-5) of the product 
//The product ID is being passed in as props from the products list component
const Reviews = (props) => {
    const [rating, setRating] = useState([''])
    async function getProductRatingReview(props) {
        try {
            let response = await axios.get(`https://localhost:44394/api/reviews/rating${props}`).then(response => setRating(response.data));
            return response.data;
        } catch (ex) {
            console.log("API call failed");
        }
    }
//Establishes first thing that will be ran
    useEffect(() => {
        getProductRatingReview(props.product)
    },[props])


    return ( 
        <div>
                {rating}/5 Stars
        </div>
    );
}

export default Reviews;