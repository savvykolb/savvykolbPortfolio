import React from "react";
import { Container, Row, Col } from "react-grid-system";

const education = [
    {
        title: "Coding: Full Stack Web Development Certificate",
        subtitle: "University of North Carolina at Chapel Hill",
        description: "A rigorous curriculum that ensured proficiency in: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.",
        date: "2021",
        icon: "ti-desktop",
    },
    {
        title: "Bachelor of Arts in Liberal Studies & Humanities",
        subtitle: "California State University, San Bernardino",
        description: "A multidisciplinary degree program designed for students whose needs or interests require a more broadly based liberal arts curriculum than is possible through existing disciplines. This program is useful for careers requiring a broad educational background and strong communication, computer, research, and critical thinking skills.",
        date: "2013",
        icon: "ti-book",
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
        description: "•  Using Angular 12, Angular Material, and AWS to create new and update current UI/UX for current clients  •  Works directly with clients on developing new applications for their specific needs  •  Collaborate with the dev team on different permutations to find the best solution possible  •  Works in an agile environment  •  Personally responsible for over a third of front end code base  •  Responsible for new application launching nationwide  •  Partnered with UX Designer to help develop new style guides  •  Assists senior mobile developer 10 hours a week (Kotlin, Android)  •",
        date: "2021 - Present",
        icon: "ti-pencil-alt",
    },
    {
        title: "Web Development Tutor",
        subtitle: "Freelance | Greensboro, NC",
        description: "•  Assist students with activities, homework, or projects they are struggling with  •  Research and answer all student questions  •  Help encourage and guide students to problem solve and write clean and efficient code  •  Provide empathy, support, and encouragement while engaging students  •",
        date: "2021 - Present",
        icon: "ti-heart",
    },
    {
        title: "Mathematics Teacher",
        subtitle: "Guilford County Schools | Greensboro, NC",
        description: "•  Created detailed lesson plans according to state standards & the educational needs, abilities, and achievement of the individual students and groups of students in my classroom  •  Consistently averaged 20% higher than school average & 10% higher than district average for state testing  •  Attained Rookie Teacher of the Year Award in 2018  •",
        date: "2018 - 2021",
        icon: "ti-bar-chart-alt",
    },
    {
        title: "Executive Team Leader - Human Resources",
        subtitle: "Target | Manhattan Beach, CA",
        description: "•  Led all human resources functions for 300 employees  •  Achieved and maintained the best team member turnover rate in the district  •  Attained a team survey score, a tool to assess employee morale, of 86%;  best in the district  •  Recruited and supported the hiring of over 150 people per holiday season  •",
        date: "2016 - 2018",
        icon: "ti-receipt",
    },
    {
        title: "Production Manager",
        subtitle: "MotorTrend Group | El Segundo, CA",
        description: "•  Designed and controlled production budgets for large events and production shoots  •  Devised and applied best management practices and executed shows and events within budget parameters  •  Implemented product analysis and innovative strategies that doubled YouTube views  •",
        date: "2013 - 2016",
        icon: "ti-camera",
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
        </section >
    );
}

export default Resume;
