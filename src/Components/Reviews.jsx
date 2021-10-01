import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


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

    useEffect(() => {
        getProductRatingReview(props.product)
    },[props])

    // map the ratings and reviews so they can be displayed with each product

    return ( 
        <div>
                {rating}
        </div>
    );
}

export default Reviews;