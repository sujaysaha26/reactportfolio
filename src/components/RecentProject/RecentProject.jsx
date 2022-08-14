import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Spinner from '../Spinner/Spinner';
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

class RecentProject extends Component {

  constructor(){
    super();
    this.state = {
        myData: [],
        spinner: true
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
        this.setState({myData: result, spinner: false});
   })
}


  render() {

    if(this.state.spinner == true){
      return <Spinner />
  }else {
    
    const MyList = this.state.myData;
        const MyView = MyList.map(MyList=>{
            return   <Col lg={4} md={6} sm={12}>
              <Zoom bottom>
            <Card className="projectCard">
              <Card.Img variant="top" style={{height: '200px'}} className="projectImages" src={MyList.img_one} />
              <Card.Body>
                <Card.Title className="serviceName"><b>{MyList.project_name}</b></Card.Title>
                <Card.Text className="serviceDesc">
                  {MyList.project_desc}
                </Card.Text>
                <Button variant="primary"><Link className="link-style" to={"/projectdetails/"+MyList.id+"/"+MyList.project_name}>Visit Site</Link></Button>
              </Card.Body>
            </Card></Zoom>
          </Col>
        })


    return (
      <Fragment>
        <Container className="text-center projectMedia">
          <Bounce top cascade>
          <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
          <div className="bottom"></div></Bounce>
          <Row>
         {MyView}
         <Col lg={4} md={6} sm={12}>
                              {/* <Zoom bottom> */}
                              {/* <Card className="projectCard">
                           <Card.Img variant="top" style={{height: '200px'}} className="projectImages" src="https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg" />
                           <Card.Body>
                             <Card.Title className="serviceName">Project Name One</Card.Title>
                             <Card.Text className="serviceDesc">
                               Some quick example text to build on the card title and make up the bulk of
                               the card's content.
                             </Card.Text>
                             <Button variant="primary">Vist WebSite</Button>
                           </Card.Body>
                         </Card>
                                                      </Col>
                         
                                                      <Col lg={4} md={6} sm={12}>
                         
                              <Card className="projectCard">
                           <Card.Img variant="top" style={{height: '200px'}} className="projectImages" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg" />
                           <Card.Body>
                             <Card.Title className="serviceName">Project Name Two</Card.Title>
                             <Card.Text className="serviceDesc">
                               Some quick example text to build on the card title and make up the bulk of
                               the card's content.
                             </Card.Text>
                             <Button variant="primary">Vist WebSite</Button>
                           </Card.Body>
                         </Card>
                                                      </Col>
                         
                         
                                                      <Col lg={4} md={6} sm={12}>
                              <Card className="projectCard">
                           <Card.Img variant="top" style={{height: '200px'}} className="projectImages" src="https://image.freepik.com/free-vector/online-courses-concept_23-2148533386.jpg" />
                           <Card.Body>
                             <Card.Title className="serviceName">Project Name Three</Card.Title>
                             <Card.Text className="serviceDesc">
                               Some quick example text to build on the card title and make up the bulk of
                               the card's content.
                             </Card.Text>
                             <Button variant="primary">Vist WebSite</Button>
                           </Card.Body>
                         </Card> */}
                         {/* </Zoom> */}
                                                      </Col>
    
          </Row>
        </Container>
      </Fragment>
    )
  }
  }
 }

export default RecentProject
