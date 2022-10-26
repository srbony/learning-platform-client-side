import React from 'react';

const SingleCourse = ({ course }) => {
    const { tittle, image } = course;
    console.log(course)
    return (
        <div>

            <h2 className='text-2xl'>{tittle}</h2>
            <div className='"grid grid-cols-2 '>
                <div>
                    <img className='w-50 rounded-md shadow-lg h-30' src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default SingleCourse;