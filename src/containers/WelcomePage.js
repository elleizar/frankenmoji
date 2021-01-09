import { Component } from "react";
import emoji2 from '../images/emoji2.png';
import Button from 'react-bootstrap/Button'


export class WelcomePage extends Component {
  buttonClicked () {
    window.location="editor"
  }

  render() {
    return (
      <div className="WelcomePage">
        <header className="Welcome-header">
          Welcome
        </header>
        <br/>
        <img src={emoji2} className="Welcome-emoji" alt="emoji2" />
        <br/>
        <br/>
        <Button 
          className="makeButton"
          onClick={this.buttonClicked}>
            Make your emoji
        </Button>
      </div>
      
    );
  }
}
