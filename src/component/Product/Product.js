import React from 'react';
import './Product.css'
const Product = (props) => {
     console.log(props.product);
     const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <p>price:{price}</p>
            <p>products are remaining {stock}</p>
            <p><small>by:{seller}</small></p>
            <button className="regular-btn" onClick={()=>props.handleAddToCart(props.product)}>Add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;