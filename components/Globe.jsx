"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";

const LOCATIONS = [
  {
    name: "USA",
    emoji: "🇺🇸",
    position: [-1.28, 1.16, 1.45],
    surface: [-1.05, 0.95, 1.3], // line start point
    office: {
      address: "New York, USA",
      email: "usa-office@company.com",
      phone: "+1 555 123 456",
    },
  },
  {
    name: "India",
    emoji: "🇮🇳",
    position: [0.41, 0.45, 1.89],
    surface: [0.35, 0.38, 1.6],
    office: {
      address: "Bangalore, India",
      email: "india-office@company.com",
      phone: "+91 98765 43210",
    },
  },
  {
    name: "UAE",
    emoji: "🇦🇪",
    position: [0.91, 0.85, 1.71],
    surface: [0.75, 0.70, 1.45],
    office: {
      address: "Dubai, UAE",
      email: "uae-office@company.com",
      phone: "+971 55 123 9876",
    },
  },
];

function Line({ start, end }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color="white" linewidth={1} />
    </line>
  );
}

function Earth() {
  const earthTexture = useTexture("/map.png");
  return (
    <Sphere args={[2, 64, 64]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
}

export default function Globe() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">

      {/* Popup */}
      {selected && (
        <div className="absolute top-5 right-5 bg-white text-black shadow-xl p-4 rounded-xl w-64 z-50">
          <h2 className="font-bold text-lg">{selected.name} Office</h2>
          <p className="mt-2 text-sm">
            📍 {selected.office.address}
            <br />
            📧 {selected.office.email}
            <br />
            📞 {selected.office.phone}
          </p>
          <button
            className="mt-3 px-3 py-1 text-sm bg-red-500 text-white rounded"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </div>
      )}

      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Earth />

        {/* Lines + Emoji Markers */}
        {LOCATIONS.map((loc, i) => (
          <group key={i}>
            {/* Thin line */}
            <Line start={loc.surface} end={loc.position} />

            {/* Emoji + Label */}
            <Html
              position={loc.position}
              center
              transform
              style={{ pointerEvents: "auto" }}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelected(loc)}
              >
                <div className="text-[4px]">{loc.emoji}</div>
                <span className="mt-[1px] text-[4px] text-white bg-black/70 px-1 py-[1px] rounded">
                  {loc.name}
                </span>
              </div>
            </Html>
          </group>
        ))}

        <OrbitControls enableRotate={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="w-full max-w-6xl px-6 py-16 bg-white">

        <h1 className="momo-font text-5xl font-semibold text-white leading-tight mb-10">
          Our Focus
        </h1>

        

      </section>

      {/* ---------------- GLOBE SECTION ---------------- */}
      <section className="w-full py-20 px-6 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <h1 className="text-white momo-font text-4xl md:text-5xl font-light leading-tight">
            “We help brands scale faster,<br />perform better,<br />and stand out online”
          </h1>

          <Globe />
        </div>
      </section>