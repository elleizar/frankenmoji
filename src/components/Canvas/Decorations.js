import { Component } from "react";
import cowboy from '../../images/decorations/cowboy_hat.png';
import halo from '../../images/decorations/halo.png';
import hearts from '../../images/decorations/hearts.png';

const decorations = [cowboy, halo, hearts];

var index = 0;

export class Decorations extends Component {
   render() {
    return (
      <div className="decorations">
           <img src={decorations[index]} alt=""/>
       </div>
     )
   }
 }

const decorationsChange = function() {
  console.log("before: " + index)
  index = (index + 1) % (decorations.length)
  console.log(" after: " + index)
 }

 export {decorationsChange};