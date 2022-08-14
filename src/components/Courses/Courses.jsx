import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import RubberBand from 'react-reveal/RubberBand'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

class Courses extends Component {

    constructor(){
        super();
        this.state = {
            myData: [
                {id: '1', small_img: 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', short_title: 'Python', long_title: 'Python', short_desc: 'This is a short description about Python Course. Too view full click the below link'},
                {id: '2', small_img: 'https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg', short_title: 'Django', long_title: 'Python', short_desc: 'This is a short description about Django Course. Too view full click the below link'},
                {id: '3', small_img: 'https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg', short_title: 'JavaScript', long_title: 'Python', short_desc: 'This is a short description about JavaScript Course. Too view full click the below link'},
                {id: '4', small_img: 'https://image.freepik.com/free-photo/training-managers_1098-16067.jpg', short_title: 'React JS', long_title: 'Python', short_desc: 'This is a short description about React JS Course. Too view full click the below link'},
            ]
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData: result});
       })
    }
    
    render() {
        const MyList = this.state.myData;
        const MyView = MyList.map(MyList=>{
            return    <Col lg={6} md={12} sm={12}>
            <Row>
                
                <Col lg={6} md={6} sm={12} className="p-2">
                <RubberBand><img className="courseImage" src={MyList.small_img} alt="" /> </RubberBand>

                </Col>
               
                <Col lg={6} md={6} sm={12}>
                    <Slide left>
                <h4 style={{textAlign: 'justify'}} className="serviceName">{MyList.short_title}</h4>
                <p style={{textAlign: 'justify'}} className="serviceDesc">{MyList.short_desc}</p></Slide>
                <Link to={"/coursedetails/"+MyList.id+"/"+MyList.long_title} style={{float: 'left'}} className="courseViewMore">View Details</Link>
                </Col>
                
             
            </Row>
        </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <Zoom right cascade>
                <h1 className="serviceMainTitle">MY COURSES</h1>
                    <div className="bottom"></div></Zoom>
                    <Row>
                      {MyView}

                        
                    </Row>
                    {/* <Row>
          <Col lg={6} md={12} sm={12}>
              <Row>
               <Col lg={6} md={6} sm={12} className="p-2" >
     <img className="courseImage" src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg" />

               </Col>

               <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Laravel 8  </h5>
                    <p className="text-justify serviceDesc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="courseViewMore float-left" href="#" >View Details</a>
               </Col>


               <Col lg={6} md={6} sm={12} className="p-2">
     <img className="courseImage" src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg" />

               </Col>

               <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Laravel 8  </h5>
                    <p className="text-justify serviceDesc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="courseViewMore float-left" href="#" >View Details</a>
               </Col> 


               </Row> 
          </Col>

 


          <Col lg={6} md={12} sm={12}>
          <Row>
               <Col lg={6} md={6} sm={12} className="p-2">
     <img className="courseImage" src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg" />

               </Col>

               <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Laravel 8  </h5>
                    <p className="text-justify serviceDesc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="courseViewMore float-left" href="#" >View Details</a>
               </Col>


               <Col lg={6} md={6} sm={12} className="p-2">
     <img className="courseImage" src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg" />

               </Col>

               <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Laravel 8  </h5>
                    <p className="text-justify serviceDesc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="courseViewMore float-left" href="#" >View Details</a>
               </Col> 


               </Row> 
          </Col>
     </Row> */}
                </Container>
            </Fragment>
        )
    }
}

export default Courses
