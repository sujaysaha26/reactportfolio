import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import AllProjects from '../components/AllProjects/AllProjects'

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="CWS - Portfolio" />               
                <PageTop pagetitle="Portfolio" />
                <AllProjects />
                <Footer />
            </Fragment>
           
        )
    }
}

export default PortfolioPage
