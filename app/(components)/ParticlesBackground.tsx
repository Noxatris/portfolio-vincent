"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function BubblesParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="bubbles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: {
            value: 30,
            density: { enable: true, area: 800 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 8 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 1,
              sync: false,
            },
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "top",
            outModes: { default: "out" },
            straight: false,
          },
          color: {
            value: "#cceeff", // Couleur bleu clair, comme de petites bulles
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
