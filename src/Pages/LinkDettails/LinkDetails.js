import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LinkDetails = () => {
    const allCpurses = useLoaderData()
    console.log(allCpurses)
    return (
        <div>
            <h2>details</h2>
        </div>
    );
};

export default LinkDetails;