"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

function FloatingSpheres() {
  const spheres = useRef<THREE.Group>(null);

  const sphereData = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 50,
      ] as [number, number, number],
      scale: Math.random() * 2 + 0.5, // Varied sizes from 0.5 to 2.5
      speed: Math.random() * 0.02 + 0.01,
      color: ["#06b6d4", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981"][
        Math.floor(Math.random() * 5)
      ],
    }));
  }, []);

  useFrame((state) => {
    if (spheres.current) {
      spheres.current.rotation.y = state.clock.elapsedTime * 0.1;
      spheres.current.children.forEach(
        (
          sphere: {
            position: { y: number };
            rotation: { x: number; z: number };
          },
          i: number
        ) => {
          sphere.position.y +=
            Math.sin(state.clock.elapsedTime * sphereData[i].speed + i) * 0.01;
          sphere.rotation.x = state.clock.elapsedTime * sphereData[i].speed;
          sphere.rotation.z =
            state.clock.elapsedTime * sphereData[i].speed * 0.5;
        }
      );
    }
  });

  return (
    <group ref={spheres}>
      {sphereData.map((data, i) => (
        <mesh key={i} position={data.position} scale={data.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={data.color}
            transparent
            opacity={0.3}
            emissive={data.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const sizes = new Float32Array(3000);

    for (let i = 0; i < 3000; i++) {
      // Create more spherical distribution
      const radius = Math.random() * 80 + 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Varied particle sizes
      sizes[i] = Math.random() * 3 + 0.5;
    }

    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.03) * 0.02;
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 15;
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 15;
    }
  });

  return (
    <>
      <pointLight ref={light} intensity={1.5} color="#4f46e5" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              particlesPosition.positions,
              3
            ]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[
              particlesPosition.sizes,
              1
            ]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={1}
          color="#8b5cf6"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.6}
          vertexColors={false}
        />
      </points>
    </>
  );
}

function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const ring4 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ring1.current) {
      ring1.current.rotation.x = state.clock.elapsedTime * 0.15;
      ring1.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
    if (ring2.current) {
      ring2.current.rotation.y = state.clock.elapsedTime * 0.2;
      ring2.current.rotation.x = state.clock.elapsedTime * 0.12;
    }
    if (ring3.current) {
      ring3.current.rotation.z = state.clock.elapsedTime * 0.18;
      ring3.current.rotation.y = state.clock.elapsedTime * 0.07;
    }
    if (ring4.current) {
      ring4.current.rotation.x = state.clock.elapsedTime * 0.1;
      ring4.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <>
      {/* Large ring */}
      <mesh ref={ring1} position={[-20, 8, -15]}>
        <torusGeometry args={[6, 0.2, 32, 100]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>
      {/* Medium ring */}
      <mesh ref={ring2} position={[15, -12, -20]}>
        <torusGeometry args={[4, 0.15, 32, 100]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
      {/* Small ring */}
      <mesh ref={ring3} position={[10, 15, -25]}>
        <torusGeometry args={[2, 0.1, 32, 100]} />
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.6} />
      </mesh>
      {/* Extra large ring */}
      <mesh ref={ring4} position={[-8, -5, -30]}>
        <torusGeometry args={[8, 0.25, 32, 100]} />
        <meshStandardMaterial color="#ef4444" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#8b5cf6" />
      <Stars
        radius={400}
        depth={80}
        count={1500}
        factor={6}
        saturation={0}
        fade
      />
      <ParticleField />
      <FloatingRings />
      <FloatingSpheres />
    </>
  );
}

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 35], fov: 75 }}
          style={{ background: "transparent" }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene3D />
          <OrbitControls
            enableZoom={true}
            minDistance={20}
            maxDistance={100}
            enablePan={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            dampingFactor={0.05}
            enableDamping={true}
            rotateSpeed={0.5}
            panSpeed={0.5}
            zoomSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1]">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="text-white drop-shadow-lg">The Future</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Experience the next generation of digital innovation with stunning
            3D visuals and immersive interactions that bring your ideas to life
            in ways you never imagined.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-6 left-6 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
          <p className="text-white/90 text-sm font-medium">
            3D Interactive Experience
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
          <p className="text-white/90 text-sm font-medium">
            Drag • Zoom • Explore
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
