
import { Component } from "react";
import biggrintongue from '../../images/mouths/biggrintongue.png';
import drool from '../../images/mouths/drool.png';
import frown from '../../images/mouths/frown.png';
import kiss from '../../images/mouths/kiss.png';
import kissheart from '../../images/mouths/kissheart.png';
import moneytongue from '../../images/mouths/moneytongue.png';
import msta from '../../images/mouths/mouthstraighttongeangle.png';
import neutral from '../../images/mouths/neutral.png';
import slightersmile from '../../images/mouths/slightersmile.png';
import slightestsmile from '../../images/mouths/slightestsmile.png';
import slightsmile from '../../images/mouths/slightsmile.png';
import smileneutral from '../../images/mouths/smallneutral.png';
import smilewt from '../../images/mouths/smilewithteeth.png';
import smirk from '../../images/mouths/smirk.png';
import snezz from '../../images/mouths/snezz.png';
import tangle from '../../images/mouths/tongueatangle.png';
import tvertical from '../../images/mouths/tonguevertical.png';
import ugh from '../../images/mouths/ugh.png';
import yikes from '../../images/mouths/yikes.png';
import nsd from '../../images/mouths/numbersigndollarsignexclamationpointatsign.png';
import bfrown from '../../images/mouths/bigfrown.png';
import cfrown from '../../images/mouths/crookedfrown.png';
import ffrown from '../../images/mouths/fatfrown.png';
import stongue from '../../images/mouths/sweatytongue.png';
import www from '../../images/mouths/www.png';
import zwt from '../../images/mouths/zerowithteeth.png';
import zip from '../../images/mouths/zip.png';
import llips from '../../images/mouths/leanlips.png';
import slips from '../../images/mouths/straightlips.png';
import lteeth from '../../images/mouths/lipsteeth.png';


const mouths = [moneytongue, biggrintongue, drool, frown, kiss, kissheart, msta, neutral, slightersmile, slightestsmile, slightsmile, smileneutral, smilewt, smirk, snezz, tangle, tvertical, ugh, yikes, nsd, bfrown, cfrown, ffrown, stongue, www, zwt, zip, llips, slips, lteeth ];

var index = Math.floor(Math.random() * (mouths.length - 0));

export class Mouth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    window.mouthChange = this.mouthChange.bind(this)
    window.randMouthChange = this.randMouthChange.bind(this)
  }

  mouthChange() {
    index = (index + 1) % (mouths.length)
    this.setState ({ index: index })
  }

  randMouthChange() {
    index = Math.floor(Math.random() * (mouths.length - 0));
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
