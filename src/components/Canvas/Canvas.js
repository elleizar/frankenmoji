import { Component } from "react";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { Face } from "./Face";
import { Decorations } from "./Decorations";
import '../../css/Canvas.css'

export class Canvas extends Component {
  render() {
    return (
      <div className="Canvas">
        <Decorations/>
        <Eyes/>
        <Mouth/>
        <Face/>
      </div>
    )
  }
}