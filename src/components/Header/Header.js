import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
                {
                    user? <button onClick={handleSignOut}>sign out</button> :<a href="/Login">Login</a>
                }
                
                <a href="/SignUp">SignUp</a>
            </div>
        </nav>
    );
};

export default Header;