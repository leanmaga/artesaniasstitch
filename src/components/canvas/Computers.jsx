import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Rotate the object every frame
    const handleFrame = () => {
      setRotation((prev) => [prev[0] + 0.01, prev[1] + 0.01, prev[2] + 0.01]);
    };

    // Request the animation frame
    const animationFrameId = requestAnimationFrame(handleFrame);

    // Clean up the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <mesh scale={[4, 4, 4]} position={[0,0,0]}>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <primitive object={computer.scene} />
    </mesh>
  );
};



const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(min-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas className="w-[100%] h-[100%]">
        <OrbitControls/>
        <ambientLight intensity ={0.1}/>
        <spotLight position={[10,15,10]} angle={0.3}/>
        <Computers isMobile={isMobile} />
        <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
