import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Canvas } from "../components/Canvas/Canvas"
import { Tools } from "../components/Canvas/Tools"
import { Link } from 'react-router-dom'

export class GeneratorPage extends Component {
  saveImage() {
    var canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;

    var ctx = canvas.getContext('2d');

    // get images
    var face = window.getFace();
    var mouth = window.getMouth();
    var eyes = window.getEyes();
    var decorations = window.getDecorations();

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw image
    setTimeout(function () {
      ctx.drawImage(face, canvas.width / 2 - face.width / 2, canvas.height / 2 - face.height / 2);
      ctx.drawImage(mouth, canvas.width / 2 - mouth.width / 2, canvas.height / 2 - mouth.height / 2);
      ctx.drawImage(eyes, canvas.width / 2 - eyes.width / 2, canvas.height / 2 - eyes.height / 2);
      ctx.drawImage(decorations, canvas.width / 2 - decorations.width / 2, canvas.height / 2 -decorations.height / 2);
    }, 5);

    // open image in new tab
    let w;
    setTimeout(function () {
      w = window.open('about:blank');
    }, 10);

    var image = new Image();
    setTimeout(function () {
      image.src = canvas.toDataURL("image/png");
    }, 10);
    setTimeout(function () {
      w.document.write(image.outerHTML);
    }, 15);

    console.log(canvas.toDataURL("image/png"));
  }
  render() {
    return (
      <div className="GeneratorPage">
        <h1 className="Generator-inst">
          Click on the buttons below to change your frankenmoji!
        </h1>
        <Canvas />
        <br />
        <Tools />
        <br />
        <Button
          className="saveButton"
          onClick={this.saveImage}
        >
          Save
        </Button>
        <div className="tip">Tip: After clicking on "Save", right click to save or copy the image.</div>
        <br />
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