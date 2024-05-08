import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <footer className="bg-light py-3 fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2024 Lab1. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterComponent;