import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  alpha: number;
};

const OrangeParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const createParticles = (count: number, width: number, height: number) => {
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 4 + 1; // different sizes
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    return particles;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particlesRef.current = createParticles(
        15,
        canvas.width,
        canvas.height
      );
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // bounce effect
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 140, 0, ${p.alpha})`; // orange color
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    drawParticles();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 0,
  pointerEvents: "none",
}}
    />
  );
};

export default OrangeParticles;