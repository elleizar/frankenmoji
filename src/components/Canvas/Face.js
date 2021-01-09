import { Component } from "react";
import plain from '../../images/faces/face_plain.png';
import blush from '../../images/faces/face_blush.png';
import angry from '../../images/faces/face_angry.png';
import fearful from '../../images/faces/fearful_face.png';

const faces = [plain, blush, angry, fearful];
  
export class Face extends Component {
  constructor(props) {
    super(props)
     this.state = {
       name : "",
       url : "",
    }
  }
  
   render() {
    return (
      <div className="face">
           <img src={faces[0]}/>
       </div>
       // <Button
      //   onClick=dis
     )
   }
 }
