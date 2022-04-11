import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const{cart}= props;
    console.log(cart)
     let total = 0;
     let shipping = 0;
     
     
     for( const all of cart){
         total = total + all.price;
         shipping = shipping + all.shipping;
        
         
     }
     const tax =Number( (total*0.1).toFixed(2));
     const allTotal=total+shipping+tax;
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