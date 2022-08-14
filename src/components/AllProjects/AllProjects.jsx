import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl'
import Spinner from '../Spinner/Spinner';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class AllProjects extends Component {

  constructor(){
    super();
    this.state = {
        myData: [],
        spinner: true,
        error: false
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
      if (result == null) {
        this.setState({ error: true, spinner: false })
    } else {
        this.setState({myData: result, spinner: false});
    }
   }).catch(error=>{
    this.setState({error: true, spinner: false})
   })
}

    render() {

    //   if(this.state.spinner == true){
    //     return <Spinner />
    // }  else if(this.state.spinner == false) {

    //   const MyList = this.state.myData;
    //   const MyView = MyList.map(MyList=>{
    //     return  <Col lg={4} md={6} sm={12}>
    //     <Card className="projectCard">
    //       <Zoom top>
    //       <Card.Img variant="top" style={{height: '200px'}} className="projectImages" src={MyList.img_one} /></Zoom>
    //       <Card.Body>
    //         <Fade top>
    //         <Card.Title className="serviceName"><b>{MyList.project_name}</b></Card.Title>
    //         <Card.Text className="serviceDesc">
    //           {MyList.project_desc}
    //         </Card.Text>
    //         <Button variant="primary"><Link className="link-style" to={"/projectdetails/"+MyList.id+"/"+MyList.project_name}>Visit Site</Link></Button>
    //         </Fade>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    //   })

        return (
            <Fragment>
        <Container className="text-center">
          <Zoom right cascade>
          <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
          <div className="bottom"></div></Zoom>
          <Row>
           {/* {MyView} */}
          </Row>
        </Container>
      </Fragment>
        )
    }
  //   else if (this.state.error == true) {
  //     return <WentWrong />
  // }
    }
// }

export default AllProjects
