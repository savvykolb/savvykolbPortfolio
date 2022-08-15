import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import { FaAngular, FaBootstrap, FaCss3, FaGithub, FaGitlab, FaHtml5, FaJsSquare, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb, SiMaterialUi } from "react-icons/si";

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
                                    <p>I'm a North Carolina based Software Engineer. Currently, I am part of DSD Partners' new venture, building inventory management software. Being that DSD Partners is a relatively small company going through a period of rapid growth, I have been able to dip my toes in a multitude of experiences when it comes to the web development field. My love for creating beautiful and performant products with delightful user experiences has led my career calling to be focused on the Front End. </p>
                                    <p>In my freetime, I use my previous teaching skills to help future developers by tutoring. I have had the privilege to grow my skills, and stay current, while helping students grow their knowledge base.</p>
                                    <p>When I am not coding, you will find me with an iced coffee in hand, enjoying time in the sun with my husband, daughter, and two dogs.</p>
                                </header>
                                <Row className="pt-30">
                                    <Col lg={7}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Programming Languages & Tools</h5>
                                                <h4>
                                                    <FaReact className="icon" />
                                                    <FaAngular className="icon" />
                                                    <FaJsSquare className="icon" />
                                                    <SiTypescript className="icon" />
                                                    <FaHtml5 className="icon" />
                                                    <FaCss3 className="icon" />
                                                    <FaNodeJs className="icon" />
                                                    <FaNpm className="icon" />
                                                    <SiMysql className="icon" />
                                                    <SiMongodb className="icon" />
                                                    <FaBootstrap className="icon" />
                                                    <SiMaterialUi className="icon" />
                                                    <FaGithub className="icon" />
                                                    <FaGitlab className="icon" />
                                                </h4>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
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
