"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "L'IA va vraiment remplacer mes photos ?",
      answer: "Pas remplacer, améliorer. Tu upload ton produit de base, et l'IA génère 10 versions premium avec différents angles, éclairages et fonds. C'est comme avoir un photographe pro 24h/24."
    },
    {
      question: "Ça marche pour tous types de produits ?",
      answer: "Électronique, mode, cosmétiques, déco, food... Si ça se vend, ClicDesign sait le mettre en valeur. Notre IA est formée sur +2M de visuels e-commerce qui convertissent."
    },
    {
      question: "Et si je suis pas satisfait ?",
      answer: "Remboursement intégral sous 30 jours. Sans questions. On est tellement sûrs du résultat qu'on prend le risque à ta place."
    },
    {
      question: "Mes visuels seront-ils uniques ?",
      answer: "100%. Chaque génération est unique grâce à notre algorithme propriétaire. Tes concurrents ne pourront jamais avoir les mêmes visuels."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0B0B1D] via-[#1a1a2e] to-[#0B0B1D] text-white relative overflow-hidden">
      {/* Background effects */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle, #47F273 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#47F273]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#47F273]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#47F273]/20 text-[#47F273] px-4 py-2 rounded-full font-bold text-sm mb-8">
            ⚡ Dernière chance
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Tu scrolles. Tu cliques. <br/>
            Et pendant ce temps, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">tes concurrents génèrent des visuels qui vendent</span>.
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Chaque seconde que tu perds, c'est une vente qui file chez tes concurrents. 
            Arrête de procrastiner. Agis maintenant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-[#47F273] hover:bg-[#2DD55B] text-[#0B0B1D] font-bold text-xl px-12 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#47F273]/30">
              Je teste ClicDesign maintenant
              <span className="inline-block ml-3 transition-transform group-hover:translate-x-1">🚀</span>
            </button>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#47F273] mb-1">7 jours</div>
              <div className="text-white/60">gratuits</div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Setup en 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Aucun téléchargement</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span>Résultats immédiats</span>
            </div>
          </div>
        </div>

        {/* Stats counter */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2">
              12,847
            </div>
            <div className="text-white/80 text-lg">Visuels générés aujourd'hui</div>
            <div className="text-white/50 text-sm mt-1">Et ça continue de monter...</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2">
              €847K
            </div>
            <div className="text-white/80 text-lg">Économies générées</div>
            <div className="text-white/50 text-sm mt-1">vs coûts designers</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-4xl lg:text-5xl font-bold text-[#47F273] mb-2">
              97%
            </div>
            <div className="text-white/80 text-lg">Clients satisfaits</div>
            <div className="text-white/50 text-sm mt-1">Sur 1,200+ avis</div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Questions fréquentes
            </h3>
            <p className="text-white/70">
              Les réponses aux questions que tu te poses (et celles que tu devrais te poser)
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#47F273]/50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h4>
                    <div className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-[#47F273]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 pt-12">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#47F273] rounded-xl flex items-center justify-center">
                  <span className="text-[#0B0B1D] font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">ClicDesign</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                La première IA française dédiée aux visuels e-commerce. 
                Parce qu'une image vaut 1000 mots, et 1000€ de chiffre d'affaires.
              </p>
            </div>
            
            {/* Links */}
            <div>
              <h5 className="font-bold text-white mb-4">Produit</h5>
              <div className="space-y-2 text-white/60">
                <div className="hover:text-[#47F273] cursor-pointer">Fonctionnalités</div>
                <div className="hover:text-[#47F273] cursor-pointer">Tarifs</div>
                <div className="hover:text-[#47F273] cursor-pointer">API</div>
                <div className="hover:text-[#47F273] cursor-pointer">Intégrations</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Support</h5>
              <div className="space-y-2 text-white/60">
                <div className="hover:text-[#47F273] cursor-pointer">Contact</div>
                <div className="hover:text-[#47F273] cursor-pointer">Documentation</div>
                <div className="hover:text-[#47F273] cursor-pointer">Tutoriels</div>
                <div className="hover:text-[#47F273] cursor-pointer">Statut</div>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8">
            <div className="text-white/60 text-sm">
              © 2024 ClicDesign. Tous droits réservés. 
              <span className="mx-2">•</span>
              <span className="hover:text-[#47F273] cursor-pointer">CGU</span>
              <span className="mx-2">•</span>
              <span className="hover:text-[#47F273] cursor-pointer">Confidentialité</span>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-white/60 text-sm">Made in 🇫🇷 France</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}