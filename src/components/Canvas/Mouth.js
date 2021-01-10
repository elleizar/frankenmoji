
import { Component } from "react";
import biggrintongue from '../../images/mouths/biggrintongue.png';
import drool from '../../images/mouths/drool.png';
import frown from '../../images/mouths/frown.png';
import kiss from '../../images/mouths/kiss.png';
import moneytongue from '../../images/mouths/moneytongue.png';

const mouths = [moneytongue, biggrintongue, drool, frown, kiss];

var index = 0;

export class Mouth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    window.mouthChange = this.mouthChange.bind(this)
  }

  mouthChange() {
    index = (index + 1) % (mouths.length)
    this.setState ({ index: index })
  }

  render() {
    return (
      <div className="mouth">
           <img src={mouths[this.state.index]} alt=""/>
       </div>
     )
   }
 }
