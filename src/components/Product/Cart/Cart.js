import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}= props;
    console.log(cart)
     let total = 0;
     let shipping = 0;
     let allTotal = 0;
     
     for( const all of cart){
         total = total + all.price;
         shipping = shipping + all.shipping;
        
         allTotal=allTotal+ total+shipping;
     }
     const tax = (total*0.1).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>All Total:${total}</p>
                <p>shipping:${shipping}</p>
                <p>Tax:${tax}</p>
                <h1>Grand Total: ${allTotal}</h1>
            
        </div>
    );
};

export default Cart;