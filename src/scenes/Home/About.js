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
                                    <div className="image overlay-image" style={{ backgroundImage: `url(https://www.savvykolb.com/assets/images/about/aboutMe.png)` }}></div>
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
                                    <p>I am a North Carolina based Software Engineer. I have had the opportunity to dip my toes in a multitude of experiences when it comes to the web development field. I have been able to offer an adaptable and vision-driven approach to decision making, strategic planning, and tactical implementation for any team I have been fortunate to work with. With previous experiences, I have stepped up to the challenge of meshing my passion for team work and my love for creating beautiful and performant products with delightful user experiences. In my free time, I use my previous education skills to help future developers by tutoring. I have had the privilege to grow my skills, and stay current, while helping and supporting the next generation of developers to grow their knowledge base. </p>

                                    <p>Recently, I was informed that my position, along with many others, will be eliminated due to economic reasons. My final day with BloomTech will be January 31, 2023. Though I was so grateful for the team I worked with and all the skills gained, I am looking forward to the next great opportunity. </p>

                                    <p>I would love the chance to chat about any and all new exciting opportunities! Please do not hesitate to reach out. </p>
                                </header>
                                <Row className="pt-30">
                                    <Col>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Technical Skills</h5>
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
                                    {/* <Col lg={7}>
                                        <div className="el-card-icon">
                                            <div className="el-icon">
                                                <span className="el-icon-icon ti-ruler-pencil"></span>
                                            </div>
                                            <div className="content">
                                                <h5>UI/UX Designer</h5>
                                                <p>Lorem ipsum dolor sit amet Consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </Col> */}
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
