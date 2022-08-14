import React, { Fragment, Component } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsDesc from '../components/TermsDesc/TermsDesc'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <Fragment>
            <TopNavigation  title="CWS - Terms and Conditions" />               
           <PageTop pagetitle="Terms and Conditions" />
           <TermsDesc />
           <Footer />
       </Fragment>
        )
    }
}

export default TermsPage
