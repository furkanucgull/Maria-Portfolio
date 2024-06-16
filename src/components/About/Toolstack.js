import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoLogoWindows } from 'react-icons/io';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaAppStoreIos } from 'react-icons/fa';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAppStoreIos />
      </Col>
    </Row>
  );
}

export default Toolstack;
