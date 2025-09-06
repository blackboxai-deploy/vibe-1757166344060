"use client";

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mockups réalistes",
      description: "Prêt pour Amazon / Shopify / TikTok",
      details: "Templates optimisés pour chaque plateforme. Dimensions parfaites, éclairage studio, angles pros."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Visuels packagings en 30s",
      description: "Plus rapide qu'un café",
      details: "Upload ton logo, choisis ton style, et récupère 10 variations premium en quelques secondes."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Fonds personnalisables",
      description: "Crème, marbre, studio",
      details: "12 styles de fonds premium. Marbre italien, studio neutre, textures organiques."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196v4M12 16v4m9.804-12h-4m-8 0h-4" />
        </svg>
      ),
      title: "Plus besoin de designer",
      description: "Ni de Midjourney",
      details: "Fini les 150€ par visuel. Fini les prompts à la con. Juste une IA qui comprend l'e-commerce."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8F5F0] to-[#E8E5E0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B1D] mb-6">
            Tu gagnes du temps. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">Tu gagnes de l'argent.</span>
          </h2>
          <p className="text-xl text-[#0B0B1D]/70 max-w-3xl mx-auto">
            Arrête de perdre des ventes à cause de visuels médiocres. ClicDesign transforme tes produits en gold mines.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#47F273]/10 border border-[#0B0B1D]/5"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#47F273] to-[#2DD55B] rounded-xl flex items-center justify-center text-[#0B0B1D] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-[#0B0B1D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#47F273] font-semibold mb-3">
                  → {feature.description}
                </p>
                <p className="text-[#0B0B1D]/70 leading-relaxed">
                  {feature.details}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-[#0B0B1D]/50 group-hover:text-[#47F273] transition-colors duration-300">
                <span className="text-sm font-medium">En savoir plus</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-[#0B0B1D] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Les chiffres qui <span className="text-[#47F273]">parlent</span>
              </h3>
              <p className="text-white/80">Résultats moyens de nos utilisateurs après 30 jours</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2 group-hover:scale-110 transition-transform duration-300">
                  +284%
                </div>
                <div className="text-white/80">Taux de conversion</div>
                <div className="text-sm text-white/60 mt-1">vs photos maison</div>
              </div>
              
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2 group-hover:scale-110 transition-transform duration-300">
                  2,400€
                </div>
                <div className="text-white/80">Économie moyenne</div>
                <div className="text-sm text-white/60 mt-1">sur frais de design</div>
              </div>
              
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2 group-hover:scale-110 transition-transform duration-300">
                  18h
                </div>
                <div className="text-white/80">Temps économisé</div>
                <div className="text-sm text-white/60 mt-1">par semaine</div>
              </div>
            </div>
          </div>
          
          {/* Background effects */}
          <div 
            className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `radial-gradient(circle, #47F273 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#47F273]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#47F273]/10 rounded-full blur-3xl" />
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#47F273]/20 text-[#0B0B1D] px-4 py-2 rounded-full font-semibold text-sm mb-6">
            💡 Astuce pro
          </div>
          <h3 className="text-2xl font-bold text-[#0B0B1D] mb-4">
            Tes concurrents ont déjà 6 mois de retard
          </h3>
          <p className="text-[#0B0B1D]/70 max-w-2xl mx-auto mb-8">
            Pendant qu'ils galèrent avec Photoshop, toi tu génères 50 visuels par jour. 
            Le temps, c'est de l'argent. Et ClicDesign, c'est ta machine à sous.
          </p>
          
          <button className="group bg-[#47F273] hover:bg-[#2DD55B] text-[#0B0B1D] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-[#47F273]/20">
            Démarrer maintenant
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}