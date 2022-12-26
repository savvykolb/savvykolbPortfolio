import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";
// Components
import Headline from "../../components/common/Headline";


const testimonial1 = [
    {
        name: "Noah King",
        type: "Full Stack Instructor",
        post: "Senior Software Engineer",
        content: "Savannah was a student of mine at the UNC Coding Bootcamp. She is an amazing person to work with and teach. She has the proper mindset and drive to excel as a developer. She is able to understand new concepts quickly and helps others around her. I highly recommend her to anyone in need of a developer.",
    },
    {
        name: "Josh Knell",
        type: "Executive Management",
        post: "Director of Instructional Design at BloomTech",
        content: "Savannah, is an incredible mind and I really enjoyed our short time together. She put together some of the best early lesson plans we have had here at BloomTech. Her lesson plans and wisdom will persist on.",
    },
    {
        name: "Mallory Milara ",
        type: "Manager",
        post: "Instructional Leader",
        content: "Savannah and I worked closely together at BloomTech, where she served as a QA Coordinator, managing and supporting the QA process for over fifty instructors. Though I only had the privilege of working with Savannah a few short months, I can confidently say she is one of the most passionate, dedicated, and skilled instructional coaches I’ve had the opportunity to lead in my ten years of school leadership. Savannah is hardworking, devoted, data driven, and constantly going above and beyond to meet her teachers’ needs. While at BloomTech, Savannah managed the instructor QA process and ensured all fifty instructors received monthly evaluations. After each month, she worked to create individual support plans for struggling teachers, ensuring they had concrete next steps and support to improve. She has a keen eye for strong instruction and the ability to walk into any classroom and instantly pick up on what is going well and what needs to be improved. Savannah is a go-getter. When she saw that web orientation wasn’t successful, she took it upon herself to completely rewrite the curriculum, roll it out to instructors, and coach it to instructors to ensure it was being implemented as envisioned. This type of initiative, enthusiasm, and dedication is a culture add to any company. All this being said, I am blessed to have worked alongside Savannah- she truly made me a better leader.",
    },
    {
        name: "Sandra Cyrus",
        type: "Client",
        post: "MSR Owner",
        content: "Savannah was amazing! She took the needs I had and transformed them into a great website that my customers can easily access and navigate. She has been so willing to make updates and feedback to adjust things as needed. I was so impressed by her efficiency and getting this site up and running. I would recommend her work to anyone! Thank you!",
    },
    {
        name: "Santiago Palacios",
        type: "Peer",
        post: "Sales Engineer Manager",
        content: "Is always pleasure to work with Savannah. We worked together in our first project for UNC coding bootcamp and her drive to achieve excellence is out of this world! During our time working and studying together, Savannah always showed an incredible amount of professionalism, collaboration and drive to finish the project in time. Her capability to stay on track and calm under pressure is one of the things that makes working with Savannah always a pleasure and honor. I know that Savannah will excel in any challenge that is thrown to her. I will say it now and again: It is always a pleasure to work with someone that gives 200% effort every time.",
    },
    {
        name: "Jocelyn Remington",
        type: "Peer",
        post: "UI/UX Designer",
        content: "I have had the opportunity to work with Savannah many times throughout UNC's Full-Stack Bootcamp. She is one of my preferred partners in pair programming. She is knowledgeable, hard-working, diligent in problem-solving, and fun to work with.",
    },

];

// const testimonial2 = [

// ];

function Testimonial() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <section className="section section-testimonial section-testimonial-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="testimonial" title="Recommendations Received" divider_1={true} position="center" />
                    <Row className="mb--15">
                        <Col lg={12} xl={12} className="mb-15">
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
                        {/* <Col lg={6} xl={6} className="mb-15">
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
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;
