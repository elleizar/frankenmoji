import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Canvas } from "../components/Canvas/Canvas"
import { Tools } from "../components/Canvas/Tools"

export class GeneratorPage extends Component {
  buttonClicked () {
    window.location="/"
  }

  render() {
    return (
      <div className="GeneratorPage">
        <h1 className="Generator-inst">
          Click on the buttons below to change your frankenmoji!
        </h1>
        <Canvas/>
        <br/>
        <Tools/>
        <br/>
        <Button 
          className="backButton"
          onClick={this.buttonClicked}>
            Back
        </Button>
      </div>
    )
  }
}