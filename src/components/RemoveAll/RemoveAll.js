import React from 'react';
import './RemoveAll.css';

const RemoveAll = (props) => {
    const{img,name,price,shipping,quantity} =props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=""/>
            </div>
             <div className='review-item-details-container'>
                 <div className='review-item-details'>
                     <p className='product-name'>{name}</p>
                     {name.length>20 ?name.slice(0,20)+ '...': name}
                     <p>price:<span>{price}</span></p>
                     <p><small>shipping:{shipping}</small></p>
                     <p><small>quantity:{quantity}</small></p>
                 </div>
                 <div className='delete-container'>
                     <button>delete</button>
                 </div>

             </div>
            
           
            
        </div>
    );
};

export default RemoveAll;