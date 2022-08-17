import React from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";

import { BsFillEnvelopeOpenFill, BsPhone } from "react-icons/bs"
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Contact() {
    return (
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/contactMe.png)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Interested in working together?</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <br></br>
                                    <br></br>
                                    <p>Let's connect and create something cool!</p>
                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <div class="social-links">
                                                    <br></br>
                                                    <a target='_blank' rel="noopener noreferrer" href="tel:336-707-0007" class="phoneNumber"><BsPhone /></a>
                                                    <a target='_blank' rel="noopener noreferrer" href="mailto:savannahnkolb@gmail.com" class="email"><BsFillEnvelopeOpenFill /></a>
                                                    <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/savvykolb/" class="linkedin"><FaLinkedin /></a>
                                                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/snk923" class="gitHub"><FaGithub /></a>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
