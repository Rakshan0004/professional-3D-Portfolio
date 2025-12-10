import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import Computer from "./Computer";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas 
      shadows={!isMobile} // Disable shadows on mobile
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
        alpha: false,
        stencil: false,
      }}
    >
      <ambientLight intensity={0.7} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={1.5} color="#ffd9b3" />

      {!isMobile && (
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={1.5}
          color="#ffd9b3"
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
      )}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow={!isMobile}
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isMobile}>
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
