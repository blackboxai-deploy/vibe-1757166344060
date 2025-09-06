"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5F0] via-[#F8F5F0] to-[#E8E5E0]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle, #0B0B1D 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#0B0B1D]">
            Crée des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">visuels e-commerce</span> qui vendent pendant que tu dors
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#0B0B1D]/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Fini les visuels moches. Fini les designers chers. <strong>ClicDesign</strong>, c'est ton générateur d'images produit IA.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group bg-[#47F273] hover:bg-[#2DD55B] text-[#0B0B1D] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[#47F273]/20">
              Commencer gratuitement
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            
            <button className="text-[#0B0B1D]/70 hover:text-[#0B0B1D] font-medium text-lg px-8 py-4 rounded-xl border-2 border-[#0B0B1D]/20 hover:border-[#0B0B1D]/40 transition-all duration-300">
              Voir la démo
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-[#0B0B1D]/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#47F273] rounded-full animate-pulse" />
              <span className="font-medium">Gratuit pendant 7 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#47F273] rounded-full animate-pulse" />
              <span className="font-medium">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#47F273] rounded-full animate-pulse" />
              <span className="font-medium">Setup en 2 minutes</span>
            </div>
          </div>
        </div>
        
        {/* Visual preview */}
        <div className="relative lg:order-last">
          <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#0B0B1D]/10">
            {/* Main product mockup */}
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d238a64-fec5-497d-870c-dc7f72168686.png"
                alt="Exemple de visuel produit e-commerce généré par ClicDesign avec packaging premium et éclairage professionnel"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F8F5F0'/%3E%3Ctext x='300' y='300' font-family='Inter, sans-serif' font-size='18' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3EProduit Premium%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            {/* Small preview grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6b10e6b-d3c8-44b8-8d20-79e3fea0fe2c.png"
                  alt="Mockup packaging crème minimaliste"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23F8F5F0'/%3E%3Ctext x='100' y='100' font-family='Inter, sans-serif' font-size='12' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3EMockup 1%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44d82964-0c73-4c95-8da4-2e32b12d8a29.png"
                  alt="Produit sur fond marbre blanc luxe"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23F8F5F0'/%3E%3Ctext x='100' y='100' font-family='Inter, sans-serif' font-size='12' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3EMockup 2%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4bf57265-b487-43ca-b00c-b8a719be7790.png"
                  alt="Studio shot éclairage cinématique"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23F8F5F0'/%3E%3Ctext x='100' y='100' font-family='Inter, sans-serif' font-size='12' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3EMockup 3%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
            
            {/* Generate indicator */}
            <div className="mt-4 flex items-center justify-between text-sm text-[#0B0B1D]/60">
              <span className="font-medium">Généré en 12 secondes</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#47F273] rounded-full animate-pulse" />
                <span>IA en cours</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-[#47F273] text-[#0B0B1D] text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
            Nouveau !
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white text-[#0B0B1D] text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-[#0B0B1D]/10">
            💡 Prêt pour Shopify
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-[#0B0B1D]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#0B0B1D]/30 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}