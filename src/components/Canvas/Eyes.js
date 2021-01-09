
import { Component } from "react";
import { Button } from "react-bootstrap";

export class Eyes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      url : "",
    }
  }

  displayEyes() {
    var eyes = [];
    eyes.push(new Eyes("angry", "../../images/Eys/eyes_angry.png"));
    eyes.push(new Eyes("closed", "../../images/eyes/eyes_closed.png"));
    eyes.push(new Eyes("crossed", "../../images/eyes/eyes_crossed.png"));
    eyes.push(new Eyes("crying", "../../images/eyes/eyes_crying.png"));
    eyes.push(new Eyes("expressionless", "../../images/eyes/eyes_expressionless.png"));
    eyes.push(new Eyes("flushed", "../../images/eyes/eyes_flushed.png"));
    eyes.push(new Eyes("heart", "../../images/eyes/eyes_heart.png"));
  }

  render() {
    return (
      <div>Eyes</div>
      // <Button
      //   onClick=dis
    )
  }
}

