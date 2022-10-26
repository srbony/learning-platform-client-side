import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LinkDetails from '../LinkDettails/LinkDetails';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">



                        {/* {
                            courses.map(course => <LinkDetails
                               
                                key={course.id}
                                course={course}
                            >
                            </LinkDetails>)
                        } */}
                        {
                            courses.map(course => <p
                                key={course.id}>
                                <Link to={`/course/${course.id}`}>{course.tittle}</Link>
                            </p>)
                        }

                    </Col>
                    <Col lg="9">
                        {
                            courses.map(course => <SingleCourse
                                key={course.id}
                                course={course}
                            >

                            </SingleCourse>)
                        }
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Courses;