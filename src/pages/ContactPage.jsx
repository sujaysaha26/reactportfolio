import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import ContactSec from '../components/ContactSec/ContactSec'

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="CWS - Contact Me" />               
                <PageTop pagetitle="Contact Me" />
                <ContactSec />
                <Footer />
            </Fragment>
        )
    }
}

export default ContactPage
