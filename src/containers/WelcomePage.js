import { Component } from "react";
import emoji2 from '../images/emoji2.png';
import Button from 'react-bootstrap/Button'


export class WelcomePage extends Component {
  buttonClicked () {
    window.location="generator"
  }

  render() {
    return (
      <div className="WelcomePage">
        <h1 className="Welcome-header">
          frankenmoji
        </h1>
        <img src={emoji2} className="Welcome-emoji" alt="emoji2" />
        <br/>
        <Button 
          className="makeButton"
          onClick={this.buttonClicked}
          variant="outline-primary">
            Generate
        </Button>
        <br/>
        <div className="Welcome-quote">"Do you think God stays in heaven because he, too, lives in fear of what he's created here on earth?" - Spy Kids 2.</div>
      </div>
      
    );
  }
}
