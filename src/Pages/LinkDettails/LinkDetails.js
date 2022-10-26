import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LinkDetails = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h2>linkdetails{courses.tittle}</h2>
        </div>
    );
};

export default LinkDetails;