import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../contact/Contact';

const ContactSection = ({ showToast }) => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          Have questions? We'd love to hear from you!
        </p>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Contact showToast={showToast} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;