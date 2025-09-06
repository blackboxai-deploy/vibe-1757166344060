"use client";

import Image from "next/image";

export default function AspirationProof() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B1D] mb-6">
            Ils l'ont compris : une bonne image, c'est <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">80% du boulot</span>.
          </h2>
          <p className="text-xl text-[#0B0B1D]/70 max-w-3xl mx-auto">
            Pendant que tes concurrents galèrent avec Canva, toi tu génères des visuels de pro.
          </p>
        </div>

        {/* Before/After showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Before */}
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-red-200 text-red-800 px-4 py-2 rounded-full font-bold text-sm mb-4">
                ❌ AVANT
              </div>
              <h3 className="text-xl font-bold text-[#0B0B1D] mb-2">Visuels amateurs</h3>
              <p className="text-[#0B0B1D]/60">Photos pixellisées, éclairage pourri</p>
            </div>
            
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70474c63-c623-48f1-a849-cefe03d1d8b1.png"
                alt="Exemple de photo produit amateur avec mauvais éclairage et fond moche"
                width={400}
                height={400}
                className="w-full h-full object-cover filter grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23EF4444'/%3E%3Ctext x='200' y='200' font-family='Inter, sans-serif' font-size='16' fill='white' text-anchor='middle' dy='0.3em'%3EPhoto Amateur%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            <div className="text-sm text-red-700 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>Taux de conversion: 0.8%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>Temps de création: 2 heures</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">•</span>
                <span>Coût designer: 150€</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-[#47F273]/30">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-[#47F273] text-[#0B0B1D] px-4 py-2 rounded-full font-bold text-sm mb-4">
                ✅ APRÈS
              </div>
              <h3 className="text-xl font-bold text-[#0B0B1D] mb-2">Visuels de pro</h3>
              <p className="text-[#0B0B1D]/60">Éclairage studio, mockup premium</p>
            </div>
            
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3db5be8c-af24-4a90-af6b-e8c272978897.png"
                alt="Produit professionnel en studio avec éclairage premium et fond marbre luxe"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%2347F273'/%3E%3Ctext x='200' y='200' font-family='Inter, sans-serif' font-size='16' fill='%230B0B1D' text-anchor='middle' dy='0.3em'%3EPhoto Pro%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            <div className="text-sm text-green-700 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#47F273]">•</span>
                <span className="font-bold">Taux de conversion: 3.2%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#47F273]">•</span>
                <span className="font-bold">Temps de création: 30 secondes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#47F273]">•</span>
                <span className="font-bold">Coût: 0€</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#0B0B1D] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  "J'ai doublé mon taux de clic en 3 jours. Juste en changeant mes visuels avec ClicDesign. Maintenant mes potes me demandent qui est mon photographe."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#47F273]/20 flex items-center justify-center">
                    <span className="text-[#47F273] font-bold">MA</span>
                  </div>
                  <div>
                    <div className="font-bold">Marc Antoine</div>
                    <div className="text-white/60">Fondateur @PharmaDrops</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="text-6xl font-bold text-[#47F273] mb-2">4x</div>
                <div className="text-white/80">Plus de conversions</div>
              </div>
            </div>
          </div>
          
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `radial-gradient(circle, #47F273 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Client logos */}
        <div className="mt-16 text-center">
          <p className="text-[#0B0B1D]/60 mb-8 font-medium">Ils nous font confiance</p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
            <div className="h-8 flex items-center">
              <div className="bg-[#0B0B1D] text-white px-4 py-2 rounded font-bold text-sm">
                DROPSHIP PRO
              </div>
            </div>
            <div className="h-8 flex items-center">
              <div className="bg-[#0B0B1D] text-white px-4 py-2 rounded font-bold text-sm">
                ECOM MASTERS
              </div>
            </div>
            <div className="h-8 flex items-center">
              <div className="bg-[#0B0B1D] text-white px-4 py-2 rounded font-bold text-sm">
                SHOPIFY ELITE
              </div>
            </div>
            <div className="h-8 flex items-center">
              <div className="bg-[#0B0B1D] text-white px-4 py-2 rounded font-bold text-sm">
                BRAND FACTORY
              </div>
            </div>
            <div className="h-8 flex items-center">
              <div className="bg-[#0B0B1D] text-white px-4 py-2 rounded font-bold text-sm">
                VISUAL BOOST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}