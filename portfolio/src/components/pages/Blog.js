import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import zen from "./img/zenten.png"

export default function Blog() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" img src={zen} />
      <Card.Body>
        <Card.Title>ZenTen</Card.Title>
        <Card.Text>
          This application allows the user to select parameters to enjoy quotes and pictures that match the selected options.
        </Card.Text>
        <Button variant="primary" href="https://juliakhdavis.github.io/zenTen/">ZenTen</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Dotify</Card.Title>
        <Card.Text>
          Dotify is a music questionnaire.
        </Card.Text>
        <Button variant="primary" href="https://github.com/ctmbr/musicQuestionaire" >Dotify</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Work Day Scheduler</Card.Title>
        <Card.Text>
          More Text
        </Card.Text>
        <Button variant="primary" href="https://rafaelh731.github.io/work-day-scheduler/">Work Day Scheduler</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Password Generator</Card.Title>
        <Card.Text>
          More Text
        </Card.Text>
        <Button variant="primary" href="https://rafaelh731.github.io/password-generator/">Password Generator</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

