import React, { useState } from 'react';
import { Heart, Feather, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface MethodologySectionProps {
  onOpenTest: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenTest }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      name: "Sentir",
      summary: "Escuchar tus emociones y cuerpo sin juzgarlas.",
      description: "Aprender a permanecer en el cuerpo cuando sube la incomodidad o el cansancio. No se trata de sobreanalizar con el intelecto, sino de ofrecer un sostén cálido y maduro a tus sensaciones físicas sin anestesiarlas ni huir.",
      deliverable: "Regulación del sistema nervioso y fin de la disociación mental.",
      icon: Heart
    },
    {
      number: "02",
      name: "Integrar",
      summary: "Abrazar tu luz y tu sombra con compasión despierta.",
      description: "Reclamar las partes censuradas de ti misma: tu rabia sagrada, tu derecho a descansar, tus límites firmes y tus anhelos postergados. La sombra no es maldad; es energía vital secuestrada por el miedo a no pertenecer.",
      deliverable: "Paz interior profunda al dejar de pelear contra tu propia naturaleza.",
      icon: Feather
    },
    {
      number: "03",
      name: "Elegirte",
      summary: "Elegirte sin culpa; no es pasar por encima de los demás, es dejar de pasar por encima de ti.",
      description: "Aprender a decir 'no' sin justificaciones infinitas. Comprender que tu bienestar no es una moneda de cambio para agradar a nadie. Elígete sin dureza, con la calma y la autoridad serena de quien habita su propia casa.",
      deliverable: "Firmeza serena y claridad absoluta en tus relaciones, agenda y proyectos.",
      icon: Sparkles
    }
  ];

  return (
    <section id="metodo" className="py-24 md:py-32 bg-[#F9F8F6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1A362D]">
            Metodología de Power Embodiment
          </div>

          {/* Exact Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23254A] tracking-tight text-balance">
            El Ciclo de Recuperación del Poder
          </h2>

          <p className="text-lg text-[#4B4B4B] font-normal leading-relaxed pt-2 text-balance">
            Un camino de retorno hacia tu centro para mamás que acompañan a otros. Sin fórmulas mágicas ni positividad superficial: integración somática real para habitar tu verdad.
          </p>
        </div>

        {/* 3 Clean Visual Steps: Sentir, Integrar, Elegirte */}
        <div className="relative">
          {/* Connecting line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-[1px] bg-[#C5A059]/30 -z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isCurrent
                      ? 'bg-[#FAF9F5] border-[#C5A059] shadow-[0_15px_35px_-8px_rgba(35,37,74,0.15)] -translate-y-1 ring-1 ring-[#C5A059]/40'
                      : 'bg-[#FAF9F5]/80 hover:bg-[#FAF9F5] border-[#E4DFD5] hover:border-[#C5A059]/40 shadow-xs'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs tracking-widest text-[#C5A059] font-semibold">
                        PASO {step.number}
                      </span>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isCurrent 
                          ? 'bg-[#1A362D] text-[#C5A059]' 
                          : 'bg-[#F0EDE6] text-[#1A362D] group-hover:bg-[#1A362D] group-hover:text-[#C5A059]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Name */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#23254A] group-hover:text-[#1A362D] transition-colors">
                      {step.name}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm font-medium text-[#1A362D] leading-snug">
                      {step.summary}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#626262] leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Somatic Outcome */}
                  <div className="mt-6 pt-4 border-t border-[#E4DFD5] flex items-center gap-2 text-xs text-[#23254A] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom invitation (Opens Modal) */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenTest}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#1A362D] hover:text-[#C5A059] underline underline-offset-8 decoration-[#C5A059] transition-colors"
          >
            <span>Descubre qué dimensión requiere tu atención en el Test (Modal)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
