
import { Component } from "react";
// import { Button } from "react-bootstrap";
import angry from '../../images/eyes/eyes_angry.png';
import closed from '../../images/eyes/eyes_closed.png';
import crossed from '../../images/eyes/eyes_crossed.png';
import crying from '../../images/eyes/eyes_crying.png';
import expressionless from '../../images/eyes/eyes_expressionless.png';
import flushed from '../../images/eyes/eyes_flushed.png';
import heart from '../../images/eyes/eyes_heart.png';
import money from '../../images/eyes/eyes_money.png';
import pensive from '../../images/eyes/eyes_pensive.png';
import plain from '../../images/eyes/eyes_plain.png';
import pleading from '../../images/eyes/eyes_pleading.png';
import rolling from '../../images/eyes/eyes_rolling.png';
import shut from '../../images/eyes/eyes_shut.png';
import smiling from '../../images/eyes/eyes_smiling.png';
import smirking from '../../images/eyes/eyes_smirking.png';
import weary from '../../images/eyes/eyes_weary.png';
import wink from '../../images/eyes/eyes_wink.png';
import wink2 from '../../images/eyes/eyes_wink2.png';
import woozy from '../../images/eyes/eyes_woozy.png';
import zany from '../../images/eyes/eyes_zany.png';
import stars from '../../images/eyes/stars.png';
import thinking from '../../images/eyes/thinking.png';
import sunglasses from '../../images/eyes/eyes_sunglasses.png';

const eyes = [angry, closed, crossed, crying, thinking, stars, expressionless, flushed, heart, money, pensive, sunglasses, plain, pleading, rolling, shut, smiling, smirking, weary, wink, wink2, woozy, zany];

var index = Math.floor(Math.random() * (eyes.length - 0));

export class Eyes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    window.eyesChange = this.eyesChange.bind(this)
    window.randEyesChange = this.randEyesChange.bind(this)
  }

  eyesChange() {
    index = (index + 1) % (eyes.length);
    this.setState ({ index: index })
  }

  randEyesChange() {
    index = Math.floor(Math.random() * (eyes.length - 0));
    this.setState ({ index: index })
  }

  render() {
    return (
      <div className="eye">
          <img src={eyes[this.state.index]} alt=""/>
      </div>
    )
  }
}
