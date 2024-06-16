import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdMonochromePhotos } from 'react-icons/md';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { AiTwotoneCustomerService } from 'react-icons/ai';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdMonochromePhotos />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineVolunteerActivism />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiTwotoneCustomerService />
      </Col>
    </Row>
  );
}

export default Techstack;
