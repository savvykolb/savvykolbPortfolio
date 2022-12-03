import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaGithub, FaLink } from "react-icons/fa";
// Components
import Headline from "../../components/common/Headline";


const portfolio = [
    {
        name: "Fun Projects",
        items: [
            {
                id: 0,
                title: "Mountain Springs Ranch",
                link: "https://www.basenjidog.net",
                github: "https://github.com/savvykolb/mountain-springs-ranch",
                subtitle: "React / Node.js / JavaScript / CSS",
                src: "/assets/images/portfolio/MSR.jpg",
                thumbnail: "/assets/images/portfolio/MSR.jpg",
            },
            // {
            //     id: 1,
            //     title: "ZEAL",
            //     link: "https://zeal3.herokuapp.com/",
            //     github: "https://github.com/snk923/ZEAL",
            //     subtitle: "React / Node.js / MongoDB / GraphQL",
            //     src: "/assets/images/portfolio/ZEAL.jpg",
            //     thumbnail: "/assets/images/portfolio/ZEAL.jpg",
            // },
            // {
            //     id: 2,
            //     title: "JetAway",
            //     link: "https://jetaway1.herokuapp.com/",
            //     github: "https://github.com/snk923/JetAway",
            //     subtitle: "HTML / CSS / JavaScript / Node.js / mySQL",
            //     src: "/assets/images/portfolio/JetAway.jpg",
            //     thumbnail: "/assets/images/portfolio/JetAway.jpg",
            // },
            {
                id: 1,
                title: "NoteTaker",
                subtitle: "JavaScript / Express.js / Node.js",
                link: "https://notetaker.onrender.com/",
                github: "https://github.com/savvykolb/notetaker",
                src: "/assets/images/portfolio/Notes.jpg",
                thumbnail: "/assets/images/portfolio/Notes.jpg",
            },
            {
                id: 2,
                title: "Weather Dashboard",
                link: "https://savvykolb.github.io/weather-dash/",
                github: "https://github.com/savvykolb/weather-dash",
                subtitle: "JavaScript / APIs",
                src: "/assets/images/portfolio/weather.jpg",
                thumbnail: "/assets/images/portfolio/weather.jpg",
            },

            {
                id: 3,
                title: "Workday Scheduler",
                subtitle: "JavaScript",
                link: "https://savvykolb.github.io/workdayScheduler/",
                github: "https://savvykolb.github.io/workdayScheduler/",
                src: "/assets/images/portfolio/planner.jpg",
                thumbnail: "/assets/images/portfolio/planner.jpg",
            },
            {
                id: 4,
                title: "Trivia Challenge",
                subtitle: "JavaScript",
                github: "https://github.com/savvykolb/workdayScheduler",
                link: "https://savvykolb.github.io/trivia-challenge/",
                src: "/assets/images/portfolio/quiz.jpg",
                thumbnail: "/assets/images/portfolio/quiz.jpg",
            },
        ],
    },
    // {
    //     name: "REACT",
    //     items: [
    //         {
    //             id: 0,
    //             title: "Mountain Springs Ranch",
    //             link: "https://www.basenjidog.net",
    //             github: "https://github.com/snk923/mountain-springs-ranch",
    //             subtitle: "React / Node.js / JavaScript / CSS",
    //             src: "/assets/images/portfolio/MSR.jpg",
    //             thumbnail: "/assets/images/portfolio/MSR.jpg",
    //         },
    //         {
    //             id: 1,
    //             title: "ZEAL",
    //             link: "https://jetaway1.herokuapp.com/",
    //             github: "https://github.com/snk923/ZEAL",
    //             subtitle: "React / Node.js / MongoDB / GraphQL",
    //             src: "/assets/images/portfolio/ZEAL.jpg",
    //             thumbnail: "/assets/images/portfolio/ZEAL.jpg",
    //         },
    //     ],
    // },
    // {
    //     name: "JavaScript",
    //     items: [
    //         {
    //             id: 0,
    //             title: "Weather Dashboard",
    //             link: "https://snk923.github.io/weather-dash/",
    //             github: "https://github.com/snk923/weather-dash",
    //             subtitle: "JavaScript / APIs",
    //             src: "/assets/images/portfolio/weather.jpg",
    //             thumbnail: "/assets/images/portfolio/weather.jpg",
    //         },
    //         {
    //             id: 1,
    //             title: "NoteTaker",
    //             subtitle: "JavaScript / Express.js / Node.js",
    //             link: "https://skolb-note-taker.herokuapp.com/notes",
    //             github: "https://github.com/snk923/notetaker",
    //             src: "/assets/images/portfolio/Notes.jpg",
    //             thumbnail: "/assets/images/portfolio/Notes.jpg",
    //         },
    //         {
    //             id: 2,
    //             title: "Workday Scheduler",
    //             subtitle: "JavaScript",
    //             link: "https://snk923.github.io/workdayScheduler/",
    //             github: "https://github.com/snk923/workdayScheduler",
    //             src: "/assets/images/portfolio/planner.jpg",
    //             thumbnail: "/assets/images/portfolio/planner.jpg",
    //         },
    //         {
    //             id: 3,
    //             title: "Trivia Challenge",
    //             subtitle: "JavaScript",
    //             github: "https://github.com/snk923/trivia-challenge",
    //             link: "https://snk923.github.io/trivia-challenge/",
    //             src: "/assets/images/portfolio/quiz.jpg",
    //             thumbnail: "/assets/images/portfolio/quiz.jpg",
    //         },
    //     ],
    // },
    // {
    //     name: "Full Stack",
    //     items: [
    //         {
    //             id: 0,
    //             title: "ZEAL",
    //             link: "https://jetaway1.herokuapp.com/",
    //             github: "https://github.com/snk923/ZEAL",
    //             subtitle: "React / Node.js / MongoDB / GraphQL",
    //             src: "/assets/images/portfolio/ZEAL.jpg",
    //             thumbnail: "/assets/images/portfolio/ZEAL.jpg",
    //         },
    //         {
    //             id: 1,
    //             title: "JetAway",
    //             link: "https://jetaway1.herokuapp.com/",
    //             github: "https://github.com/snk923/JetAway",
    //             subtitle: "HTML / CSS / JavaScript / Node.js / mySQL",
    //             src: "/assets/images/portfolio/JetAway.jpg",
    //             thumbnail: "/assets/images/portfolio/JetAway.jpg",
    //         },
    //     ],
    // },
];

function Portfolio() {
    // const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [setSelectedIndex] = useState(0);

    // const toggleLightbox = (index) => {
    //     setSelectedIndex(index);
    //     setLightboxIsOpen(!lightboxIsOpen);
    // };



    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See My Work" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {portfolio.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {portfolio.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={4} xl={4}>
                                            {console.log(item.github, " & ", item.link)}
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(https://www.savvykolb.com${item.src})` }} />
                                                    <div className="content">
                                                        <button>
                                                            <a target='_blank' rel="noopener noreferrer" href={item.link}><FaLink className="portfolio-icon" /></a>
                                                        </button>
                                                        <button>
                                                            <a target='_blank' rel="noopener noreferrer" href={item.github}><FaGithub className="portfolio-icon" /></a>

                                                        </button>
                                                        <span>{item.title}</span>
                                                        <h3>{item.subtitle}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
                {/* <ModalGateway>
                    {lightboxIsOpen ? (
                        <Modal onClose={toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway> */}
            </div>
        </section>
    );
}

export default Portfolio;
