import { Component } from "react";
import Button from "react-bootstrap/Button";

export class Tools extends Component {

  render() {
    return (
      <div className="Tools">
        <Button
          className="eye-button"
          onClick={window.eyesChange}
        >
          Eye
        </Button>

        <Button
          className="mouth-button"
          onClick={window.mouthChange}
        >
          Mouth
        </Button>

        <Button
          className="face-button"
          onClick={window.faceChange}
        >
          Face
        </Button>

        <Button
          className="decorations-button"
          // onClick={() => console.log("decoration button clicked")}
          onClick={window.decorationsChange}
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