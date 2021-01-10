import { Component } from "react";
import plain from '../../images/faces/face_plain.png';
import blush from '../../images/faces/face_blush.png';
import angry from '../../images/faces/face_angry.png';
import fearful from '../../images/faces/fearful_face.png';
import clown from '../../images/faces/clown.png';
import devil from '../../images/faces/devil.png';

const faces = [plain, blush, angry, fearful, clown, devil];

var index = Math.floor(Math.random() * (faces.length - 0));
  
export class Face extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: index,
    }
    window.faceChange = this.faceChange.bind(this)
    window.randFaceChange = this.randFaceChange.bind(this)
  }

  faceChange() {
    index = (index + 1) % (faces.length)
    this.setState ({ index: index })
  }

  randFaceChange() {
    index = Math.floor(Math.random() * (faces.length - 0));
    this.setState ({ index: index })
  }

  render() {
    return (
      <div className="face">
           <img src={faces[this.state.index]} alt=""/>
        </div>
     )
   }
 }
