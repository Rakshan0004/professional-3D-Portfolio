import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef, Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const interactionRef = useRef();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Interaction Zone: Only events in this area will trigger 3D rotation.
          Reduced to 50% and shifted down to align with the model position. */}
      <div
        ref={interactionRef}
        className="absolute z-20 w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 cursor-grab active:cursor-grabbing rounded-full pointer-events-auto"
        title="Click and drag to rotate"
      />

      <Canvas
        eventSource={interactionRef}
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        performance={{ min: 0.5 }} // Allow framerate to drop to maintain performance
        style={{ touchAction: 'pan-y', pointerEvents: 'none' }}
        gl={{
          antialias: !isMobile, // Disable antialiasing on mobile
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
        }}
      >
        {/* deep blue ambient */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        {/* Configure OrbitControls to disable panning and control zoom based on device type */}
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          enableZoom={!isTablet} // Disables zoom on tablets
          maxDistance={20} // Maximum distance for zooming out
          minDistance={5} // Minimum distance for zooming in
          minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
          maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
          enableDamping={true} // Smooth camera movement
          dampingFactor={0.05}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={isMobile ? 50 : 100} />
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
