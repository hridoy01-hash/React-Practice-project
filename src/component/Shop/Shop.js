import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const savedCart = getStoredCart()
        console.log(savedCart);
    },[])
    const handleAddToCart = (products)=>{
        const newCart =[...cart,products]
        setCart(newCart);
        addToDb(products.key);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
               {
                   products.map(product => <Product product={product} key={product.key}
                   handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className="cart-container">
               <Cart Cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;