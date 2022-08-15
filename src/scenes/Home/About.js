import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

function About() {
    return (
        <section className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="about-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/about/aboutMe.png)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="about-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">ABOUT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Hello, I am Savannah Kolb.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>I'm a North Carolina based Software Engineer. Currently, I am part of DSD Partners' new venture, building inventory managment software. Being that DSD Partners is a relatively small company going through a period of rapid growth, I have been able to dip my toes in a multitide of expierences when it comes to the web development field. My love for creating beautiful and performant products with delightful user experiences has led my career calling to be focused on the Front End. </p>
                                    <p>In my freetime, I use my previous teaching skills to help future developers by tutoring. I have had the priveledge to grow my skills, and stay current, while helping students grow their knowledge.</p>
                                    <p>When I am not coding, you will find me with an iced coffee in hand, enjoying time in the sun with my husband, daughter, and two dogs.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Web design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-image"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Graphic Design</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-brush-alt"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Development</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Mobile Apps</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>UI/UX Designer</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-mobile"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Marketing Online</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default About;
