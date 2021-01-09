import { Component } from "react";
import cowboy from '../../images/decorations/cowboy_hat.png';
import halo from '../../images/decorations/halo.png';
import hearts from '../../images/decorations/hearts.png';

const decorations = [cowboy, halo, hearts];

export class Decorations extends Component {
   render() {
    return (
      <div className="decorations">
           <img src={decorations[0]}/>
       </div>
       // <Button
      //   onClick=dis
     )
   }
 }