import { Component } from "react";
import Button from "react-bootstrap/Button";

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
        <Button 
          onClick={this.buttonClicked}>
            Back
        </Button>
      </div>
    )
  }
}