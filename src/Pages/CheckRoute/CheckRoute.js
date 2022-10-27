import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckRoute = () => {
    const data = useLoaderData()
    const { tittle } = data;
    console.log(data)
    return (
        <div>
            <h4 className='text-2xl fw-bold  text-sky-900'>Welcome To The Premium Route!!!!!!!!!!!!</h4>
            {
                data.map(singleData => <div>
                    <p className='text-2xl text-indigo-400'>Id:{singleData.id}</p>
                    <p className='text-2xl text-indigo-400'>{singleData.tittle}</p>

                </div>)
            }
            {/* <p>{tittle}</p> */}
        </div>
    );
};

export default CheckRoute;