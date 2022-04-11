import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassWord] = useState('');
    
    const handleEmailBlur=(e)=>{
        setEmail(e.target.value);
    }
     const handlePassWordBlur=(e)=>{
         setPassWord(e.target.value);
     }
     
     const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleUserSignIn=(e)=>{
          e.preventDefault();
          signInWithEmailAndPassword(email,password)

      }
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';
      if(user){
          navigate(from,{replace:true});

      }
      
      
    return (
        <div className='form-Container'>
            <div>
                <h2 className='form-title'> Login </h2>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassWordBlur} type="password" name="password" id="" required />

                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input type="submit" value="Login" className='form-submit' />



                </form>
                <p className='description'>New to ema-john? <Link className='form-link' to="/signup">Create an account </Link></p>
                <button className='my-button'><i class="fa-brands fa-google"></i>Continue withGoogle  </button>


            </div>


        </div>
    );
};

export default Login;