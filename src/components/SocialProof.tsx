"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SocialProof() {
  const [liveCount, setLiveCount] = useState(118);
  const [remainingSpots, setRemainingSpots] = useState(17);

  // Simulate live counter
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLiveCount(prev => prev + 1);
        setRemainingSpots(prev => Math.max(1, prev - (Math.random() > 0.5 ? 1 : 0)));
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah M.",
      business: "@BeautyDropFr",
      avatar: "SM",
      content: "Mes visuels Instagram ont explosé. +40% d'engagement en 2 semaines. Mes clients pensent que j'ai un photographe à temps plein 😂",
      metrics: "+40% engagement",
      time: "il y a 2h"
    },
    {
      name: "Kevin D.",
      business: "@TechStoreElite",
      avatar: "KD",
      content: "J'ai économisé 800€ ce mois-ci juste sur les frais de design. Et mes visuels sont 10x mieux qu'avant. ClicDesign = game changer.",
      metrics: "800€ économisés",
      time: "il y a 4h"
    },
    {
      name: "Marie L.",
      business: "@FashionBoost",
      avatar: "ML",
      content: "Avant: 1 visuel = 2h de boulot. Maintenant: 10 visuels = 5 minutes. Ma productivité a explosé. Je recommande les yeux fermés.",
      metrics: "2400% plus rapide",
      time: "il y a 6h"
    }
  ];

  const screenshots = [
    {
      title: "Dashboard ClicDesign",
      description: "Interface ultra-intuitive",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6551a569-2ce3-456c-a9b3-503330fb8c1a.png"
    },
    {
      title: "Génération en direct",
      description: "Résultats en temps réel",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/767f42da-08d0-4cc8-9d71-1f5b4b4bd203.png"
    },
    {
      title: "Galerie de résultats",
      description: "Tous tes visuels organisés",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67022066-c73f-43a2-b3ff-3a5ef3ffeadb.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#47F273]/20 text-[#0B0B1D] px-4 py-2 rounded-full font-bold text-sm mb-6">
            🔥 Trending
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B1D] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">+{liveCount} marques</span> et créateurs utilisent déjà ClicDesign
          </h2>
          <p className="text-xl text-[#0B0B1D]/70 max-w-3xl mx-auto">
            Rejoins la communauté qui cartonne. Pendant que tes concurrents dorment, eux ils vendent.
          </p>
        </div>

        {/* Live testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-[#0B0B1D]/10 hover:shadow-xl hover:shadow-[#47F273]/10 transition-all duration-300 relative"
            >
              {/* Live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <div className="w-2 h-2 bg-[#47F273] rounded-full animate-pulse" />
                <span className="text-xs text-[#0B0B1D]/60">{testimonial.time}</span>
              </div>
              
              {/* Avatar and info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#47F273]/20 flex items-center justify-center font-bold text-[#0B0B1D]">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#0B0B1D]">{testimonial.name}</div>
                  <div className="text-sm text-[#0B0B1D]/60">{testimonial.business}</div>
                </div>
                
                {/* Verified badge */}
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <p className="text-[#0B0B1D]/80 leading-relaxed mb-4">
                {testimonial.content}
              </p>
              
              {/* Metric */}
              <div className="inline-flex items-center gap-2 bg-[#47F273]/10 text-[#0B0B1D] px-3 py-1 rounded-full font-semibold text-sm">
                📈 {testimonial.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Screenshots */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23F8F5F0'/%3E%3Ctext x='200' y='150' font-family='Inter, sans-serif' font-size='14' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3E${screenshot.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0B0B1D]/0 group-hover:bg-[#0B0B1D]/20 transition-all duration-300" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#47F273] rounded-full flex items-center justify-center text-[#0B0B1D] shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h4 className="font-bold text-[#0B0B1D] mb-1">{screenshot.title}</h4>
                <p className="text-[#0B0B1D]/60 text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-200 text-red-800 px-4 py-2 rounded-full font-bold text-sm mb-4">
                  ⚠️ ATTENTION
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0B0B1D] mb-4">
                  Places beta limitées : <span className="text-red-600">{remainingSpots} comptes gratuits</span> restants ce mois-ci.
                </h3>
                
                <p className="text-[#0B0B1D]/70 mb-6 leading-relaxed">
                  On limite l'accès pour garantir la qualité du service. Une fois les {remainingSpots} places écoulées, 
                  tu devras attendre janvier 2025 ou payer le prix fort.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group bg-[#47F273] hover:bg-[#2DD55B] text-[#0B0B1D] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Réserver ma place gratuite
                    <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                  
                  <button className="text-[#0B0B1D]/70 hover:text-[#0B0B1D] font-medium text-lg px-8 py-4 rounded-xl border-2 border-[#0B0B1D]/20 hover:border-[#0B0B1D]/40 transition-all duration-300">
                    Voir les prix normaux
                  </button>
                </div>
              </div>
              
              {/* Countdown visual */}
              <div className="flex-shrink-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">{remainingSpots}</div>
                  <div className="text-[#0B0B1D]/70 font-medium">Places restantes</div>
                  <div className="mt-2 w-full bg-red-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${(remainingSpots / 20) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, red 0px, red 2px, transparent 2px, transparent 20px)`
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}