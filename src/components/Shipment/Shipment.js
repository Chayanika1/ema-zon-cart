import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    
    //const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const[user] = useAuthState(auth)
    //const navigate = useNavigate()
    const handelNameBlur=(e)=>{
        setName(e.target.value)
    }
    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handelPhoneNumberBlur = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handelCreateUser = (e) => {
        const shipping={name,email,address,phoneNumber}
        console.log(shipping)
        e.preventDefault()
        
       
    }
    return (
        <div className='form-Container'>
                <div>
                    <h2 className='form-title'> Shipping Information </h2>
                    <form onSubmit={handelCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="name">Your name</label>
                            <input onBlur={handelNameBlur} type="text" name="name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">email</label>
                            <input value={user?.email} readOnly onBlur={handelEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handelAddressBlur} type="text" name="address" id="" required />

                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone-number">Phone-number</label>
                            <input onBlur={handelPhoneNumberBlur} type="text" name="phoneNumber" id="" />

                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input type="submit" value="Add shipping" className='form-submit' />



                    </form>
                    


                </div>


            </div>

    );
};

export default Shipment;