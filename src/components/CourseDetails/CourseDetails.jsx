import { faCheckSquare, faClipboard, faClock, faClone, faTags, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import Video from '../../../src/asset/videos/video.mp4'


class CourseDetails extends Component {

    constructor(props){
        super();
    }

    render() {

        let LongTitle = "";
        let LongDesc = "";
        let TotalDuration = "";
        let TotalStudent = "";
        let TotalLecture = "";
        let SkillAll = "";
        let VideoUrl = "";
        let SmallImg = "";
        let ShortTitle = "";

        let CourseDetailsArray = this.props.courseallData;
        if(CourseDetailsArray.length == 1){
            LongTitle = CourseDetailsArray[0]['long_title'];
            LongDesc = CourseDetailsArray[0]['long_desc'];
            TotalDuration = CourseDetailsArray[0]['total_duration'];
            TotalStudent = CourseDetailsArray[0]['total_student'];
            TotalLecture = CourseDetailsArray[0]['total_lecture'];
            SkillAll = CourseDetailsArray[0]['skill_all'];
            VideoUrl = CourseDetailsArray[0]['video_url'];
            SmallImg = CourseDetailsArray[0]['small_img'];
            ShortTitle = CourseDetailsArray[0]['short_title']

        }


        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                     
    <img className="courseDetaisImg" src={SmallImg} alt="" />
    <br></br> <br></br>
    <p className="CoruseallDescription">
   {LongDesc}
    </p>
                        </Col>


                        <Col lg={4} md={6} sm={12}>
                        <div class="widget_feature">
<h4 class="widget-title text-center">Course Features</h4>
<hr />
<ul>
<li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {TotalStudent} </li>

<li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> {TotalDuration} </li>

<li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {TotalLecture}</li>

<li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>

<li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> {ShortTitle}</li>

<li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Sujay Saha</li>

</ul>
<div class="price-wrap text-center">
<h5>Price:<span> Free</span></h5>
<Button variant="warning">Unavailable</Button>

</div>
</div>        

                        </Col>
                    </Row>
                </Container>

<br/><br/>
<Container>
    <Row>
        <Col  lg={6} md={6} sm={12}>
<div className="widget_feature">
    <h1>Skill You Need</h1>
    <hr />
    <ul>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Full Free Course</li>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> It will never Release</li>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> I have nothing to write</li>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Paid Course in Free</li>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Not Bad</li>
        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Really, I guess so.</li>
    </ul>

</div>
</Col>


        <Col lg={6} md={6} sm={12}>
        <Player src={Video} >
      <BigPlayButton position="center" />
    </Player>

        </Col>
    </Row>
</Container>


            </Fragment>
        )
    }
}

export default CourseDetails
