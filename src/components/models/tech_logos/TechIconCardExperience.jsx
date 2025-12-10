import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={[1, 1.5]} // Limit pixel ratio
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false, // Disable for better performance
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      {/* Removed expensive Environment preset and spotlight */}

      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
