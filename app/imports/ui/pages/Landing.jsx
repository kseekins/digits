import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <PeopleFill width="100px" />
        <h1>Multiple Users </h1>

      </Col>

      <Col xs={4} className="d-flex flex-column justify-content-center">
        <FileEarmarkTextFill />
        <p>Now get to work and modify this app!</p>
      </Col>

      <Col xs={4} />

    </Row>
  </Container>
);

export default Landing;
