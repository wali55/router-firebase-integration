import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css';
import app from '../../firebase.init'

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                {
                    user && <Link to="/vip">VIP</Link>
                }
                {user?.displayName && user.displayName}
                {user?.uid ? <button onClick={() => signOut(auth)}>Sign Out</button> : <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default Header;