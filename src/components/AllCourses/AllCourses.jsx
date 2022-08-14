import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl'
import Spinner from '../Spinner/Spinner';
import WentWrong from '../WentWrong/WentWrong';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

class AllCourses extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            spinner: true,
            error: false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            if (result == null) {
                this.setState({ error: true, spinner: false })
            } else {
            this.setState({data: result, spinner: false});
            }
       }).catch(error=>{
        this.setState({error: true, spinner: false})
       })
    }
    render() {

        if(this.state.spinner == true){
            return <Spinner />
        } else if(this.state.spinner == false) {

        const MyList = this.state.data;
        const MyView = MyList.map(MyList=>{
            return             <Col lg={6} md={12} sm={12}>
            <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                    <Slide top><img className="courseImage" src={MyList.small_img} alt="" /></Slide>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <Jump>
                <h4 style={{textAlign: 'justify'}} className="serviceName">{MyList.short_title}</h4>
                <p style={{textAlign: 'justify'}} className="serviceDesc">{MyList.short_desc}.</p></Jump>
                <Link to={"/coursedetails/"+MyList.id+"/"+MyList.long_title} style={{float: 'left'}} className="courseViewMore">View Details</Link>
                </Col>
            </Row>
        </Col>
        })

        return (

            <Fragment>
                <Container className="text-center">
                    <Zoom left cascade>
                <h1 className="serviceMainTitle">MY COURSES</h1>
                    <div className="bottom"></div></Zoom>
                    <Row>
            {MyView}

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

export default AllCourses
