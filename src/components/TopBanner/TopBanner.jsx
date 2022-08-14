import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


class TopBanner extends Component {

    constructor(){
        super();
        this.state = {
            title: "",
            subtitle: "",
            loaderClass: "text-center",
            mainDivClass: "d-none"
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({
            // title:result[0]['home_title'],
            // subtitle:result[0]['home_subtitle'], 
            title:'Code With Sujay',
            subtitle: 'Professional Website', 
            loaderClass: "d-none", mainDivClass: "text-center"});
       }).catch(error=>{
        this.setState({title: '???', subtitle: '???'});
    });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.loaderClass}>
                                <Spinner />
                                </Col>
                                <Col className={this.state.mainDivClass}>
                                    <Fade top big cascade>
                                <h1 className="topTitle">
                                    {this.state.title}
                                    {/* CodeWithSujay */}
                                  
                                    </h1>
                                </Fade>
                                <Flip top cascade>
                                <h4 className="topSubTitle">
                                    {this.state.subtitle}
                                    {/* Professional Website */}
                                  
                                    </h4>
                                </Flip>
                                
                                <Button variant="primary">Learn More</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                </Container>
            </Fragment>
        )
    }
}

export default TopBanner
