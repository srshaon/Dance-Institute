import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Dance.css'


const Dance = (props) => {
    const {name, trainer, img, fee, duration} = props.dance;
    return (
      <Col>
      <Card className="m-3 card ">
        <div className="img-div">
        <Card.Img className="rounded mx-auto d-block card-img" variant="top" src={img} />
        </div>
        <div>
        <Card.Body className="card-body">
          <Card.Title>Dance Form: <strong>{name}</strong></Card.Title>
          <Card.Text>
            <h5>Trainer: <strong>{trainer}</strong></h5>
            <h6>Training Period: {duration}</h6>
            <h6>Fees: {fee} TK</h6>
          </Card.Text>
        </Card.Body>
        </div>
        
      </Card>
    </Col>
    );
};

export default Dance;