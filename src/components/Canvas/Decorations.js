import { Component } from "react";
import cowboy from '../../images/decorations/cowboy_hat.png';
import halo from '../../images/decorations/halo.png';
import hearts from '../../images/decorations/hearts.png';

const decorations = [cowboy, halo, hearts];

var index = 0;

export class Decorations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    window.decorationsChange = this.decorationsChange.bind(this)
  }

  decorationsChange() {
    index = (index + 1) % (decorations.length)
    this.setState ({ index: index })
  }

  render() {
    return (
      <div className="decorations">
           <img src={decorations[this.state.index]} alt=""/>
       </div>
     )
   }
 }
