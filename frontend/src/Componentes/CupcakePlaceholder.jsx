import React from "react";

const CupcakePlaceholder = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo */}
      <rect width="200" height="200" fill="#f9f5eb" />
      
      {/* Base del cupcake */}
      <rect x="70" y="120" width="60" height="50" fill="#d4a76a" rx="5" />
      
      {/* Parte superior del cupcake */}
      <ellipse cx="100" cy="120" rx="40" ry="20" fill="#f5c8bd" />
      
      {/* Crema */}
      <path d="M60,120 Q100,70 140,120" fill="#f5e1bd" stroke="#f5e1bd" strokeWidth="2" />
      
      {/* Decoraciones */}
      <circle cx="80" cy="100" r="4" fill="#ff7c5e" />
      <circle cx="120" cy="100" r="4" fill="#ff7c5e" />
      <circle cx="100" cy="90" r="4" fill="#ff7c5e" />
      
      {/* Bandeja de madera */}
      <rect x="50" y="170" width="100" height="10" fill="#8b5a2b" rx="2" />
    </svg>
  );
};

export default CupcakePlaceholder;