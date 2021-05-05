import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SphereGeometry,
  MeshBasicMaterial,
  TextureLoader,
  Mesh
} from "three";

// more specific import required for OrbitControls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// custom lightning component
import Lightning from './Lightning';

// texture for the moon
import MoonTexture from '../static/moon-texture.png';

async function HelloThree() {
    // define scene
    const scene = new Scene();

    // define camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // set camera position
    camera.position.z = 5;

    // initialize renderer
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // initialize orbit controls (move around, zoom in and out)
    // FIXME: orbit is never used
    var orbit = new OrbitControls( camera, renderer.domElement )
    
    // define and add moon to scene
    const geometry = new SphereGeometry(1, 32, 32);
    const loader = new TextureLoader();
    const material = new MeshBasicMaterial({
      map: loader.load(MoonTexture),
    });
    const moon = new Mesh(geometry, material);
    scene.add(moon);
    
    const lightning = new Lightning();
    scene.add(lightning.line);

    document.body.appendChild(renderer.domElement);
    
    function animate() {
      requestAnimationFrame(animate);
      
      // rotate moon
      moon.rotation.x += 0.001;
      moon.rotation.y += 0.001;

      lightning.step();

      renderer.render(scene, camera);
    }

    animate();
}

export default HelloThree;


// segmentList.Add(new Segment(startPoint, endPoint));
// offsetAmount = maximumOffset; // the maximum amount to offset a lightning vertex.
// for each generation (some number of generations)
//   for each segment that was in segmentList when this generation started
//     segmentList.Remove(segment); // This segment is no longer necessary.

//     midPoint = Average(startpoint, endPoint);
//     // Offset the midpoint by a random amount along the normal.
//     midPoint += Perpendicular(Normalize(endPoint-startPoint))*RandomFloat(-offsetAmount,offsetAmount);

//     // Create two new segments that span from the start point to the end point,
//     // but with the new (randomly-offset) midpoint.
//     segmentList.Add(new Segment(startPoint, midPoint));
//     segmentList.Add(new Segment(midPoint, endPoint));
//   end for
//   offsetAmount /= 2; // Each subsequent generation offsets at max half as much as the generation before.
// end for
