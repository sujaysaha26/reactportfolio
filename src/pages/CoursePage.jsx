import React, { Component, Fragment } from 'react'
import AllCourses from '../components/AllCourses/AllCourses'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'


class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="CWS - All Courses" />               
                <PageTop pagetitle="All Courses" />
                <AllCourses />
                <Footer />
            </Fragment>
        )
    }
}

export default CoursePage
