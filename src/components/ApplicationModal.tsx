import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  serviceTitle
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'coach',
    challenge: '',
    intention: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FAF9F5] rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar */}
        <div className="px-6 py-4 bg-[#1A362D] text-[#FAF9F5] border-b border-[#C5A059]/20 flex items-center justify-between">
          <div className="text-xs font-mono uppercase tracking-wider text-[#D8B774]">
            Postulación & Agenda Directa
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-full text-[#DDD7CC] hover:text-[#C5A059] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#C5A059] font-semibold">
                  Formato Seleccionado
                </span>
                <h3 className="text-2xl font-serif text-[#23254A] mt-0.5">
                  {serviceTitle || "Mentoría con Lia Pinto"}
                </h3>
                <p className="text-xs text-[#626262] mt-1">
                  Espacio sagrado y confidencial. Lia revisa cada solicitud personalmente antes de confirmar una sesión exploratoria.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#23254A] uppercase tracking-wider mb-1">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ej. Elena García"
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F5] border border-[#E4DFD5] rounded-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#23254A] uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@ejemplo.com"
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F5] border border-[#E4DFD5] rounded-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#23254A] uppercase tracking-wider mb-1">
                    Tu Rol Principal
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F5] border border-[#E4DFD5] rounded-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="coach">Coach / Mentora</option>
                    <option value="terapeuta">Terapeuta / Psicóloga</option>
                    <option value="facilitadora">Facilitadora / Guía Holística</option>
                    <option value="mama">Mamá dedicada al bienestar familiar y profesional</option>
                    <option value="otro">Otro rol de sostén a otros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#23254A] uppercase tracking-wider mb-1">
                    ¿Dónde sientes que se fuga tu mayor cantidad de energía hoy?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Describe brevemente la situación o el patrón de autoabandono que deseas desmantelar..."
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF9F5] border border-[#E4DFD5] rounded-sm focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Enviar Postulación</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7C7C7C] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Privacidad y confidencialidad absoluta garantizadas.</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1A362D] text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/40 shadow-md">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-[#23254A]">
                  Solicitud Recibida
                </h4>
                <p className="text-sm text-[#4B4B4B] max-w-sm mx-auto leading-relaxed">
                  Gracias, <strong className="text-[#1A362D]">{formData.name}</strong>. Lia Pinto revisará personalmente tus respuestas y te responderá en las próximas 24 a 48 horas a <strong className="text-[#1A362D]">{formData.email}</strong> para coordinar los siguientes pasos.
                </p>
              </div>

              <div className="p-4 bg-[#F0EDE6] rounded-xl text-xs text-[#626262] max-w-sm mx-auto">
                Mientras tanto, te invitamos a mantener una respiración consciente y no negociar tu descanso el día de hoy.
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] rounded-sm transition-colors"
                >
                  Regresar a la página
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
