import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Product/Cart/Cart';
import Product from '../Product/Product';
import { getStoredCart, addToDb } from '../Storage/Storage';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) =>{
        //console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to='/Orders'>Order review</Link>
            </div>
        </div>
    );
};

export default Shop;