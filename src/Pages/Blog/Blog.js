import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-indigo-400 rounded-lg p-8 text-white my-2'>
                <h3>What is cors?</h3>
                <p>Answer:In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there. </p>
            </div>
            <div className='bg-indigo-400 rounded-lg p-8 text-white my-2'>
                <h3>why use firebase? another options of implement authentication</h3>
                <p>Answer:The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <p>another options for implement authentication
                    1. MongoDB. ...
                    2. Passport.
                    3. Okta.
                    4. JSON Web Token.
                    5. Keycloak.
                    6. Amazon Cognito.
                </p>
            </div >
            <div className='bg-indigo-400 rounded-lg p-8 text-white my-2'>
                <h3>How does the private route work</h3>
                <p>The private route component is used to protect selected pages in a React app from unauthenticated users.</p>
            </div>
            <div className='bg-indigo-400 rounded-lg p-8 text-white my-2' >
                <h3>What is Node ? How does Node work?</h3>
                <p>Node:Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

            </div>

        </div>
    );
};

export default Blog;