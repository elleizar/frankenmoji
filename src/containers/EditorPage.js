import { Component } from "react";
import Button from "react-bootstrap/Button";

export class EditorPage extends Component {
  buttonClicked () {
    window.location="welcome"
  }

  render() {
    return (
      <div className="EditorPage">
        <header className="Editor-header">
          Editor Page
        </header>
        <Button 
          onClick={this.buttonClicked}>
            Back
        </Button>
      </div>
    )
  }
}