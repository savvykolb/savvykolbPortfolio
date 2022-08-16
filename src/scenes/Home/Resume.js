import React from "react";
import { Container, Row, Col } from "react-grid-system";
// Components
// import ProgressBar from "../../components/common/ProgressBar";

// const skills = [
//     {
//         title: "Web Design",
//         percent: 100,
//     },
//     {
//         title: "Mobile Apps",
//         percent: 90,
//     },
//     {
//         title: "Graphic Design",
//         percent: 75,
//     },
//     {
//         title: "Creativity",
//         percent: 90,
//     },
//     {
//         title: "Design Creation",
//         percent: 75,
//     },
//     {
//         title: "Marketing online",
//         percent: 90,
//     },
// ];
const education = [
    {
        title: "Coding: Full Stack Web Development Certificate",
        subtitle: "University of North Carolina at Chapel Hill",
        description: "A rigorous curriculum that ensured proficiency in: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.",
        date: "2021",
        icon: "ti-mouse-alt",
    },
    {
        title: "Bachelor of Arts in Liberal Studies & Humanities",
        subtitle: "California State University, San Bernardino",
        description: "A multidisciplinary degree program designed for students whose needs or interests require a more broadly based liberal arts curriculum than is possible through existing disciplines. This program is useful for careers requiring a broad educational background and strong communication, computer, research, and critical thinking skills.",
        date: "2013",
        icon: "ti-marker",
    },
    {
        title: "NC Teacher License",
        subtitle: "Mathematics 6-9",
        description: "",
        date: "2018",
        icon: "ti-ruler-alt-2",
    },
];
const experience = [
    {
        title: "Front End Engineer",
        subtitle: "DSD Partners | Richmond, VA",
        description: ["Using Angular 12, Angular Material, and AWS to create new and update current UI/UX for current clients", "Works directly with clients on developing new applications for their specific needs", "Collaborate with the dev team on different permutations to find the best solution possible", "Works in an agile environment",
        ],
        date: "2021 - Present",
        icon: "ti-pencil-alt",
    },
    {
        title: "Front-End Developer",
        subtitle: "Amazon INC | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-heart",
    },
    {
        title: "Back-End Developer",
        subtitle: "Facebook INC | New York",
        description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        date: "(2016-2018)",
        icon: "ti-paint-bucket",
    },
];

function Resume() {
    return (
        <section className="section section-resume section-resume-1">
            <div className="display-spacing">
                <header className="el-heading el-heading-center">
                    <div className="el-icon">
                        <h2 className="el-icon-title">
                            <span>RESUME</span>
                        </h2>
                    </div>
                    <h3>Education & Experience</h3>
                    <div className="divider divider-1-reverse divider-1-1"></div>
                    <div className="divider divider-1-reverse divider-1-2"></div>
                </header>
                <Container className="mb-spacing">
                    <Row>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Education</h4>
                                <ul>
                                    {education.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>{item.subtitle} | {item.date}</h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="resume-row">
                                <h4 className="resume-title">Experience</h4>
                                <ul>
                                    {experience.map((item, index) => (
                                        <li key={index}>
                                            <div className="resume-item">
                                                <div className="resume-head">
                                                    <div className="el-icon">
                                                        <span className={`el-icon-icon ${item.icon}`}></span>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <h6>
                                                        {item.subtitle} | <small>{item.date}</small>
                                                    </h6>
                                                </div>
                                                <div className="resume-body">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Container>
                    <Row>
                        {skills.map((item, index) => (
                            <Col key={index} sm={6} xl={4}>
                                <div className="skills-item">
                                    <ProgressBar label={item.title} percent={item.percent} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container> */}
            </div>
        </section>
    );
}

export default Resume;
