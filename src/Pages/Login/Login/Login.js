

import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="outline-secondary" className='mb-3'>Login with Google</Button>
            <br></br>
            <Button variant="outline-secondary" className='mb-3'>Login with Email and Password</Button>
            <br></br>
            <Button variant="outline-secondary" className='mb-3'>Login with Github</Button>
        </div>
    );
};

export default Login;