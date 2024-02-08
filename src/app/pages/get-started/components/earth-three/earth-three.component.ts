import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-earth-three',
  templateUrl: './earth-three.component.html',
  styleUrls: ['./earth-three.component.scss'],
})
export class EarthThreeComponent implements AfterViewInit {
  @ViewChild('earth') private canvasRef: ElementRef;

  public isLoading = true;

  private camera: THREE.PerspectiveCamera;
  private earth: THREE.Group;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;

  private readonly fieldOfView: number = 45;

  constructor() {}

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  // ------------ GETTER --------------
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private get aspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  // ------------ METHODS --------------
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = null;
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.aspectRatio,
      1,
      1000,
    );

    this.initRenderer();
    this.initModel();
    this.initLight();
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setClearColor(0x000000, 0.0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  private initModel(): void {
    const loader = new GLTFLoader();
    loader.load('assets/models/earth.glb', (gltf) => {
      this.earth = gltf.scene;
      const boxCenter = new THREE.Box3().setFromObject(this.earth);
      const center = new THREE.Vector3();
      this.earth.position.sub(boxCenter.getCenter(center));
      this.scene.add(this.earth);
    });

    this.camera.position.z = 16;
  }

  private initLight(): void {
    const lightOne = new THREE.DirectionalLight(0xffffff, 1);
    lightOne.position.set(20, 20, 20);
    this.scene.add(lightOne);

    const lightTwo = new THREE.DirectionalLight(0xffffff, 1);
    lightTwo.position.set(-20, -20, -20);
    this.scene.add(lightTwo);

    const lightThird = new THREE.DirectionalLight(0xffffff, 1);
    lightTwo.position.set(20, -20, 20);
    this.scene.add(lightThird);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
  }

  private animateEarth(): void {
    if (this.earth) {
      this.earth.rotation.z += 0.001;
      this.earth.rotation.y += 0.001;
      this.isLoading = false;
    }
  }

  private startRenderingLoop() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableZoom = false;

    const component: EarthThreeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateEarth();
      component.renderer.render(component.scene, component.camera);
    })();
  }
}
