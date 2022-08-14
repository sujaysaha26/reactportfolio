import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Services from '../components/Services/Services'
import ContactSec from '../components/ContactSec/ContactSec'

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="CWS - Service" />               
                <PageTop pagetitle="Services" />
                <Services />
                <ContactSec />
                <Footer />
            </Fragment>
        )
    }
}

export default ServicePage
