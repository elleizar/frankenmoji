
import { Component } from "react";
// import { Button } from "react-bootstrap";
import angry from '../../images/eyes/eyes_angry.png';
import closed from '../../images/eyes/eyes_closed.png';
import crossed from '../../images/eyes/eyes_crossed.png';
import crying from '../../images/eyes/eyes_crying.png';
import expressionless from '../../images/eyes/eyes_expressionless.png';
import flushed from '../../images/eyes/eyes_flushed.png';
import heart from '../../images/eyes/eyes_heart.png';

const eyes = [angry, closed, crossed, crying, expressionless, flushed, heart];

export class Eyes extends Component {
  render() {
    return (
      <div className="eye">
          <img src={eyes[0]} alt=""/>
      </div>
      // <Button
      //   onClick=dis
    )
  }
}

