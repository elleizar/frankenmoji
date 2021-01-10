import { Component } from "react";
import Button from "react-bootstrap/Button";

import { Eyes } from "./Eyes";
import { mouthChange } from "./Mouth";
import { faceChange } from "./Face";
import { decorationsChange } from "./Decorations";

export class Tools extends Component {

  render() {
    return (
      <div className="Tools">
        <Button
          className="eye-button"
          onClick={Eyes.eyesChange}
        >
          Eye
        </Button>

        <Button
          className="mouth-button"
          // onClick={() => console.log("mouth button clicked")}
          onClick={mouthChange}
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
          // onClick={() => console.log("decoration button clicked")}
          onClick={decorationsChange}
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