import React from 'react';
import './EditorialBackdrop.css';

export const EditorialBackdrop = () => {
  return (
    <div className="editorial-backdrop" aria-hidden="true">
      {/* Organic Liquid-Glass Ambient Image Layer */}
      <div 
        className="backdrop-image-layer" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}liquid-glass-bg.jpg)` }}
      />

      <svg 
        className="backdrop-svg"
        viewBox="0 0 1600 1200" 
        preserveAspectRatio="xMidYMid slice" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Prismatic Cyan & Soft Teal Environmental Caustic */}
          <radialGradient id="prismatic-cyan-refraction" cx="12%" cy="14%" r="48%">
            <stop offset="0%" stopColor="#66D9E8" stopOpacity="0.09" />
            <stop offset="45%" stopColor="#7CD8C0" stopOpacity="0.035" />
            <stop offset="100%" stopColor="#66D9E8" stopOpacity="0" />
          </radialGradient>

          {/* Warm Coral & Peach Refraction (Upper Right / Hero Balance) */}
          <radialGradient id="prismatic-coral-refraction" cx="88%" cy="28%" r="46%">
            <stop offset="0%" stopColor="#FF947A" stopOpacity="0.075" />
            <stop offset="50%" stopColor="#F5C46A" stopOpacity="0.025" />
            <stop offset="100%" stopColor="#FF947A" stopOpacity="0" />
          </radialGradient>

          {/* Prismatic Lavender & Violet Caustic (Mid Canvas / Case Studies) */}
          <radialGradient id="prismatic-lavender-refraction" cx="42%" cy="62%" r="52%">
            <stop offset="0%" stopColor="#B9A5F5" stopOpacity="0.065" />
            <stop offset="55%" stopColor="#66D9E8" stopOpacity="0.018" />
            <stop offset="100%" stopColor="#B9A5F5" stopOpacity="0" />
          </radialGradient>

          {/* Golden Amber Caustic (Lower Right / Education & Contact) */}
          <radialGradient id="prismatic-amber-refraction" cx="78%" cy="88%" r="44%">
            <stop offset="0%" stopColor="#F5C46A" stopOpacity="0.07" />
            <stop offset="60%" stopColor="#FF947A" stopOpacity="0.015" />
            <stop offset="100%" stopColor="#F5C46A" stopOpacity="0" />
          </radialGradient>

          {/* Linear Chromatic Gradients for Orbital Vector Arcs */}
          <linearGradient id="arc-grad-cyan-coral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66D9E8" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#B9A5F5" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FF947A" stopOpacity="0.18" />
          </linearGradient>

          <linearGradient id="arc-grad-amber-teal" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5C46A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#7CD8C0" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#66D9E8" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        {/* Ambient Prismatic Atmospheric Diffusion */}
        <rect width="100%" height="100%" fill="url(#prismatic-cyan-refraction)" />
        <rect width="100%" height="100%" fill="url(#prismatic-coral-refraction)" />
        <rect width="100%" height="100%" fill="url(#prismatic-lavender-refraction)" />
        <rect width="100%" height="100%" fill="url(#prismatic-amber-refraction)" />

        {/* Calibrated Prismatic Orbital Lines (Framing whitespace without intersecting text) */}
        {/* Upper Outer Arc (Framing Hero top-right) */}
        <ellipse 
          cx="1280" 
          cy="340" 
          rx="760" 
          ry="480" 
          transform="rotate(-18 1280 340)"
          stroke="url(#arc-grad-cyan-coral)" 
          strokeWidth="1.1" 
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Secondary Delicate Arc (Counterbalancing bottom-left) */}
        <ellipse 
          cx="220" 
          cy="220" 
          rx="560" 
          ry="340" 
          transform="rotate(22 220 220)"
          stroke="url(#arc-grad-amber-teal)" 
          strokeWidth="1" 
          strokeDasharray="4 8"
          fill="none"
        />

        {/* Deep Field Arc (Anchoring Mid-page Section Transitions) */}
        <ellipse 
          cx="880" 
          cy="980" 
          rx="740" 
          ry="410" 
          transform="rotate(-10 880 980)"
          stroke="url(#arc-grad-cyan-coral)" 
          strokeWidth="1" 
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Subtle Prismatic Specular Ring (Small focal refraction) */}
        <circle 
          cx="1340" 
          cy="260" 
          r="110" 
          stroke="#F5C46A" 
          strokeWidth="0.8" 
          strokeOpacity="0.15" 
          fill="none" 
        />
        <circle 
          cx="1340" 
          cy="260" 
          r="2" 
          fill="#FF947A" 
          fillOpacity="0.4" 
        />
      </svg>
    </div>
  );
};

export default EditorialBackdrop;
