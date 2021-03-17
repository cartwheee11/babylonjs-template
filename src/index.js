import { Engine, Scene, FreeCamera, Vector3, Mesh, DirectionalLight } from "@babylonjs/core";

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// let context = canvas.getContext('2d')

const engine = new Engine(canvas, true);
const scene = new Scene();
const camera = new FreeCamera('free camera 1', new Vector3(10, 10, 10), scene);
camera.attachControl();
camera.setTarget(new Vector3(0, 0, 0));

//box
const box = Mesh.CreateBox('box name', 1, scene)

//light
const light = new DirectionalLight('name', new Vector3(-1, -2, -3), scene);

engine.runRenderLoop(() => {
    scene.render();
})