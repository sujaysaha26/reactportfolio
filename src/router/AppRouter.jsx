import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoursePage from '../pages/CoursePage'
import HomePage from '../pages/HomePage'
import PortfolioPage from '../pages/PortfolioPage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage'
import ServicePage from '../pages/ServicePage'
import TermsPage from '../pages/TermsPage'
import CourseDetailsPage from '../pages/CourseDetailsPage'
import PageNotFound from '../pages/PageNotFound'

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={CoursePage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/terms" component={TermsPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/projectdetails/:projectID/:projectName" component={ProjectDetailsPage} />
                    <Route exact path="/coursedetails/:courseID/:courseName" component={CourseDetailsPage} />

                    <Route component={PageNotFound} />
                </Switch>
            </Fragment>
        )
    }
}

export default AppRouter
