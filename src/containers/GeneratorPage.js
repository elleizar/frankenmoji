import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Canvas } from "../components/Canvas/Canvas"
import { Tools } from "../components/Canvas/Tools"
import { Link } from 'react-router-dom'

export class GeneratorPage extends Component {
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
        <Link to='/'>
          <Button 
            className="backButton">
              Back
          </Button>
        </Link>
      </div>
    )
  }
}