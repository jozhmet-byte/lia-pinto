import React from 'react';
import { HeartHandshake, VolumeX, Users, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenTest: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenTest }) => {
  const painPoints = [
    {
      id: 1,
      statement: "Sostienes a todos, pero estás cansada de ponerte al final.",
      icon: Users,
      insight: "Eres la facilitadora, madre y guía que nunca falla, pero tus propios anhelos, descanso y vitalidad quedan permanentemente postergados en la lista de prioridades."
    },
    {
      id: 2,
      statement: "Dices sí cuando dentro de ti hay un no, para no decepcionar.",
      icon: HeartHandshake,
      insight: "El miedo a que el otro retire su afecto o te perciba como egoísta te lleva a hipotecar tu tiempo y tu descanso. Cada 'sí' complaciente es una traición a tu templo."
    },
    {
      id: 3,
      statement: "Callas lo que realmente piensas para evitar conflicto.",
      icon: VolumeX,
      insight: "Compras una paz ficticia en el exterior al precio de una tormenta interna de resentimiento, tensión cervical y fatiga mental crónica."
    }
  ];

  return (
    <section id="dolor" className="py-24 md:py-32 bg-[#F9F8F6] border-b border-[#E4DFD5] relative overflow-hidden">
      {/* Subtle sacred ambient gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1A362D]">
            Identificación & Toma de Conciencia
          </div>

          {/* Exact H2 Índigo (#23254A) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23254A] tracking-tight text-balance">
            ¿Dónde estás entregando tu poder?
          </h2>

          {/* Exact Intro Text */}
          <p className="text-lg md:text-xl text-[#4B4B4B] font-normal leading-relaxed pt-2 text-balance">
            El autoabandono aparece cuando para cuidar, amar o ser aceptada, tienes que traicionarte a ti misma.
          </p>
        </div>

        {/* 3 Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={onOpenTest}
                className="group relative p-8 rounded-2xl bg-[#FAF9F5] border border-[#E4DFD5] hover:border-[#C5A059] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Minimalist icon container */}
                  <div className="w-12 h-12 rounded-xl bg-[#1A362D] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/20 transition-colors shadow-xs group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Clean number indicator */}
                  <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-semibold">
                    Patrón 0{item.id}
                  </div>

                  {/* Exact statement */}
                  <h3 className="text-lg sm:text-xl font-serif text-[#23254A] leading-snug group-hover:text-[#1A362D] transition-colors">
                    {item.statement}
                  </h3>

                  {/* Depth explanation */}
                  <p className="text-sm text-[#4B4B4B] leading-relaxed pt-1">
                    {item.insight}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4DFD5] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1A362D] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Evaluar fuga en el test</span>
                  </span>
                  <span className="text-xs text-[#C5A059] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Abrir test &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Transition CTA (Opens Modal) */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenTest}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#1A362D] hover:text-[#C5A059] underline underline-offset-8 decoration-[#C5A059] transition-colors"
          >
            <span>Evaluar tu nivel de fuga en las 8 dimensiones (Abrir Test)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
