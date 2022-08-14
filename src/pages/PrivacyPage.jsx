import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDesc from '../components/PrivacyDesc/PrivacyDesc'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <Fragment>
            <TopNavigation  title="CWS - Privacy Policy" />               
           <PageTop pagetitle="Privacy Policy" />
           <PrivacyDesc />
           <Footer />
       </Fragment>
            </Fragment>
        )
    }
}

export default PrivacyPage
