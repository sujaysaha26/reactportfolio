import React, { Component, Fragment } from 'react'
import { Modal, Col, Container, Row, Button } from 'react-bootstrap'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import VideoUrl from '../../../src/asset/videos/video.mp4'
import Spinner from '../Spinner/Spinner'
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            video_desc: "",
            video_url: "",
            spinner: true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeVideo).then(result => {
            this.setState({ 
            // video_desc: result[0]['video_desc'],
            // video_url: result[0]['video_url'],
            video_desc: '<p style={{textAlign: \'justify\'}} className=\"seviceDesc\">My name is Sujay Saha, I am a college Student right now but I love to spend my free time renovating my home, playing games and specially web designing and hosting them. I use React JS for my Front-End and Django or Laravel as my Back-End. JavaScript is one of my Favorite language.<br/><br/>\r\n\r\nI have studied maths but have always been interested in web development. It\'s my second web page with React JS. I am gonna make it look cool within a few weeks, since there is a tons of work to do, eventually I don\'t get time for my own website to design.<br/><br/>\r\n\r\nI\'m highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision.</p><br/><br/>',
            video_url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            spinner: false
            });
            
        })
    }

        modalClose = () => this.setState({ show: false })
        modalOpen = () => this.setState({ show: true })

    render() {

        if(this.state.spinner == true){
            return <Spinner />
        }else {

        return (
            <Fragment>
                <Container className="text-center">
                    <Bounce right cascade>
                    <h1 className="serviceMainTitle">ALL VIDEOS</h1>
                    <div className="bottom"></div></Bounce>
                    <Row>
                        <Col lg={6} md={6} sm={12} style={{textAlign: 'justify'}} className="videoText">
                            <Roll left>
                            {ReactHtmlParser(this.state.video_desc)}
                            </Roll>
                        </Col>

                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon onClick={this.modalOpen} className="iconProject videoIcon" icon={faVideoSlash} />

                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player src={VideoUrl}>
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
        }
    }
}

export default Video
