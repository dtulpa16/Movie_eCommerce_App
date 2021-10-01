import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function ProductDescription(props) {
  const [product, setProduct] = useState([''])


  return ( 
      <React.Fragment>
      {props.location.state.product.map((element) => <><h4>Title: {element.name}</h4><h5>Movie Description: {element.description}</h5>  <h5>Price: {`$`,element.price}</h5><Link to ={{pathname: '/products'}}>Back to Products</Link></>)}
      </React.Fragment>
   );
}

export default ProductDescription;