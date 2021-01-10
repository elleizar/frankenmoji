import { Component } from "react";
import emoji2 from '../images/emoji2.png';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export class WelcomePage extends Component {
  render() {
    return (
      <div className="WelcomePage">
        <h1 className="Welcome-header">
          frankenmoji
        </h1>
        <img src={emoji2} className="Welcome-emoji" alt="emoji2" />
        <br/>
        <Link to='/generator'>
          <Button 
            className="makeButton">
              Generate
          </Button>
        </Link>
        <br/>
        <div className="Welcome-quote">"Do you think God stays in heaven because he, too, lives in fear of what he's created here on earth?" - Spy Kids 2.</div>
      </div>
      
    );
  }
}
