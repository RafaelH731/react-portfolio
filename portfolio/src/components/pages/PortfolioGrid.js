import React from 'react';
import zen from "./img/zenten.png"
import passwordGenerator from "./img/passwordgenerator.png"
import dayScheduler from "./img/day-scheduler-screenshot.png"
import dotify from "./img/dotify-screenshot.png"
import './PortfolioGrid.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const projects = [
  {
    number: 1,
    title: "Music Questionnaire",
    image: dotify,
    description: "Dotify is a music questionnaire, it allows the user to pick between different decades and genres. It then picks a son that matches those choices.",
    link: "https://lit-oasis-project-2.herokuapp.com/"
  },
  {
    number: 2,
    title: "ZenTen",
    image: zen,
    description: "This application allows the user to select parameters to enjoy quotes and pictures that match the selected options.",
    link: "https://juliakhdavis.github.io/zenTen/"
  },
  {
    number: 3,
    title: "Work Day Scheduler",
    image: dayScheduler,
    description: "This application allows the user to edit different text boxes corresponding to different hours, it then saves their To Dos in local storage.",
    link: "https://rafaelh731.github.io/work-day-scheduler/"
  },
  {
    number: 4,
    title: "Password Generator",
    image: passwordGenerator,
    description: "This is an application that allows the user to select different parameters for the program to create a password that matches their selection.",
    link: "https://rafaelh731.github.io/password-generator/"
  },
];

function PortfolioGrid() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((_, idx) => (
        <Col key={idx}>
          <Card>
            <a href={_.link} >
            <Card.Img
              variant="top"
              src={_.image}
              className="img-fluid"
              alt="_.title"
            />
            </a>
            <Card.Body>
              <Card.Title>{_.title}</Card.Title>
              <Card.Text>
                {_.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PortfolioGrid;
