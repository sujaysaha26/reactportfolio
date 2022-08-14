import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { faCheckSquare, faGlobe, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Jello from 'react-reveal/Jello';
import Swing from 'react-reveal/Swing';

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row style={{ marginTop: '20%' }}>
                                        <Col>
                                        <Jello>
                                            <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                                            <h1 className="countNumber">

                                                <CountUp start={0} end={35000} duration={2.5} suffix="+">
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1></Jello>
                                            <h4 className="countTitle">Students Worldwide</h4>
                                            <hr className="underLineCount" />
                                        </Col>
                                        <Col><Jello>
                                            <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                                            <h1 className="countNumber"><CountUp start={0} end={22} duration={2}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp></h1></Jello>
                                            <h4 className="countTitle">Courses Published</h4>
                                            <hr className="underLineCount" />
                                        </Col>
                                        <Col><Jello>
                                            <FontAwesomeIcon className="iconProject" icon={faStar} />
                                            <h1 className="countNumber"><CountUp start={0} end={2000} duration={2}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp></h1></Jello>
                                            <h4 className="countTitle">Students Reviews</h4>
                                            <hr className="underLineCount" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Swing>
                                            <Card.Title className="cardTitle">What I have Acheived</Card.Title>
                                            <Card.Text>
                                                <p style={{ textAlign: 'justify' }} className="cardsubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}></FontAwesomeIcon> Required Gathering</p>
                                                <p style={{ textAlign: 'justify' }} className="cardsubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}></FontAwesomeIcon> System Analysis</p>
                                                <p style={{ textAlign: 'justify' }} className="cardsubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}></FontAwesomeIcon> Coding Testing</p>
                                                <p style={{ textAlign: 'justify' }} className="cardsubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare}></FontAwesomeIcon> Implementation</p>
                                            </Card.Text>
                                            </Swing>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Summary