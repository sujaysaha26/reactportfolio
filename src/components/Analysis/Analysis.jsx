import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {Techonology:'PHP',Projects:100},
                {Techonology:'MySqli',Projects:90},
                {Techonology:'Laravel',Projects:95},
                {Techonology:'React',Projects:85},
                {Techonology:'Opencart',Projects:80},
                {Techonology:'Vue Js',Projects:70},
                {Techonology:'Django',Projects:60},
                {Techonology:'JavaScript',Projects:100} 
            ],
            techdesc: "<p>My name is Sujay Saha, I am a college Student right now but I love to spend my free time renovating my home, playing games and specially web designing and hosting them. I use React JS for my Front-End and Django or Laravel as my Back-End. JavaScript is one of my Favorite language.</p>\r\n\r\n<p>I have studied maths but have always been interested in web development. It\'s my second web page with React JS. I am gonna make it look cool within a few weeks, since there is a tons of work to do, eventually I don\'t get time for my own website to design.</p>\r\n\r\n<p>I\'m highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision.</p>",
            spinner: true
        }
    }

//     componentDidMount(){
//         RestClient.GetRequest(AppUrl.ChartData).then(result=>{
//             this.setState({data: result, spinner: false});
//        })

//        RestClient.GetRequest(AppUrl.HomeTechDesc).then(result=>{
//         this.setState({techdesc: '<p>My name is Sujay Saha, I am a college Student right now but I love to spend my free time renovating my home, playing games and specially web designing and hosting them. I use React JS for my Front-End and Django or Laravel as my Back-End. JavaScript is one of my Favorite language.</p>\r\n\r\n<p>I have studied maths but have always been interested in web development. It\'s my second web page with React JS. I am gonna make it look cool within a few weeks, since there is a tons of work to do, eventually I don\'t get time for my own website to design.</p>\r\n\r\n<p>I\'m highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision.</p>'});
//    })
//     }

    render() {

        // if(this.state.spinner == true){
        //     return <Spinner />
        // }else {

        var blue = "#051b35"
        return (
            <Fragment>
                <Container className="text-center">
                    <Zoom bottom cascade>
                    <h1 className="serviceMainTitle">PROGRAMMING LANGUAGE</h1></Zoom>
                    <div className="bottom"></div>
                    <Row>
                        <Col style={{height: '300px', float: 'right' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <RubberBand>
                            <p style={{textAlign: 'justify'}} className="serviceDesc">
                            { ReactHtmlParser(this.state.techdesc) }
                            </p></RubberBand>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
        }
    }
// }

export default Analysis
