
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

var index = 0;

export class Eyes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    // this.eyesChange = this.eyesChange.bind(this)
  }

  static eyesChange() {
    console.log("before: " + index)
    index = (index + 1) % (eyes.length);
    console.log(" after: " + index)
    this.setState = ({ index: index })
   }

  render() {
    console.log("index eye: " + this.state.index)
    return (
      <div className="eye">
          <img src={eyes[this.state.index]} alt=""/>
      </div>
    )
  }
}

// const eyesChange = function() {
//     console.log("before: " + index)
//     index = (index + 1) % (eyes.length);
//     console.log(" after: " + index)
//     return index;
//    }
  
// export {eyesChange};