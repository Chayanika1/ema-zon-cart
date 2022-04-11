import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handelconfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handelCreateUser = (e) => {
        if (password !== confirmPassword) {
            setError('your confirm password did not match');
            return;
        }
        createUserWithEmailAndPassword(email, password)
        e.preventDefault()
    }
    if (user) {
        navigate('/Shop')
    }
    return (
        <div>
            <div className='form-Container'>
                <div>
                    <h2 className='form-title'> Signup </h2>
                    <form onSubmit={handelCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="email">email</label>
                            <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handelPasswordBlur} type="password" name="password" id="" required />

                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">confirm-Password</label>
                            <input onBlur={handelconfirmPasswordBlur} type="password" name="confirm-password" id="" required />

                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input type="submit" value="Signup" className='form-submit' />



                    </form>
                    <p className='description'>Already have an account? <Link className='form-link' to="/Login">Login </Link></p>
                    <button className='my-button'><i class="fa-brands fa-google"></i>Continue withGoogle  </button>


                </div>


            </div>

        </div>
    );
};

export default SignUp;