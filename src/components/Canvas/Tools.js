import { Component } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types"

import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { faceChange } from "./Face";
import { Decorations } from "./Decorations";

export class Tools extends Component {

  eyeButton() {
    console.log("eye button clicked")
    let index
    return
  }

  render() {
    return (
      <div className="Tools">
        <Button
          className="eye-button"
          onClick={this.eyeButton}
        >
          Eye
        </Button>

        <Button
          className="mouth-button"
          onClick={() => console.log("mouth button clicked")}
        >
          Mouth
        </Button>

        <Button
          className="face-button"
          onClick={faceChange}
        >
          Face
        </Button>

        <Button
          className="decorations-button"
          onClick={() => console.log("decoration button clicked")}

        >
          Decoration
        </Button>

        <Button
          className="random-button"
          onClick={() => console.log("random button clicked")}
        >
          Random
        </Button>
      </div>
    )
  }
}

Tools.propTypes = {
  numdeco: PropTypes.number,
  numeye: PropTypes.number,
  numface: PropTypes.number,
  nummouth: PropTypes.number,
}