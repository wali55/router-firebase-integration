import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
            <form>
                <input type="email" placeholder="Your Email"/>
                <br />
                <input type="password" placeholder="Your Password"/>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;