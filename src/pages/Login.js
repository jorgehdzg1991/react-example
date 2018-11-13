import React from 'react';
import { Col, Row, Panel } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

export default function LoginPage(props) {
    return (
        <div className="container login-page">
            <Row>
                <Col xs={12} md={6} mdOffset={3}>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title>Welcome to Twitter!</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <LoginForm />
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </div>
    );
}
