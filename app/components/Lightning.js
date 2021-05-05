import {
  Vector3,
  BufferGeometry,
  Line,
  LineBasicMaterial,
} from "three";

class Lightning {
  constructor() {
    // TODO: add random seed?

    this.blueMaterial = new LineBasicMaterial( { color: 0x0fffff } );
    this.points = [
      new Vector3( 0, 3, 0 ),
      new Vector3( 3, 0, 0 ) 
    ];
    this.lineGeometry = new BufferGeometry().setFromPoints( this.points );
    this.line = new Line( this.lineGeometry, this.blueMaterial );
    this.increment = 3;
  }

  step() {
    this.increment += .01;

    // move line
    // this.line.translateX(0.01);
    // this.line.translateY(0.01);
  }
}

export default Lightning;
