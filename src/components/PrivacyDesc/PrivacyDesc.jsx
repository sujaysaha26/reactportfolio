import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import WentWrong from '../WentWrong/WentWrong';
import Fade from 'react-reveal/Fade';

class PrivacyDesc extends Component {

    constructor(){
        super();
        this.state = {
            aboutdesc: "...",
            spinner: true,
            error: false
        }
    }
    
    // componentDidMount(){
    //     RestClient.GetRequest(AppUrl.Information).then(result=>{
    //         if (result == null) {
    //             this.setState({ error: true, spinner: false })
    //         } else {
    //         this.setState({aboutdesc: result[0]['privacy'], spinner: false});
    //         }
    //    }).catch(error=>{
    //        this.setState({error: true, spinner: false})
    //    })
    // }

    render() {

        if(this.state.spinner == true){
            return <Spinner />
        } else if(this.state.spinner == false) {

        return (
            <Fragment>
                <Container>
                    <Row className="mt-5">
                        <Col lg={12} md={12} sm={12}>
                            <Fade right>
                        {/* { ReactHtmlParser(this.state.aboutdesc) } */}
                        There is no Privacy Rule for now.
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

export default PrivacyDesc
