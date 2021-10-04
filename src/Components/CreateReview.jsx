import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const CreateReview = (props) => {
    const [review, setReview] = useState([''])
    const [rating, setRating] = useState(0)
    const [product, setProduct] = useState()
//First thing to happen in this component is setting the product variable above to the product we are trying to review
//Props is being passed in from the products list component
    useEffect(() => {
        setProduct(props.product)
    },[props]);

    const handleChange = (event)=>{
        setReview(event.target.value);
      };
    
    // A second handle change is used here from the "number of stars rating" because that variable need to be an integer.
    // If we had used the other "handleChange", the star rating would be a string, which the database wouldnt accept it because we established that that had to be an integer(on the backend)
    const handleChangeOne = (event) =>{
        setRating (parseInt(event.target.value));
      };

    //once the form is submitted, an object is created. The values on the left should match the name of the rows in the table
    const handleSubmit =(event)=>{
        event.preventDefault();
        let newReview= {
            Rating:rating,
            Body:review,
            productId: product
        }
    // The object we created is then passed into a function where we post the new user to the user table
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