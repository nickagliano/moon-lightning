import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    IcosahedronGeometry,
    MeshNormalMaterial,
    Mesh,
  } from "three";

async function HelloThree() {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const geometry = new IcosahedronGeometry();
    const material = new MeshNormalMaterial();
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    
    camera.position.z = 2;
    
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    function animate() {
    requestAnimationFrame(animate);
    
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    
    renderer.render(scene, camera);
    }
    animate();
}

export default HelloThree;
