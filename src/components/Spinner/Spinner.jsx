import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SpinnerIcon from '../../asset/images/spinner.svg'

class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="SpinnerAnimation" src={SpinnerIcon} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Spinner
