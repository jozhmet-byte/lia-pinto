import React from 'react';
import { servicesData } from '../data/landingData';
import { Check, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenTest: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenTest }) => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#F9F8F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1A362D]">
            Espacios de Mentoría & Sesiones 1:1
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23254A] tracking-tight text-balance">
            Acompañamiento Estratégico y de Encarnación
          </h2>
          <p className="text-lg text-[#4B4B4B] font-normal leading-relaxed pt-2 text-balance">
            Formatos diseñados para mamás que acompañan a otros: sin fórmulas masivas, con escucha somática rigurosa y contención soberana.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-[#FAF9F5] border-[#C5A059] shadow-[0_20px_45px_-15px_rgba(35,37,74,0.15)] ring-1 ring-[#C5A059]/40'
                    : 'bg-[#F0EDE6]/60 hover:bg-[#FAF9F5] border-[#E4DFD5] hover:border-[#C5A059]/40 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Clean unboxed tag */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#1A362D]">
                    <span className="font-mono uppercase tracking-wider font-semibold text-[#C5A059]">{service.tag}</span>
                    <span className="font-mono text-[11px] text-[#7C7C7C]">{service.duration}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-[#23254A] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4B4B4B] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 space-y-3 border-t border-[#E4DFD5]">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7C7C7C] block">
                      Qué incluye el proceso:
                    </span>
                    <ul className="space-y-2.5">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                          <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA & Badge */}
                <div className="mt-8 pt-6 border-t border-[#E4DFD5] space-y-3">
                  <div className="text-[11px] text-[#1A362D] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{service.badge}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className={`w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-sm text-center flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#C5A059] hover:bg-[#D8B774] text-[#1A362D] shadow-md'
                        : 'bg-[#FAF9F5] hover:bg-[#F0EDE6] text-[#23254A] border border-[#C5A059]/40 hover:border-[#C5A059]'
                    }`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance snippet */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#626262]">
            ¿Deseas claridad antes de postular a una sesión o mentoría?{' '}
            <button
              onClick={onOpenTest}
              className="text-[#1A362D] font-semibold underline underline-offset-4 decoration-[#C5A059] hover:text-[#C5A059]"
            >
              Realiza el Test de Arquitectura Energética
            </button>{' '}
            para identificar tu fuga primordial.
          </p>
        </div>

      </div>
    </section>
  );
};
