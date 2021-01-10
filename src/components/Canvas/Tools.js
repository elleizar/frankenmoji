import { Component } from "react";
import Button from "react-bootstrap/Button";

export class Tools extends Component {
  randomClicked() {
    window.randEyesChange();
    window.randMouthChange();
    window.randFaceChange();
    window.randDecorationsChange();
  }

  render() {
    return (
      <div className="Tools">
        <Button
          className="eye-button"
          onClick={window.eyesChange}
        >
          Eyes
        </Button>{" "}

        <Button
          className="mouth-button"
          onClick={window.mouthChange}
        >
          Mouth
        </Button>{" "}

        <Button
          className="face-button"
          onClick={window.faceChange}
        >
          Face
        </Button>{" "}

        <Button
          className="decorations-button"
          onClick={window.decorationsChange}
        >
          Accessories
        </Button>{" "}

        <Button
          className="random-button"
          onClick={this.randomClicked}
        >
          Randomize
        </Button>
      </div>
    )
  }
}