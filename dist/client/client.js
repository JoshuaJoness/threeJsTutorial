import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
const canvas1 = document.getElementById("c1");
const canvas2 = document.getElementById("c2");
const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
// renderer1.setSize(window.innerWidth, window.innerHeight)
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
// renderer2.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)
const controls = new OrbitControls(camera, renderer1.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
console.dir(scene);
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer1.render(scene, camera);
    renderer2.render(scene, camera);
};
animate();
