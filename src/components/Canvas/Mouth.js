
import { Component } from "react";
import biggrintongue from '../../images/mouths/biggrintongue.png';
import drool from '../../images/mouths/drool.png';
import frown from '../../images/mouths/frown.png';
import kiss from '../../images/mouths/kiss.png';

const mouths = [biggrintongue, drool, frown, kiss];

export class Mouth extends Component {
   render() {
    return (
      <div className="mouth">
           <img src={mouths[0]}/>
       </div>
       // <Button
      //   onClick=dis
     )
   }
 }