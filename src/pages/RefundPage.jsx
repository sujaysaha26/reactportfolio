import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import RefundDesc from '../components/RefundDesc/RefundDesc'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
                 <TopNavigation  title="CWS - Refund Policy" />               
                <PageTop pagetitle="Refund Policy" />
                <RefundDesc />
                <Footer />
            </Fragment>
        )
    }
}

export default RefundPage
