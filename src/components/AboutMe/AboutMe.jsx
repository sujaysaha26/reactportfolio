import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Face from '../../asset/images/face.png'
import { init } from 'ityped'
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom'

class AboutMe extends Component {


    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Professional Web Developer!', 'Professional Web Designer!'] })
    }

    render() {

   

        return (
            <Fragment>
                <Container className="text-center">
                    <Zoom left cascade>
                <h1 className="serviceMainTitle">ABOUT ME</h1>
                    <div className="bottom"></div></Zoom>
                    <Row>
                        <Col  className="centerItem" lg={6} lg={6} sm={12}>
                        <Rotate top left cascade>
                            <div className="aboutMyImageBg">
                               
                            <img className="aboutImage" src={Face} alt="" />
                            </div></Rotate>
                        </Col>

                        <Col lg={6} lg={6} sm={12}>
                            <div className="aboutMeBody">
                                <h2 className="aboutMeDetails">Hi, There I'm</h2>
                                <h3 className="aboutMeTitle">Sujay Saha</h3>
                                <h3 className="aboutMeDetails">Work as <span id="myElement"></span></h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
        }
    
}

export default AboutMe
