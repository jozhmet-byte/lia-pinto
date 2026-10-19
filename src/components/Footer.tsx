import React, { useState } from 'react';
import { ArrowUp, Instagram, Linkedin, Compass } from 'lucide-react';

interface FooterProps {
  onOpenTest: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTest }) => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23254A] border-t border-[#C5A059]/20 text-[#FAF9F5] pt-20 pb-12 relative overflow-hidden">
      {/* Subtle sacred particles */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Prominent Centered Phrase: "Energía que vuelve a ti." */}
        <div className="text-center space-y-3 pb-8 border-b border-white/10">
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] tracking-tight">
            "Energía que vuelve a ti."
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D8B774] font-medium">
            Lia Pinto · Power Embodiment Mentor
          </p>
        </div>

        {/* Brand, Quick Links, and Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#inicio"
              className="group flex items-center gap-2.5 text-2xl font-serif text-[#FAF9F5] hover:text-[#C5A059] transition-colors inline-block"
            >
              <span>Lia Pinto</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] inline-block mb-1 group-hover:scale-125 transition-transform" />
            </a>
            
            <p className="text-xs text-[#DDD7CC] max-w-md leading-relaxed">
              Acompañamiento consciente para la Mamá Mentora: coaches, terapeutas y facilitadoras en el camino de desarticular el autoabandono y reconectar con su sabiduría y poder personal.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D8B774]">
              Navegación
            </div>
            <ul className="space-y-2 text-xs text-[#E4DFD5]">
              <li>
                <a href="#inicio" className="hover:text-[#C5A059] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#dolor" className="hover:text-[#C5A059] transition-colors">¿Dónde entregas tu poder?</a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#C5A059] transition-colors">El Método</a>
              </li>
              <li>
                <button 
                  onClick={onOpenTest}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  Test de 32 Preguntas (Modal)
                </button>
              </li>
              <li>
                <a href="#manifiesto" className="hover:text-[#C5A059] transition-colors">Manifiesto</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#C5A059] transition-colors">Sesiones 1:1</a>
              </li>
            </ul>
          </div>

          {/* Social & Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#D8B774]">
              Presencia & Redes
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Lia Pinto"
                className="w-9 h-9 rounded-full bg-[#1D1F3E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1A362D] hover:scale-105 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Lia Pinto"
                className="w-9 h-9 rounded-full bg-[#1D1F3E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1A362D] hover:scale-105 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenTest}
                aria-label="Abrir Test Energético"
                className="w-9 h-9 rounded-full bg-[#1D1F3E] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-[#1A362D] hover:scale-105 transition-all"
              >
                <Compass className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#DDD7CC] hover:text-[#C5A059] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower Zone: Legal & Copyright */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9C2B5]">
          <div>
            © {new Date().getFullYear()} Lia Pinto. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => setLegalModal('privacidad')}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              Aviso de Privacidad
            </button>
            <span aria-hidden="true" className="text-[#C5A059]/50">·</span>
            <button
              onClick={() => setLegalModal('terminos')}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              Términos del Servicio
            </button>
            <span aria-hidden="true" className="text-[#C5A059]/50">·</span>
            <button
              onClick={() => setLegalModal('etica')}
              className="hover:text-[#FAF9F5] transition-colors"
            >
              Código de Confidencialidad
            </button>
          </div>
        </div>

      </div>

      {/* Simple Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF9F5] text-[#232323] max-w-lg w-full p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-2xl space-y-4">
            <h4 className="text-xl font-serif text-[#23254A] capitalize">
              {legalModal === 'privacidad' && 'Aviso de Privacidad'}
              {legalModal === 'terminos' && 'Términos del Servicio'}
              {legalModal === 'etica' && 'Código de Confidencialidad'}
            </h4>
            <div className="text-xs text-[#4B4B4B] leading-relaxed max-h-60 overflow-y-auto space-y-2 pr-2">
              <p>
                Los servicios de mentoría y facilitación impartidos por Lia Pinto constituyen procesos de desarrollo personal, educación somática y bienestar integral para mamás y facilitadoras. No reemplazan atención psiquiátrica ni médica.
              </p>
              <p>
                La información personal recabada en el Test de Arquitectura Energética de 32 preguntas y formularios de postulación se encuentra protegida con estricto secreto profesional y nunca será transferida a terceros.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2 text-xs font-semibold uppercase text-[#1A362D] bg-[#C5A059] rounded-sm hover:bg-[#D8B774] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
