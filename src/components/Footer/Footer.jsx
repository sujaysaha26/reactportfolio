import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faLinkedin , faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import WentWrong from '../WentWrong/WentWrong';

class Footer extends Component {

    constructor(){
        super();
        this.state = {
            address: "...",
            email: "...",
            phone: "...",
            github: "...",
            linkedin: "...",
            codepen: "...",
            footer_credit: "...",
            loaderClass: "p-5 text-justify",
            mainDivClass: "d-none",
            error: false
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(result=>{
            if (result == null) {
                this.setState({ error: true, spinner: false })
            } else {
            this.setState({
                // address: result[0]['address'],
                // email: result[0]['email'],
                // phone: result[0]['phone'],
                // github: result[0]['github'],
                // linkedin: result[0]['linkedin'],
                // codepen: result[0]['codepen'],
                // footer_credit: result[0]['footer_credit'],
                // loaderClass: "d-none",
                // mainDivClass: 'p-5 text-justify'
                address: 'Chhitka, Nadia, West Bengal, India',
                email: 'sujaysaha857@gmail.com',
                phone: 'Currently Not Available',
                github: 'www.github.com',
                linkedin: 'www.linkedlin.com',
                codepen: 'www.codepen.com',
                footer_credit:'Copyright 2021-22 by CodeWithSujay, All Rights Reserved.',
                loaderClass: "d-none",
                mainDivClass: 'p-5 text-justify'
            });
        }
        
       }).catch(error => {
        this.setState({ error: true, spinner: false })
    })
    }

    render() {

        if(this.state.error == false){

        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                   
                        <Col lg={3} md={6} sm={12} className="p-5 text-center">
                            <h2 className="text-center footerName">Follow Me</h2>

                            <div className="socialContainer">
                            <a className="facebook social" target="_blank" href={this.state.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a className="github social" target="_blank" href={this.state.github}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a className="twitter social" target="_blank" href={this.state.codepen}>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            </div>

                        </Col>

                        <Col className={this.state.loaderClass}>
                                <Spinner />
                                </Col>

                        <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                            <h2 className="footerName">Address</h2>
                            <p className="footerDesc">
                                {this.state.address}<br/>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : sujaysaha857@gmail.com<br/>
                                <FontAwesomeIcon icon={faPhone} /> Phone : Not Available
                            </p>                           
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Information</h2>
                            <Link to="/about" className="footerLink">About Me</Link><br/>
                            <Link to="/service" className="footerLink">Services</Link><br/>
                            <Link to="/contact" className="footerLink">Contact Me</Link>
                            
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy</h2>
                            
                            <Link to="/terms" className="footerLink">Terms and Conditions</Link><br/>
                            <Link to="/refund" className="footerLink">Refund Policy</Link><br/>
                            <Link to="/privacy" className="footerLink">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                <p className="copyrightLink">&copy; {this.state.footer_credit}</p>
                </Container>
            </Fragment>
        )
        }  else if (this.state.error == true) {
            return <WentWrong />
        }
    }
}

export default Footer
