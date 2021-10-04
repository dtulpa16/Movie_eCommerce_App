import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import GetGenre from './GetGenre';
import CreateReview from './CreateReview';
import DisplayReviews from './DisplayReviews';

function ProductDescription(props) {
  const [product, setProduct] = useState([''])

//Props in this function is the entire product object. This is mapped through to display the information
  return ( 
      <React.Fragment>
      {props.location.state.product.map((element) => 
      <>
      <h3>Title: {element.name}</h3><hr/>
      <h5>Movie Description: {element.description}</h5>
      <h5>Price: ${element.price}</h5>
      <Link to ={{pathname: '/products'}}>Back to Products</Link><hr/>
      <h3>Reviews</h3>
      <DisplayReviews product ={element}/>
      <CreateReview product={element.id}/>
      </>)}
      </React.Fragment>
   );
}

export default ProductDescription;