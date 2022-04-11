import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useProduct } from '../../hooks/products';
import { useCart } from '../../hooks/useCart';
import Cart from '../Product/Cart/Cart';
import RemoveAll from '../RemoveAll/RemoveAll';





const Orders = () => {
    const [products,setProducts]= useProduct()
    const [cart,setCart]= useCart(products);
    const navigate = useNavigate();
    
     
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product=><RemoveAll product={product}></RemoveAll>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                <button onClick={()=>navigate('/Shipment')}>Proceed Shipping</button>
            </div>
            
           
            
            
        </div>
    );
};

export default Orders;