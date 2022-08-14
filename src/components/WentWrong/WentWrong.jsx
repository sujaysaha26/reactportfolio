import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Error from '../../asset/images/error.svg'

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                        <img className="errorIcon" src={Error} alt="Error" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default WentWrong
