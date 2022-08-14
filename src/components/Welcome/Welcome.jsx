import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageone from '../../asset/images/page1.png';
import pagetwo from '../../asset/images/page2.png';
import pagethree from '../../asset/images/page3.png';

import imgone from '../../asset/images/19.png';
import imgtwo from '../../asset/images/20.png';
import imgthree from '../../asset/images/21.png';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className="intro-area--top">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="section-title text-center">
                                    <div className="intro-area-inner">
                                        <h6 className="sub-title double-line">WELCOME</h6>
                                        <Flip top>
                                        <h2 className="maintitle">
                                            An exemplary<br></br>
                                            learning community
                                        </h2>
                                        </Flip>


                    <Container className="text-center mt-5">
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <Slide top>
                                <img src={pageone} alt="" /></Slide>
                                <Pulse>
                                <h1 className="serviceName">Easy As it Gets </h1>
                                <p className="serviceDesc">Lorem ipsum dolor</p></Pulse>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                            <Slide top><img src={pagetwo} alt="" /></Slide>
                            <Pulse><h1 className="serviceName">Teach The way you want </h1>
                                <p className="serviceDesc">Lorem ipsum dolor</p></Pulse>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                            <Slide top><img src={pagethree} alt="" /></Slide>
                            <Pulse><h1 className="serviceName">The small matter  </h1>
                                <p className="serviceDesc">Lorem ipsum dolor</p></Pulse>
                            </Col>
                        </Row>

                        <Row className="intro-footer bg-base text-center mt-5">

                            <Col lg={4} md={6} sm={12}>

                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="sideImg" src={imgone} alt="" />
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify homeIntro">Development</h5>
                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                    </Col>
                                </Row>
                            </Col>



                            <Col lg={4} md={6} sm={12}>

                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="sideImg" src={imgtwo} alt="" />
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify homeIntro">Web Design</h5>
                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>

                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="sideImg" src={imgthree} alt="" />
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify homeIntro">Ecommerce</h5>
                                        <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome