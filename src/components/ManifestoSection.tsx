import React from 'react';
import { Quote, Sparkles, Compass } from 'lucide-react';

interface ManifestoSectionProps {
  onOpenTest: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ onOpenTest }) => {
  return (
    <section id="manifiesto" className="relative overflow-hidden">
      
      {/* Primary Quote Block: Exact Indigo (#23254A) Background & Large Serif Beige Text */}
      <div className="bg-[#23254A] text-[#FAF9F5] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 relative">
        {/* Subtle geometric lines */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl" 
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          
          {/* Subtle gold quote badge */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] bg-[#1D1F3E]">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          {/* Exact Quote Copy: Texto Serif grande en beige */}
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif italic text-[#FAF9F5] leading-[1.35] tracking-tight text-balance">
            "Crear tu vida no significa controlar la realidad. Significa no perderte a ti misma mientras la estás viviendo. Tu poder personal no se obtiene. Se recupera."
          </blockquote>

          {/* Exact Signature: Lia Pinto */}
          <div className="pt-4 space-y-2">
            <div className="text-2xl sm:text-3xl font-serif tracking-wide text-[#FAF9F5]">
              Lia Pinto
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D8B774] font-medium">
              Mastercoach & Power Embodiment Mentor
            </div>
          </div>

        </div>
      </div>

      {/* Sobre Lia: Espacio de Contención para la Mamá Mentora */}
      <div className="bg-[#F0EDE6] py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-b border-[#E4DFD5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Editorial Bio Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[380px]">
              <div 
                aria-hidden="true" 
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-[#C5A059]/25 -z-10" 
              />
              <div className="rounded-2xl bg-[#F9F8F6] p-8 border border-[#E4DFD5] shadow-[0_15px_35px_-10px_rgba(35,37,74,0.08)] space-y-6">
                
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-[#1A362D] to-[#12221D] p-6 flex flex-col justify-between border border-[#C5A059]/30 relative overflow-hidden text-[#FAF9F5]">
                  <div className="flex justify-between items-center text-xs text-[#D8B774] font-mono">
                    <span>ESPACIO DE AUTORIDAD</span>
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  </div>

                  <div className="my-auto text-center space-y-3">
                    <div className="w-24 h-24 mx-auto rounded-full border-2 border-[#C5A059]/50 overflow-hidden shadow-lg relative bg-[#23254A]">
                      <img
                        src="/lia-pinto.jpg"
                        alt="Lia Pinto"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <div className="font-serif text-2xl text-[#FAF9F5]">Lia Pinto</div>
                    <div className="text-xs text-[#DDD7CC] max-w-[210px] mx-auto leading-relaxed">
                      Mastercoach, estratega somática y mentora para la Mamá Mentora
                    </div>
                  </div>

                  <div className="bg-[#1A362D]/90 p-3 rounded-lg text-center border border-[#C5A059]/20">
                    <span className="text-[11px] font-medium text-[#D8B774]">Sostener a quienes sostienen el mundo</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E4DFD5]">
                    <div className="font-serif text-xl text-[#1A362D]">18+</div>
                    <div className="text-[11px] text-[#7C7C7C]">Años de Acompañamiento</div>
                  </div>
                  <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#E4DFD5]">
                    <div className="font-serif text-xl text-[#C5A059]">0%</div>
                    <div className="text-[11px] text-[#7C7C7C]">Positividad Tóxica</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bio Text & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#1A362D]">
              Sobre Lia Pinto
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-serif text-[#23254A] leading-tight">
              Acompaño a las mujeres que sostienen a otros a recuperar su propia voz y vitalidad.
            </h3>

            <div className="space-y-4 text-base text-[#4B4B4B] leading-relaxed">
              <p>
                Como coaches, terapeutas, facilitadoras y madres de familia, dominamos el arte de sostener el espacio para la transformación ajena. Sin embargo, en el camino hacia la entrega incondicional, muchas veces nos encontramos en un punto ciego devastador: <strong className="text-[#23254A] font-semibold">nuestra propia energía vital está completamente drenada y nuestros propios anhelos quedan en pausa indefinida</strong>.
              </p>
              <p>
                En mi espacio no encontrarás recetas superficiales ni discursos de positividad tóxica que invalidan tu cansancio. Mi trabajo integra la sabiduría somática, la firmeza terrenal y la estrategia de implementación para desarticular el autoabandono desde la raíz.
              </p>
              <p>
                Recuperar tu poder no es volverte fría ni dura. Es aprender a sostener a otros desde tu propio desborde, nunca desde tu propio sacrificio.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#test-arquitectura"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] transition-colors rounded-sm shadow-sm"
              >
                Realizar el Test de Arquitectura
              </a>
              <a
                href="#servicios"
                className="px-6 py-3.5 text-xs font-medium text-[#23254A] hover:text-[#1A362D] border border-[#C9C2B5] hover:border-[#1A362D] transition-colors rounded-sm"
              >
                Explorar Sesiones 1:1 y Programas
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
