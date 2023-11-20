import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as THREE from "three"
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";
import { configBackground } from "./consts/config";

@Component({
  selector: 'app-background-wave',
  templateUrl: './background-wave.component.html',
  styleUrls: ['./background-wave.component.scss']
})
export class BackgroundWaveComponent implements AfterViewInit{
  @ViewChild('background') canvas: ElementRef;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;

  private width: number;
  private height: number;
  private cx: number;
  private cy: number;
  private wWidth: number;
  private wHeight: number;
  private plane: any;
  private simplex: SimplexNoise;

  private mouse: THREE.Vector2;
  private mousePlane: THREE.Plane
  private mousePosition: THREE.Vector3
  private aycaster: THREE.Raycaster

  private light1: any;
  private light2: any;
  private light3: any;
  private light4: any;
  private config = configBackground;

  ngAfterViewInit() {
    this.init();
  }

  // Initial three
  private init() {
    this.initData();
    this.initBackground();
    this.animate();
  }

  private initBackground() {
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initLights();
    this.initListeners();
  }

  private initPlane() {
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const geo = new THREE.PlaneGeometry(this.wWidth, this.wHeight, this.wWidth / 2, this.wHeight / 2);
    this.plane = new THREE.Mesh(geo, mat);
    this.scene.add(this.plane);

    this.plane.rotation.x = -Math.PI / 2 - 0.2;
    this.plane.position.y = -25;
    this.camera.position.z = 60;
  }

  private initScene() {
    this.scene = new THREE.Scene();
    this.initPlane();
  }

  private initListeners() {
    window.addEventListener('resize', this.updateSize.bind(this), false);
  }

  private initCamera() {
    this.camera = new THREE.PerspectiveCamera(this.config.fov);
    this.camera.position.z = this.config.cameraZ;
    this.updateSize();
  }

  private initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas.nativeElement, antialias: true, alpha: true });
  }

  private animateLights() {
    const time = Date.now() * 0.001;
    const d = 50;
    this.light1.position.x = Math.sin(time * 0.1) * d;
    this.light1.position.z = Math.cos(time * 0.2) * d;
    this.light2.position.x = Math.cos(time * 0.3) * d;
    this.light2.position.z = Math.sin(time * 0.4) * d;
    this.light3.position.x = Math.sin(time * 0.5) * d;
    this.light3.position.z = Math.sin(time * 0.6) * d;
    this.light4.position.x = Math.sin(time * 0.7) * d;
    this.light4.position.z = Math.cos(time * 0.8) * d;
  }

  private updateSize() {
    this.width = window.innerWidth;
    this.cx = this.width / 2;
    this.height = window.innerHeight;
    this.cy = this.height / 2;
    if (this.renderer && this.camera) {
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      const size = this.getRendererSize();
      this.wWidth = size[0];
      this.wHeight = size[1];
    }
  }

  private getRendererSize() {
    const cam = new THREE.PerspectiveCamera(this.camera.fov, this.camera.aspect);
    const vFOV = cam.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(this.config.cameraZ);
    const width = height * cam.aspect;
    return [width, height];
  }

  private initLights() {
    const r = 30;
    const y = 10;
    const lightDistance = 500;

    this.light1 = new THREE.PointLight(this.config.light1Color, this.config.lightIntensity, lightDistance);
    this.light1.position.set(0, y, r);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(this.config.light2Color, this.config.lightIntensity, lightDistance);
    this.light2.position.set(0, -y, -r);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(this.config.light3Color, this.config.lightIntensity, lightDistance);
    this.light3.position.set(r, y, 0);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(this.config.light4Color, this.config.lightIntensity, lightDistance);
    this.light4.position.set(-r, y, 0);
    this.scene.add(this.light4);
  }

  private initData() {
    this.simplex = new SimplexNoise();
    this.mouse = new THREE.Vector2();
    this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    this.mousePosition = new THREE.Vector3();
    this.aycaster = new THREE.Raycaster();
  }

  private animate() {
    const component: BackgroundWaveComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animatePlane();
      component.animateLights();
      component.renderer.render(component.scene, component.camera)
    }())
  };

  private animatePlane() {
    const gArray = this.plane.geometry.attributes.position.array;
    const time = Date.now() * 0.0002;
    for (let i = 0; i < gArray.length; i += 3) {
      gArray[i + 2] = this.simplex.noise4d(gArray[i] / this.config.xyCoef, gArray[i + 1] / this.config.xyCoef, time, this.mouse.x + this.mouse.y) * this.config.zCoef;
    }
    this.plane.geometry.attributes.position.needsUpdate = true;
  }
}
