import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Canvas } from "../components/Canvas/Canvas"

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