"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Bookmark } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export function SantoriniCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -20;
    const rotateY = (mouseX / rect.width) * 20;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <Card
      ref={cardRef}
      className="w-full max-w-sm p-0 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl transition-all duration-300 ease-out cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${
          mousePosition.y
        }deg) rotateY(${mousePosition.x}deg) scale(${isHovered ? 1.05 : 1})`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Hero Image Section */}
      <div className="relative h-64">
        <Image
          src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?cs=srgb&dl=pexels-bella-white-201200-635279.jpg&fm=jpg"
          alt="Santorini sunset view with white buildings and blue domes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60" />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Bookmark className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold text-white leading-tight">
            Santorini Sunset Loft
          </h2>
          <span className="text-xl font-bold text-white ml-2">$890</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          Experience a cliffside loft with iconic white walls, blue domes, and
          magical sunset views.
        </p>

        {/* Rating and Tags */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-white">4.8</span>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-700/50 text-gray-200 text-xs font-medium rounded-full">
              Romantic Stay
            </span>
            <span className="px-3 py-1 bg-slate-700/50 text-gray-200 text-xs font-medium rounded-full">
              2 Night Trip
            </span>
          </div>
        </div>

        {/* Book Now Button */}
        <Button className="w-full bg-white hover:bg-gray-100 text-slate-900 font-medium py-3 rounded-xl">
          Book now
        </Button>
      </div>
    </Card>
  );
}
