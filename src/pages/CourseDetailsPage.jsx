import React, { Component } from 'react'
import { Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AppUrl from '../RestApi/AppUrl'
import RestClient from '../RestApi/RestClient'

class CourseDetailsPage extends Component {

    constructor({match}){
        super();
        this.state = {
            MyCourseId: match.params.courseID,
            CourseData: [],
            CourseName: match.params.courseName
        }
    }

    componentDidMount() {
        window.scroll(0, 0)

        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
            this.setState({ CourseData: result });
        })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation  title="CWS - Course Details" />               
                <PageTop pagetitle={this.state.CourseName}/>
                <CourseDetails courseallData={this.state.CourseData} />
                <Footer />
            </Fragment>
        )
    }
}

export default CourseDetailsPage
