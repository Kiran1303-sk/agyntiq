"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Animated background particles component
export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-blue-purple opacity-20 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
    </div>
  );
}

// Gradient text component
export function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-gradient-blue-purple ${className}`}>
      {children}
    </span>
  );
}

// Premium button component
export function PremiumButton({
  children,
  href,
  secondary = false,
  className = ""
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  const baseClass = secondary
    ? "border border-agyntiq-border bg-white/5 hover:bg-white/10 text-white"
    : "bg-gradient-blue-purple text-white hover:shadow-glow";

  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}

// Glass card component
export function GlassCard({
  children,
  className = "",
  hoverEffect = true
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-panel rounded-2xl p-6 ${hoverEffect ? "card-hover" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Stats counter animation
export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span className="font-bold">
      {displayValue}
      {suffix}
    </span>
  );
}

// Feature highlight component
export function FeatureHighlight({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <GlassCard className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-blue-purple opacity-0 group-hover:opacity-5 transition duration-300" />
      <div className="relative">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-agyntiq-text-secondary">{description}</p>
      </div>
    </GlassCard>
  );
}

// Pricing card component
export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl p-8 transition-all ${
        highlighted
          ? "glass-panel-strong border-agyntiq-primary-blue/50 ring-1 ring-agyntiq-primary-blue/30 md:scale-105"
          : "glass-panel border-agyntiq-border"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-blue-purple text-white text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-agyntiq-text-secondary text-sm mb-6">{description}</p>
      <div className="mb-8">
        <span className="text-5xl font-bold text-white">{price}</span>
      </div>
      <button className="w-full mb-8 py-3 rounded-xl bg-gradient-blue-purple text-white font-semibold hover:shadow-glow transition">
        Get Started
      </button>
      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-agyntiq-primary-blue mt-0.5">✓</span>
            <span className="text-sm text-agyntiq-text-secondary">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Testimonial card component
export function TestimonialCard({
  author,
  role,
  text,
  rating
}: {
  author: string;
  role: string;
  text: string;
  rating: number;
}) {
  return (
    <GlassCard>
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">⭐</span>
        ))}
      </div>
      <p className="text-agyntiq-text-secondary italic mb-4">"{text}"</p>
      <div className="border-t border-agyntiq-border pt-4">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-agyntiq-text-secondary">{role}</p>
      </div>
    </GlassCard>
  );
}

// Animated gradient border
export function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-blue-purple opacity-20 blur-lg" />
      <div className="relative rounded-2xl p-[1px] bg-gradient-blue-purple">
        <div className="rounded-2xl bg-agyntiq-deep-black p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// Section heading component
export function SectionHeading({
  badge,
  title,
  subtitle
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      data-reveal
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      {badge && (
        <div className="section-kicker mb-4 justify-center inline-block">
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-agyntiq-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
