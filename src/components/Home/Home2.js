import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Masha1.png';
import Tilt from 'react-parallax-tilt';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Irish Dancing and I do love Yoga and volunteering, I think… 🤷‍♂️
              <br />
              <br />I love taking pictures...
              <i>
                <b className="purple"> Professional Cameras </b>
              </i>
              <br />
              <br />
              My field of Interest's are editing &nbsp;
              <i>
                <b className="purple">Photos </b> and also in areas related to <b className="purple">Photography.</b>
              </i>
              <br />
              <br />
              ... <b className="purple">....</b> .....
              <i>
                <b className="purple"> ...</b>
              </i>
              &nbsp; ...
              <i>
                <b className="purple"> ....</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons"></li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100011066447954"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maria-chemruk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/xtvherv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
