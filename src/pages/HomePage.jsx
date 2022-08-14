import React, { Component, Fragment } from 'react'
import Analysis from '../components/Analysis/Analysis';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import RecentProject from '../components/RecentProject/RecentProject';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';


class HomePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="CWS - Home" />
                <TopBanner />
                <Welcome />
                <Services />
                <Analysis />
                <Summary />
                <RecentProject />
                <Courses />
                <Video />
                <ClientReview />
                <AboutMe />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage
