import React, { Component, Fragment } from 'react'
import AboutDesc from '../components/AboutDesc/AboutDesc'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation  title="CWS - About Me" />               
                <PageTop pagetitle="About Me" />
                <AboutMe />
                <AboutDesc />
                <Footer />
            </Fragment>
        )
    }
}

export default AboutPage
