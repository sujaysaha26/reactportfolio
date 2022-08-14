import React, { Component, Fragment } from 'react'
import { Row, Container, Col, Form, Button } from 'react-bootstrap'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl'
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class ContactSec extends Component {

    constructor(){
        super();
        this.state = {
            address: "...",
            email: "...",
            phone: "...",
            spinner: true
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(result=>{
            this.setState({
        // address: result[0]['address'],
        // email: result[0]['email'],
        // phone: result[0]['phone'],
        address: 'Chhitka, Nadia, West Bengal, India',
        email: 'sujaysaha857@gmail.com',
        phone: 'Not Available',
        spinner: false
    
    });
            
       })
    }

    sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let jsonObject = {name: name, email: email, message: message}

        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result=>{
            alert("Thanks for contacting me, I will catch you soon.")
        }).catch((error) => {
            alert("Something wrong happens, please try again later.");
        })
    }

    render() {

        if(this.state.spinner == true){
            return <Spinner />
        }else {

        return (
            <Fragment>
                <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Zoom left cascade>
                        <h1 className="serviceName">Quick Connect</h1>
                        </Zoom>
                        <Form>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control id="name" type="text" placeholder="Enter Your Name" />
    </Form.Group>

    <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control id="email" type="email" placeholder="Enter Your Email" />
    </Form.Group>

    <Form.Group  className="mb-3">
    <Form.Label>Message</Form.Label>
    <Form.Control id="message" as="textarea" rows={3} />
    </Form.Group>
  <Button variant="primary" onClick={this.sendContact}>
    Submit
  </Button>
</Form>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <Zoom right cascade>
                        <h1 className="serviceName">Discuss Now</h1></Zoom>
                        <Fade bottom cascade>
                        <p className="serviceDesc">
                                {this.state.address}<br/>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}<br/>
                                <FontAwesomeIcon icon={faPhone} /> Phone : {this.state.phone}
                            </p> </Fade>
                    </Col>
                </Row>
                </Container>
            </Fragment>
        )
        }
    }
}

export default ContactSec
