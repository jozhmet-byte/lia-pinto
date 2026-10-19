import React from 'react';
import { ArrowRight, Compass, Sparkles, CheckCircle2, ShieldCheck, BarChart3 } from 'lucide-react';
import { dimensionsData } from '../data/energyQuizData';

interface TestLeadMagnetCardProps {
  onOpenTest: () => void;
}

export const TestLeadMagnetCard: React.FC<TestLeadMagnetCardProps> = ({ onOpenTest }) => {
  return (
    <section id="test-arquitectura" className="py-24 md:py-32 bg-[#F0EDE6] border-y border-[#E4DFD5] relative overflow-hidden">
      {/* Subtle sacred ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A059]/15 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Kicker */}
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#1A362D] mb-3">
          <Compass className="w-4 h-4 text-[#C5A059]" />
          <span>Diagnóstico Somático Gratuito</span>
        </div>

        {/* H2 Title in Indigo (#23254A) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23254A] tracking-tight text-balance mb-4">
          Test de Arquitectura Energética
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#4B4B4B] max-w-2xl mx-auto font-normal leading-relaxed text-balance mb-10">
          Un instrumento interactivo de 32 preguntas diseñado para la Mamá Mentora. Descubre en cuál de las 8 dimensiones vitales estás fugando tu energía y cómo recuperar tu soberanía somática.
        </p>

        {/* Hero Interactive Lead Magnet Card */}
        <div className="bg-[#FAF9F5] p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 shadow-[0_25px_60px_-15px_rgba(35,37,74,0.12)] max-w-3xl mx-auto text-left space-y-8">
          
          {/* Dimension Grid Preview */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#23254A] block">
              Las 8 Dimensiones que evaluarás en el Test:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {dimensionsData.map((dim) => (
                <div 
                  key={dim.key}
                  className="p-3 bg-[#F9F8F6] rounded-xl border border-[#E4DFD5] flex items-center gap-2 hover:border-[#C5A059] transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1A362D] text-[#C5A059] text-[10px] font-mono flex items-center justify-center font-bold shrink-0">
                    {dim.romanNumeral}
                  </span>
                  <span className="text-xs font-serif text-[#23254A] font-medium">
                    {dim.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Props & CTA Box */}
          <div className="pt-4 border-t border-[#E4DFD5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#1A362D] font-medium">
                <BarChart3 className="w-4 h-4 text-[#C5A059]" />
                <span>8 barras horizontales con tu puntaje real</span>
              </div>
              <p className="text-xs text-[#7C7C7C]">
                Tiempo estimado: 4-5 minutos · Resultados inmediatos en pantalla
              </p>
            </div>

            {/* Golden CTA Button (Opens Modal) */}
            <button
              onClick={onOpenTest}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] transition-all rounded-sm shadow-md flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Haz el Test de 32 Preguntas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 border-t border-[#E4DFD5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#7C7C7C]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Cálculo dinámico en tiempo real</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Diagnóstico de fuga somática personalizado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Confidencialidad absoluta</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
