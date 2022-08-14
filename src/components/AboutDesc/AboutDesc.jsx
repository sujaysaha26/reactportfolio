import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import WentWrong from '../WentWrong/WentWrong';
import Fade from 'react-reveal/Fade';

class AboutDesc extends Component {


    constructor() {
        super();
        this.state = {
            aboutdesc: "...",
            spinner: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result => {

            if (result == null) {
                this.setState({ error: true, spinner: false })
            } else {
                this.setState({ aboutdesc: result[0]['about'], spinner: false });
            }
        }).catch(error => {
            this.setState({ error: true, spinner: false })
        })
    }
    render() {

        if (this.state.spinner == true) {
            return <Spinner />
        } else if(this.state.spinner == false) {

            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={12} md={12} lg={12}>
                                <Fade left>
                                {/* {ReactHtmlParser(this.state.aboutdesc)} */}
                                <p>My name is Sujay Saha, I am a college Student right now but I love to spend my free time renovating my home, playing games and specially web designing and hosting them. I use React JS for my Front-End and Django or Laravel as my Back-End. JavaScript is one of my Favorite language.</p>\r\n\r\n<p>I have studied maths but have always been interested in web development. It\'s my second web page with React JS. I am gonna make it look cool within a few weeks, since there is a tons of work to do, eventually I don\'t get time for my own website to design.</p>\r\n\r\n<p>I\'m highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision.</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            )
        }
        else if (this.state.error == true) {
            return <WentWrong />
        }
    }
}

export default AboutDesc
