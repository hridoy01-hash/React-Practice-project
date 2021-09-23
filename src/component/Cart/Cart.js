import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {Cart} = props;
   let total = 0;
   for (const product of Cart) {
       total = Math.ceil(total + product.price);
       
   }
    return (
        <div style={{position:'fixed'}}>
             <h2>Order Summary</h2>
             <h3>Iteam Order:{props.Cart.length}</h3>
             <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;