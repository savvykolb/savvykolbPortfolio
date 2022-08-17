import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";
// Components
import Headline from "../../components/common/Headline";

const testimonial1 = [
    {
        name: "Sandra Cyrus",
        type: "Client",
        post: "MSR Owner",
        content: "Savannah was amazing! She took the needs I had and transformed them into a great website that my customers can easily access and navigate. She has been so willing to make updates and feedback to adjust things as needed. I was so impressed by her efficiency and getting this site up and running. I would recommend her work to anyone! Thank you!",
    },
    {
        name: "Jocelyn Remington",
        type: "Peer",
        post: "UI/UX",
        content: "I have had the opportunity to work with Savannah many times throughout UNC's Full-Stack Bootcamp. She is one of my preferred partners in pair programming. She is knowledgeable, hard-working, diligent in problem-solving, and fun to work with.",
    },
];

const testimonial2 = [
    {
        name: "Santiago Palacios",
        type: "Peer",
        post: "Sales Engineer Manager",
        content: "Is always pleasure to work with Savannah. We worked together in our first project for UNC coding bootcamp and her drive to achieve excellence is out of this world! During our time working and studying together, Savannah always showed an incredible amount of professionalism, collaboration and drive to finish the project in time. Her capability to stay on track and calm under pressure is one of the things that makes working with Savannah always a pleasure and honor. I know that Savannah will excel in any challenge that is thrown to her. I will say it now and again: It is always a pleasure to work with someone that gives 200% effort every time.",
    },
    {
        name: "Noah King",
        type: "Instructor",
        post: "Senior Software Engineer",
        content: "Savannah was a student of mine at the UNC Coding Bootcamp. She is an amazing person to work with and teach. She has the proper mindset and drive to excel as a developer. She is able to understand new concepts quickly and helps others around her. I highly recommend her to anyone in need of a developer.",
    },
];

function Testimonial() {
    const sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className="section section-testimonial section-testimonial-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="testimonial" title="Recommendations Received" divider_1={true} position="center" />
                    <Row className="mb--15">
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial1.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial2.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;
