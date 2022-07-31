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
    description: "Zenten is the first project that was a group project alongside Julia Davis, Isaac Luton, Revy Torres and myself. This application used bulma as the CSS framework and Javascript alsonside two APIs. The applicatin allows the user to select a time that they would like to relax and choose from 5 themes. It will then pull a random quote and image that will cycle after an interval time.",
    link: "https://juliakhdavis.github.io/zenTen/"
  },
  {
    number: 3,
    title: "Work Day Scheduler",
    image: dayScheduler,
    description: "This application allows the user to save task in an hour slot and save onto local storage. This application uses local storage and moment.js to keep track of time of day and to save the text into a textbox.",
    link: "https://rafaelh731.github.io/work-day-scheduler/"
  },
  {
    number: 4,
    title: "Password Generator",
    image: passwordGenerator,
    description: "This application take input from the user to create a password from the user preferences. This is my first assignment that I was able to solve problems to make the application work. It is a simple program now but it is a reminder of how far I have come with all the technologies I have been learning.",
    link: "https://rafaelh731.github.io/password-generator/"
  },
];

function PortfolioGrid() {
  return (
    <Row xs={1} md={2} className="g-4 background">
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
