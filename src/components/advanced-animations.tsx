"use client";

import { useEffect, useRef } from "react";

// Animated mesh gradient background
export function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.002;

      const width = canvas.width;
      const height = canvas.height;

      // Create gradient
      const gradient = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time) * 100,
        height * 0.5 + Math.cos(time * 0.8) * 100,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );

      gradient.addColorStop(0, "rgba(45, 156, 255, 0.1)");
      gradient.addColorStop(0.5, "rgba(108, 75, 255, 0.05)");
      gradient.addColorStop(1, "rgba(5, 8, 22, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
    />
  );
}

// Particle network animation
export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1 + 0.5
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.fillStyle = "rgba(45, 156, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(45, 156, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
    />
  );
}

// Floating orbs component
export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-agyntiq-primary-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-agyntiq-purple/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-agyntiq-primary-blue/5 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float animation-delay-4000" />
    </div>
  );
}

// Animated scroll progress indicator
export function ScrollProgress() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 4;

    const updateProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      ctx.fillStyle = "rgba(5, 8, 22, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "rgba(45, 156, 255, 0.5)");
      gradient.addColorStop(0.5, "rgba(108, 75, 255, 0.5)");
      gradient.addColorStop(1, "rgba(45, 156, 255, 0.5)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, (scrolled / 100) * canvas.width, canvas.height);

      requestAnimationFrame(updateProgress);
    };

    updateProgress();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-1 -z-5 pointer-events-none"
    />
  );
}

// Parallax background
export function ParallaxBg() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        element.style.transform = `translateY(${e.clientY * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
