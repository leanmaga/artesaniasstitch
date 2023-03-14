import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Template = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const orbitControlsRef = useRef(null);
  const personajeRef = useRef(null);

  const createScene = (width, height) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    scene.add(camera);
    camera.position.set(5, 5, 5);
    camera.lookAt(new THREE.Vector3());
    camera.renderOrder = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);

    const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(6, 6, 6);
    scene.add(pointLight);

    return { scene, camera, renderer };
  };

  const loadModel = (gltf) => {
    const personaje = new THREE.Group();
    gltf.scene.scale.set(2, 2, 2);
    personaje.add(gltf.scene);
    personaje.position.y = -0.5;
    sceneRef.current.add(personaje);
    personajeRef.current = personaje;
  };

  const setupControls = () => {
    const orbitControls = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
    orbitControls.enableDamping = true;
    orbitControlsRef.current = orbitControls;
  };

  const handleResize = () => {
    const { clientWidth: width, clientHeight: height } = mountRef.current;
    rendererRef.current.setSize(width, height);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
  };

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;
    const { scene, camera, renderer } = createScene(width, height);
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    currentRef.appendChild(renderer.domElement);

    setupControls();

    window.addEventListener("resize", handleResize);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./models/scene.gltf", loadModel);

    const animate = () => {
      orbitControlsRef.current.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='Contenedor3D' ref={mountRef} style={{ width: "100%", height: "100vh" }}>
      
    </div>
  );
};

export default Template;
