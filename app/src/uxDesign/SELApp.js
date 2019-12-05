import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SELapp_style1 from '../images/SELapp_style1.jpg';
import SELapp_wireframes_landing from '../images/SELapp_wireframes_landing.jpg';
import SELapp_wireframes_admin1 from '../images/SELapp_wireframes_admin1.jpg';
import SELapp_wireframes_admin2 from '../images/SELapp_wireframes_admin2.jpg';
import SELapp_wireframes_admin3 from '../images/SELapp_wireframes_admin3.jpg';
import SELapp_wireframes_admin4 from '../images/SELapp_wireframes_admin4.jpg';
import SELapp_wireframes_admin5 from '../images/SELapp_wireframes_admin5.jpg';
import SELapp_wireframes_caregiver1 from '../images/SELapp_wireframes_caregiver1.jpg';
import SELapp_wireframes_caregiver2 from '../images/SELapp_wireframes_caregiver2.jpg';
import SELapp_wireframes_student1 from '../images/SELapp_wireframes_student1.jpg';
import SELapp_wireframes_student2 from '../images/SELapp_wireframes_student2.jpg';
import SELapp_wireframes_student3 from '../images/SELapp_wireframes_student3.jpg';
import SELapp_wireframes_student4 from '../images/SELapp_wireframes_student4.jpg';
import SELapp_wireframes_student5 from '../images/SELapp_wireframes_student5.jpg';
import SELapp_wireframes_teacher1 from '../images/SELapp_wireframes_teacher1.jpg';
import SELapp_wireframes_teacher2 from '../images/SELapp_wireframes_teacher2.jpg';
import SELapp_wireframes_teacher3 from '../images/SELapp_wireframes_teacher3.jpg';
import SELapp_wireframes_teacher4 from '../images/SELapp_wireframes_teacher4.jpg';

class SELApp extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h5>SELapp is a full-stack web application I am currently building with JavaScript, PostgreSQL, Express, Node, Bootstrap, and React. It is a social-emotional learning tool to promote awareness and communication for children.</h5>
                </Row>
                <Row>
                    <img
                        className='d-block w-25'
                        src={SELapp_style1} alt='SELapp Style Tile' />
                </Row>

                <Row>
                    <Carousel fade={true} interval={3000}>
                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_landing} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_admin1} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_admin2} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_admin3} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_admin4} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_admin5} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_caregiver1} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_caregiver2} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_student1} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_student2} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_student3} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_student4} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_student5} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_teacher1} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_teacher2} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_teacher3} alt='SELapp Wireframes' />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-25'
                                src={SELapp_wireframes_teacher4} alt='SELapp Wireframes' />
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        )
    }
}

export default SELApp;
