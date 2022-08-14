import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="serviceName text-center my-5">Page Nahi Mila.</h1>
                            <h1 className="notfound text-center">Search Properly Noob, can't even search.</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NotFound
