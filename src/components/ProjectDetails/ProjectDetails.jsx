import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl'
import ReactHtmlParser from 'react-html-parser'



class ProjectDetails extends Component {

    constructor(props){
        super();
        this.state = {
            MyProjectId: props.id,
            img_two: "...",
            project_name: "...",
            project_desc: "...",
            project_features: "...",
            live_preview: "...",
            spinner: true
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectId).then(result=>{
            this.setState({
            img_two: result[0]['img_two'],
            project_name: result[0]['project_name'],
            project_desc: result[0]['project_desc'],
            project_features: result[0]['project_features'],
            live_preview: result[0]['live_preview'],
            spinner: false
        });
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5 text-center">
                    <Row>
                    <Col lg={4} md={6} sm={12}>
     <div className="about-thumb-wrap after-shape">
          <img className="projectDetImg" src={this.state.img_two} alt="" />
     </div>
     </Col>

     <Col lg={8} md={6} sm={12}>
          <div className="project-details">
             <h1 className="projectDetailsText">{this.state.project_name}</h1>  
             <p className="detailsName">{ ReactHtmlParser(this.state.project_desc) }</p>

             <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> { ReactHtmlParser(this.state.project_features)} </p>

          <Button variant="info" href={this.state.live_preview}>Live Preview</Button>


          </div>

     </Col>


                        </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ProjectDetails


