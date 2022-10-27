import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Course = () => {
    const course = useLoaderData();
    const { tittle, image, id, description } = course;
    console.log(course)
    return (
        <div className='grid md:grid-cols-2 '>
            <Card className="text-center mb-4 p-0 grid md:grid-cols-2">

                <Card.Body className=''>
                    {/* <Card.Title>{tittle}</Card.Title> */}
                    <Card.Title> {tittle} </Card.Title>
                    <Card.Img variant="top" src={image} />
                    <Card.Text>
                        {description}

                    </Card.Text>

                </Card.Body>
                <Button variant="outline-primary">Get premimum access</Button>

            </Card>
        </div>
    );
};

export default Course;