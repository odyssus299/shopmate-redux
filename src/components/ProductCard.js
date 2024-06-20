import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { add, remove } from "../store/cartSlice";

import "./ProductCard.css";


export const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const {id, name, price, image} = product;
  const products = useSelector(state => state.cartState.cartList);
  const [inCart, setIncart] = useState(false);

  useEffect(() => {
    const productIn = products.find(item => item.id === id);
    
    if (productIn ) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [products, id])
  console.log(inCart);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        { inCart ?  <button className='remove' onClick={() => dispatch(remove(product))}>Remove</button> : <button onClick={() => dispatch(add(product))}>Add To Cart</button> }
        
      </div>
    </div>
  )
}
