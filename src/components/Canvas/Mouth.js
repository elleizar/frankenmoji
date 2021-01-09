
import { Component } from "react";
import biggrintongue from '../../images/mouths/biggrintongue.png';
import drool from '../../images/mouths/drool.png';
import frown from '../../images/mouths/frown.png';
import kiss from '../../images/mouths/kiss.png';
import moneytongue from '../../images/mouths/moneytongue.png';

const mouths = [moneytongue, biggrintongue, drool, frown, kiss];
<<<<<<< Updated upstream

var index = 0;
=======
>>>>>>> Stashed changes

export class Mouth extends Component {
   render() {
    return (
      <div className="mouth">
           <img src={mouths[index]} alt=""/>
       </div>
     )
   }
 }

const mouthChange = function() {
  console.log("before: " + index)
  index = (index + 1) % (mouths.length)
  console.log(" after: " + index)
 }

 export {mouthChange};
