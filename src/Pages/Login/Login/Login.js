

import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Toast from 'react-bootstrap/Toast';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('')
    const { providerLogin, signIn, createUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
            })
            .catch(error => console.error(error))

    }

    const handleEmailPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div>
                <Button onClick={handleGoogleSignIn} variant="outline-secondary" className='mb-3'>Login with Google</Button>
                <br></br>
                <Button onClick={handleEmailPassword} variant="outline-secondary" className='mb-3'>Login with Email and Password</Button>
                <br></br>
                <Button variant="outline-secondary" className='mb-3'>Login with Github</Button>
            </div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger mt-4">
                        {error}
                    </Form.Text>


                </Form>
                <Button variant="primary" className='mt-4 '> <Link to='/register' className='text-white'>Register</Link></Button>

            </div>

        </div>


    );
};

export default Login;