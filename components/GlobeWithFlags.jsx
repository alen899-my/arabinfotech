"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ---------------------------------------------------------
   Convert latitude + longitude to 3D coordinates on sphere
----------------------------------------------------------*/
function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

/* ---------------------------------------------------------
   Flag pin component
----------------------------------------------------------*/
const FlagPin = ({ lat, lon, label, flagEmoji, globeRadius = 2 }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  // 3D positioning for pin
  const pos = useMemo(
    () => latLongToVector3(lat, lon, globeRadius),
    [lat, lon, globeRadius]
  );

  // floating effect
  useFrame((state, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.1;
    }
  });

  // HTML flag label should float a bit above the pin
  const htmlPos = pos.clone().multiplyScalar((globeRadius + 0.2) / globeRadius);

  return (
    <group position={pos}>
      {/* 3D Pin */}
      <mesh ref={ref}>
        <cylinderGeometry args={[0.02, 0.03, 0.6, 8]} />
        <meshStandardMaterial color={hovered ? "#27e8c2" : "#ffffff"} />
      </mesh>

      {/* Floating HTML Flag Label */}
      <Html
        position={[
          htmlPos.x - pos.x,
          htmlPos.y - pos.y,
          htmlPos.z - pos.z,
        ]}
        center
        distanceFactor={6}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 12px",
            borderRadius: "14px",
            background: "rgba(6,10,12,0.85)",
            color: "white",
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            transform: `translateY(${hovered ? "-6px" : "0px"}) scale(${
              hovered ? 1.06 : 1
            })`,
            transition: "all 220ms ease",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            {flagEmoji}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "14px" }}>{label}</strong>
            <span style={{ fontSize: "12px", color: "#d0d0d0" }}>
              {lat.toFixed(2)}, {lon.toFixed(2)}
            </span>
          </div>
        </div>
      </Html>
    </group>
  );
};

/* ---------------------------------------------------------
   Main Globe Scene
----------------------------------------------------------*/
const GlobeScene = () => {
  const globeRadius = 2;

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      {/* Space background */}
      <Stars radius={50} depth={20} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Globe */}
      <mesh rotation={[0.4, -0.2, 0]}>
        <sphereGeometry args={[globeRadius, 64, 64]} />
        <meshStandardMaterial color={"#0a3d3f"} roughness={0.8} metalness={0.1} />
      </mesh>

      {/* USA */}
      <FlagPin
        lat={40.7128}
        lon={-74.006}
        label="New York, USA"
        flagEmoji="🇺🇸"
        globeRadius={globeRadius}
      />

      {/* India */}
      <FlagPin
        lat={28.6139}
        lon={77.209}
        label="New Delhi, India"
        flagEmoji="🇮🇳"
        globeRadius={globeRadius}
      />

      {/* UAE */}
      <FlagPin
        lat={25.2048}
        lon={55.2708}
        label="Dubai, UAE"
        flagEmoji="🇦🇪"
        globeRadius={globeRadius}
      />

      <OrbitControls
        enablePan={false}
        zoomSpeed={0.7}
        rotateSpeed={0.6}
        minDistance={3}
        maxDistance={8}
      />
    </>
  );
};

/* ---------------------------------------------------------
   Exported Component Wrapper
----------------------------------------------------------*/
export default function GlobeWithFlags() {
  return (
    <div className="w-full h-[650px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <GlobeScene />
      </Canvas>
    </div>
  );
}
