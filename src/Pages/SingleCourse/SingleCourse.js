import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { tittle, image, id, description } = course;
    // console.log(course)
    return (
        <div className=''>
            <Card className="text-center mb-4 p-0 ">

                <Card.Body className=' '>
                    <Card.Title>{tittle}</Card.Title>
                    {/* <Card.Title> <Link to={`/course/${id}`}>{tittle}</Link> </Card.Title> */}
                    <Card.Img variant="top" src={image} />
                    <Card.Text>
                        {
                            description?.length > 250 ?
                                <p>{description.slice(0, 250) + '...'} <Link to={`/course/${id}`}>Read more...</Link> </p>
                                :
                                <p>{description}</p>
                        }

                    </Card.Text>

                </Card.Body>

            </Card>

        </div>

    );
};

export default SingleCourse;