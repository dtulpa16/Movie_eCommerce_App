import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const CreateReview = (props) => {
    const [review, setReview] = useState([''])
    const [rating, setRating] = useState(0)
    const [product, setProduct] = useState()

    useEffect(() => {
        setProduct(props.product)
    },[props]);

    const handleChange = (event)=>{
        setReview(event.target.value);
      };
    
    const handleChangeOne = (event) =>{
        setRating (parseInt(event.target.value));
      };

    const handleSubmit =(event)=>{
        event.preventDefault();
        let newReview= {
            Rating:rating,
            Body:review,
            productId: product
        }
          addNewReview(newReview)
      }
      async function addNewReview(newReview){
        await axios.post(`https://localhost:44394/api/reviews`,newReview);
      }


    return ( 
        <React.Fragment>
                 <form className= "reviews" onSubmit={(event) => handleSubmit (event)}>
                <label>Leave a Review</label>
                <input name= "review" onChange={handleChange} value={review}/>
                <label>Rating</label>
                <select id="rating" name="rating" type = "number" value={rating}onChange={handleChangeOne}>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <button type = "submit">Post review</button>
                </form> 
        </React.Fragment>
     );
}

export default CreateReview;