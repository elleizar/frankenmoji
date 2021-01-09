import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Canvas } from "../components/Canvas/Canvas"
import { Tools } from "../components/Canvas/Tools"

export class GeneratorPage extends Component {
  buttonClicked () {
    window.location="welcome"
  }

  render() {
    return (
      <div className="GeneratorPage">
        <header className="Generator-header">
          Emoji Generator Page
        </header>
        <br/>
        <br/>
        <Canvas/>
        <Tools/>
        <br/>
        <br/>
        <Button 
          onClick={this.buttonClicked}>
            Back
        </Button>
      </div>
    )
  }
}