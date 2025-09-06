"use client";

import { useState } from "react";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "pour toujours",
      description: "Parfait pour tester",
      features: [
        "10 images/mois",
        "3 styles de fond",
        "Accès limité",
        "Sans watermark",
        "Export web (720p)"
      ],
      cta: "Commencer",
      ctaStyle: "border-2 border-[#0B0B1D]/20 text-[#0B0B1D] hover:border-[#0B0B1D]/40",
      popular: false,
      savings: null
    },
    {
      name: "Pro",
      price: "29€",
      period: "/mois",
      description: "Le choix des pros",
      features: [
        "Images illimitées",
        "12 fonds + angles premium",
        "Export HD (4K)",
        "Support prioritaire",
        "API access",
        "Variations infinies"
      ],
      cta: "Je passe pro",
      ctaStyle: "bg-[#47F273] text-[#0B0B1D] hover:bg-[#2DD55B]",
      popular: true,
      savings: "vs 450€ de designer"
    },
    {
      name: "Agence",
      price: "79€",
      period: "/mois",
      description: "Pour les gros volumes",
      features: [
        "Jusqu'à 5 marques",
        "3 utilisateurs inclus",
        "Export HD + PSD",
        "Licence commerciale",
        "Formation équipe",
        "Support dédié 24h"
      ],
      cta: "Devenir partenaire",
      ctaStyle: "bg-[#0B0B1D] text-white hover:bg-[#0B0B1D]/80",
      popular: false,
      savings: "vs 2,400€ d'agence"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F8F5F0] via-white to-[#E8E5E0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B1D] mb-6">
            Investis dans tes visuels. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47F273] to-[#2DD55B]">Pas dans tes regrets.</span>
          </h2>
          <p className="text-xl text-[#0B0B1D]/70 max-w-3xl mx-auto">
            Une image de merde, c'est une vente de perdue. Une image de pro, c'est ton chiffre d'affaires qui explose.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#47F273]/10 to-[#2DD55B]/10 border-2 border-[#47F273]/30 shadow-xl shadow-[#47F273]/20"
                  : "bg-white/80 backdrop-blur-sm border border-[#0B0B1D]/10 hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#47F273] text-[#0B0B1D] px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ Le + populaire
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0B0B1D] mb-2">{plan.name}</h3>
                <p className="text-[#0B0B1D]/60 mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-[#0B0B1D]">{plan.price}</span>
                  <span className="text-[#0B0B1D]/60">{plan.period}</span>
                </div>
                
                {plan.savings && (
                  <div className="text-sm text-[#47F273] font-semibold">
                    💰 Économie: {plan.savings}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-[#47F273]/20" : "bg-[#0B0B1D]/10"
                    }`}>
                      <svg 
                        className={`w-3 h-3 ${plan.popular ? "text-[#47F273]" : "text-[#0B0B1D]"}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#0B0B1D]/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>

              {/* Hover effect */}
              {hoveredPlan === index && !plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#47F273]/5 to-[#2DD55B]/5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="text-center mb-12">
          <p className="text-[#0B0B1D]/60 text-lg mb-4">
            Sans engagement. Résiliable en 1 clic.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#0B0B1D]/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1l3.09 6.26L22 9l-5 4.87L18.18 21L12 17.5L5.82 21L7 13.87L2 9l6.91-1.74L12 1z" />
              </svg>
              <span>Garantie 30 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SSL sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#47F273]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Support français</span>
            </div>
          </div>
        </div>

        {/* Comparison section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0B0B1D]/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0B0B1D] mb-4">
              Tu hésites encore ? Regarde la différence.
            </h3>
            <p className="text-[#0B0B1D]/70">
              Comparaison réelle avec les alternatives classiques
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#0B0B1D]/10">
                  <th className="pb-4 text-[#0B0B1D] font-semibold"></th>
                  <th className="pb-4 text-center text-[#47F273] font-bold">ClicDesign</th>
                  <th className="pb-4 text-center text-[#0B0B1D]/60">Designer freelance</th>
                  <th className="pb-4 text-center text-[#0B0B1D]/60">Agence photo</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-[#0B0B1D]/5">
                  <td className="py-4 text-[#0B0B1D] font-medium">Prix par visuel</td>
                  <td className="py-4 text-center text-[#47F273] font-bold">1€</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">25-50€</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">150-300€</td>
                </tr>
                <tr className="border-b border-[#0B0B1D]/5">
                  <td className="py-4 text-[#0B0B1D] font-medium">Temps de livraison</td>
                  <td className="py-4 text-center text-[#47F273] font-bold">30 secondes</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">2-5 jours</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">1-2 semaines</td>
                </tr>
                <tr className="border-b border-[#0B0B1D]/5">
                  <td className="py-4 text-[#0B0B1D] font-medium">Révisions</td>
                  <td className="py-4 text-center text-[#47F273] font-bold">Illimitées</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">2-3 max</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">1-2 max</td>
                </tr>
                <tr>
                  <td className="py-4 text-[#0B0B1D] font-medium">Disponibilité</td>
                  <td className="py-4 text-center text-[#47F273] font-bold">24h/24</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">Horaires bureau</td>
                  <td className="py-4 text-center text-[#0B0B1D]/60">Sur RDV</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#47F273]/20 text-[#0B0B1D] px-4 py-2 rounded-full font-semibold text-sm mb-6">
            ⏰ Offre limitée
          </div>
          
          <h3 className="text-2xl font-bold text-[#0B0B1D] mb-4">
            Premier mois à 1€ pour les 50 premiers inscrits
          </h3>
          
          <button className="group bg-[#47F273] hover:bg-[#2DD55B] text-[#0B0B1D] font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#47F273]/20">
            Profiter de l'offre
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          
          <p className="text-sm text-[#0B0B1D]/60 mt-4">
            Puis 29€/mois. Sans engagement. Résiliable quand tu veux.
          </p>
        </div>
      </div>
    </section>
  );
}