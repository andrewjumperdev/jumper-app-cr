"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("Iniciando partículas...");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("Partículas cargadas correctamente");
      setInit(true);
    });
  
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const particlesOptions = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      particles: {
        number: { value: isMobile ? 20 : 80 },
        size: { value: isMobile ? 2 : 3 },
        move: { enable: true, speed: isMobile ? 1 : 1.5 },
        color: { value: "#fff" },
        links: { enable: true, color: "#fff", distance: isMobile ? 50 : 150 },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "repulse" },
        },
      },
    }),
    [isMobile]
  );
  
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-transparent">
      {init && <Particles id="tsparticles" options={particlesOptions} />}
    </div>
  );
  
};

export default ParticlesBackground;
