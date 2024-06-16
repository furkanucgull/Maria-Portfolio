import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Maryia Chamruk </span>
            from <span className="purple"> Mogilev, Belarus.</span>
            <br />
            I am currently volunteering as a Project Manager Assistant at Centrum Współpracy Młodzieży in Gdynia Poland.
            <br />
            I have graduated Bachelor of Management (in the field of international tourism) in Belarusian State University.
            <br />
            <br />
            Apart from taking photos, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Irish Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>"Strive to build things that make a difference!" </p>
          <footer className="blockquote-footer">Maria</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
