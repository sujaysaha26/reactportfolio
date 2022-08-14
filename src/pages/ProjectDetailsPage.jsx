import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AppUrl from '../RestApi/AppUrl'
import RestClient from '../RestApi/RestClient'

class ProjectDetailsPage extends Component {

    constructor({match}){
        super();
        this.state = {
            ProjectPassedID: match.params.projectID,
            ProjectData: [],
            ProjectPassedName: match.params.projectName
        }
    }

    componentDidMount() {
        window.scroll(0, 0)

        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.ProjectPassedID).then(result=>{
            this.setState({ ProjectData: result });
        })
    }

    render() {
        return (
            <Fragment>
                <TopNavigation  title="CWS - Project Details" />               
                <PageTop pagetitle={this.state.ProjectPassedName} />
                <ProjectDetails id={this.state.ProjectPassedID} />
                <Footer />
            </Fragment>
        )
    }
}

export default ProjectDetailsPage
