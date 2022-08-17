import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Components
import Headline from "../../components/common/Headline";


const portfolio = [
    {
        name: "All Work",
        items: [
            {
                id: 0,
                title: "Mountain Springs Ranch",
                link: "https://www.basenjidog.net",
                github: "https://github.com/snk923/mountain-springs-ranch",
                subtitle: "React / Node.js / JavaScript / CSS",
                src: "/assets/images/portfolio/MSR.jpg",
                thumbnail: "/assets/images/portfolio/MSR.jpg",
            },
            {
                id: 1,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/ZEAL.jpg",
                thumbnail: "/assets/images/portfolio/ZEAL.jpg",
            },
            {
                id: 2,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/JetAway.jpg",
                thumbnail: "/assets/images/portfolio/JetAway.jpg",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/weather.jpg",
                thumbnail: "/assets/images/portfolio/weather.jpg",
            },
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/Notes.jpg",
                thumbnail: "/assets/images/portfolio/Notes.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/planner.jpg",
                thumbnail: "/assets/images/portfolio/planner.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/quiz.jpg",
                thumbnail: "/assets/images/portfolio/quiz.jpg",
            },
            // {
            //     id: 7,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-8.jpg",
            //     thumbnail: "/assets/images/portfolio/1-8.jpg",
            // },
            // {
            //     id: 8,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-9.jpg",
            //     thumbnail: "/assets/images/portfolio/1-9.jpg",
            // },
            // {
            //     id: 9,
            //     title: "Crearive Design",
            //     subtitle: "Branding",
            //     link: "/portfolio-details",
            //     src: "/assets/images/portfolio/1-10.jpg",
            //     thumbnail: "/assets/images/portfolio/1-10.jpg",
            // },
        ],
    },
    {
        name: "Web Design",
        items: [
            {
                id: 0,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-1.jpg",
                thumbnail: "/assets/images/portfolio/1-1.jpg",
            },
            {
                id: 1,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-2.jpg",
                thumbnail: "/assets/images/portfolio/1-2.jpg",
            },
            {
                id: 2,
                title: "Crearive Design",
                link: "/portfolio-details",
                subtitle: "Web Design",
                src: "/assets/images/portfolio/1-3.jpg",
                thumbnail: "/assets/images/portfolio/1-3.jpg",
            },
            {
                id: 3,
                title: "Crearive Design",
                subtitle: "Web Design",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-4.jpg",
                thumbnail: "/assets/images/portfolio/1-4.jpg",
            },
        ],
    },
    {
        name: "Mobile Apps",
        items: [
            {
                id: 4,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-5.jpg",
                thumbnail: "/assets/images/portfolio/1-5.jpg",
            },
            {
                id: 5,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-6.jpg",
                thumbnail: "/assets/images/portfolio/1-6.jpg",
            },
            {
                id: 6,
                title: "Crearive Design",
                subtitle: "Mobile Apps",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-7.jpg",
                thumbnail: "/assets/images/portfolio/1-7.jpg",
            },
        ],
    },
    {
        name: "Branding",
        items: [
            {
                id: 7,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-8.jpg",
                thumbnail: "/assets/images/portfolio/1-8.jpg",
            },
            {
                id: 8,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-9.jpg",
                thumbnail: "/assets/images/portfolio/1-9.jpg",
            },
            {
                id: 9,
                title: "Crearive Design",
                subtitle: "Branding",
                link: "/portfolio-details",
                src: "/assets/images/portfolio/1-10.jpg",
                thumbnail: "/assets/images/portfolio/1-10.jpg",
            },
        ],
    },
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
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3}>
                                            {console.log(item.github, " & ", item.link)}
                                            <div className="portfolio-item">
                                                <div className="portfolio-card">
                                                    <div className="image overlay-image" style={{ backgroundImage: `url(${item.src})` }} />
                                                    <div className="content">
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <a target='_blank' rel="noopener noreferrer" href={item.link}><span className="el-icon-icon ti-link"></span></a>
                                                        </button>
                                                        <button className="button button-circle button-icon button-circle-md button-primary">
                                                            <a target='_blank' rel="noopener noreferrer" href={item.github}><span className="el-icon-icon ti-github"></span></a>

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
