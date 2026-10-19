import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenTest: () => void;
}

// 24 Radiant Golden Embers distributed uniformly across the entire canvas (0% to 100% width)
const EMBERS = [
  // Left Column (Headline, Badge & CTA area: 4% - 38%)
  { top: '82%', left: '5%', size: '5px', dur: '7.5s', delay: '0s', dx: '28px' },
  { top: '88%', left: '12%', size: '4.5px', dur: '9.5s', delay: '1.5s', dx: '-22px' },
  { top: '74%', left: '19%', size: '6px', dur: '8s', delay: '0.6s', dx: '24px' },
  { top: '92%', left: '26%', size: '4px', dur: '10s', delay: '2.8s', dx: '-26px' },
  { top: '78%', left: '33%', size: '5.5px', dur: '7.8s', delay: '1.2s', dx: '20px' },
  { top: '86%', left: '38%', size: '5px', dur: '8.8s', delay: '3.5s', dx: '-18px' },

  // Center Seam & Inter-column Energy Flow (40% - 64%)
  { top: '84%', left: '44%', size: '6.5px', dur: '9.2s', delay: '2.2s', dx: '25px' },
  { top: '70%', left: '50%', size: '4.5px', dur: '8.2s', delay: '1.0s', dx: '-24px' },
  { top: '90%', left: '56%', size: '5.5px', dur: '10.5s', delay: '4.2s', dx: '18px' },
  { top: '76%', left: '62%', size: '5px', dur: '7.8s', delay: '2.6s', dx: '-25px' },

  // Right Column (Portrait & Sacred Portal area: 65% - 96%)
  { top: '85%', left: '68%', size: '5.5px', dur: '8.5s', delay: '1.4s', dx: '22px' },
  { top: '72%', left: '74%', size: '4px', dur: '9s', delay: '0.3s', dx: '-20px' },
  { top: '89%', left: '80%', size: '6px', dur: '7.2s', delay: '3.2s', dx: '26px' },
  { top: '68%', left: '86%', size: '4.5px', dur: '8.6s', delay: '1.8s', dx: '-22px' },
  { top: '83%', left: '91%', size: '5.5px', dur: '9.8s', delay: '4.5s', dx: '18px' },
  { top: '75%', left: '96%', size: '5px', dur: '7.6s', delay: '1.2s', dx: '-18px' },
];

// Starlight twinkles distributed across the whole sky
const TWINKLES = [
  // Left Sky
  { top: '14%', left: '6%', size: '4px', dur: '3.5s', delay: '0.4s' },
  { top: '24%', left: '15%', size: '3.5px', dur: '4.5s', delay: '1.6s' },
  { top: '16%', left: '26%', size: '5px', dur: '3.8s', delay: '2.4s' },
  { top: '40%', left: '18%', size: '3px', dur: '5.2s', delay: '0.8s' },
  { top: '60%', left: '8%', size: '4px', dur: '4.2s', delay: '3.2s' },
  { top: '72%', left: '22%', size: '3.5px', dur: '4s', delay: '1.1s' },

  // Center Sky
  { top: '18%', left: '42%', size: '5px', dur: '3.2s', delay: '2s' },
  { top: '35%', left: '52%', size: '3.5px', dur: '4.8s', delay: '0.5s' },
  { top: '65%', left: '48%', size: '4px', dur: '4s', delay: '2.8s' },

  // Right Sky
  { top: '12%', left: '68%', size: '3.5px', dur: '3.6s', delay: '1.4s' },
  { top: '26%', left: '78%', size: '5px', dur: '4.2s', delay: '3.5s' },
  { top: '15%', left: '91%', size: '4px', dur: '3.8s', delay: '0.9s' },
  { top: '48%', left: '95%', size: '3.5px', dur: '5.2s', delay: '2.2s' },
  { top: '68%', left: '84%', size: '4px', dur: '3.4s', delay: '1.8s' },
  { top: '82%', left: '90%', size: '3.5px', dur: '4.5s', delay: '4.1s' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenTest }) => {
  return (
    <section id="inicio" className="relative bg-[#1A362D] text-[#FAF9F5] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Dynamic Ambient Living Pulse across the entire section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#11241E] via-[#235847]/45 via-40% to-[#142922] animate-pulse -z-10" 
        style={{ animationDuration: '8s' }}
      />
      
      {/* ============================================================== */}
      {/* 1. FULL-CANVAS LIVING SOMATIC AURORAS (VIBRANT & VISIBLE)      */}
      {/* ============================================================== */}
      
      {/* Quadrant 1: Top-Left behind Title & Kicker */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 -left-20 w-[700px] h-[700px] bg-gradient-to-br from-[#C5A059]/45 via-[#2E6B57]/55 to-transparent rounded-full blur-[65px] animate-aurora-1 -z-10" 
      />

      {/* Quadrant 2: Top-Right behind Lia's Crown & Sky */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-16 -right-16 w-[750px] h-[750px] bg-gradient-to-bl from-[#D8B774]/45 via-[#245D4B]/60 to-transparent rounded-full blur-[60px] animate-aurora-2 -z-10" 
      />

      {/* Quadrant 3: Bottom-Left under CTA Buttons & Badges */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 -left-16 w-[680px] h-[680px] bg-gradient-to-tr from-[#255C4A]/70 via-[#C5A059]/35 to-transparent rounded-full blur-[65px] animate-aurora-3 -z-10" 
      />

      {/* Quadrant 4: Bottom-Right under Portrait Base */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-16 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#323668]/70 via-[#224E3F]/60 to-transparent rounded-full blur-[60px] animate-aurora-4 -z-10" 
      />

      {/* Center Harmonizer: Radiant Golden Breathing Solar Core */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-radial from-[#C5A059]/30 via-transparent to-transparent rounded-full blur-[55px] animate-halo-breath -z-10" 
      />

      {/* ============================================================== */}
      {/* 2. FAINT THEMATIC BACKGROUND PATTERN (SLOW LIVING DRIFT)       */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 somatic-pattern-layer opacity-[0.16] -z-10" 
      />

      {/* ============================================================== */}
      {/* 3. FULL-CANVAS RADIANT GOLDEN EMBERS & STARLIGHT CONSTELATION  */}
      {/* ============================================================== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {EMBERS.map((ember, idx) => (
          <span
            key={`ember-${idx}`}
            className="absolute rounded-full bg-[#FAF9F5] shadow-[0_0_10px_#FAF9F5,0_0_20px_#D8B774,0_0_35px_#C5A059] animate-ember"
            style={{
              top: ember.top,
              left: ember.left,
              width: ember.size,
              height: ember.size,
              '--ember-dur': ember.dur,
              '--ember-delay': ember.delay,
              '--ember-dx': ember.dx,
            } as React.CSSProperties}
          />
        ))}

        {TWINKLES.map((star, idx) => (
          <span
            key={`star-${idx}`}
            className="absolute rounded-full bg-[#FAF9F5] shadow-[0_0_12px_#FAF9F5,0_0_24px_#D8B774,0_0_35px_#C5A059] animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              '--twinkle-dur': star.dur,
              '--twinkle-delay': star.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* ============================================================== */}
      {/* 4. FULL-WIDTH PROMINENT FLOWING SOMATIC ENERGY WAVES           */}
      {/* ============================================================== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        
        {/* Stream 1: Upper Luminous Wave weaving across the whole section */}
        <svg 
          className="absolute top-[16%] -left-[10%] w-[220%] h-48 opacity-75 animate-stream-1"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,80 C360,10 720,160 1080,70 C1260,20 1440,110 1800,80" 
            stroke="url(#full-gold-stream-1)" 
            strokeWidth="4"
            style={{ filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.75))' }}
          />
          <path 
            d="M0,95 C360,25 720,175 1080,85 C1260,35 1440,125 1800,95" 
            stroke="#FAF9F5" 
            strokeWidth="2"
            strokeDasharray="16 12"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="full-gold-stream-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#FAF9F5" stopOpacity="1" />
              <stop offset="50%" stopColor="#D8B774" stopOpacity="1" />
              <stop offset="75%" stopColor="#FAF9F5" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#C5A059" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stream 2: Central Somatic Energy Ribbon (Counter-Flowing) */}
        <svg 
          className="absolute top-[44%] -left-[10%] w-[220%] h-64 opacity-80 animate-stream-2"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Luminous Translucent Wave Body */}
          <path 
            d="M0,140 C400,240 800,50 1200,180 C1350,220 1500,80 1800,150 L1800,240 L0,240 Z" 
            fill="url(#full-mid-wave-fill)" 
            opacity="0.35"
          />
          <path 
            d="M0,140 C400,240 800,50 1200,180 C1350,220 1500,80 1800,150" 
            stroke="url(#full-gold-stream-2)" 
            strokeWidth="4.5"
            style={{ filter: 'drop-shadow(0 0 12px rgba(216, 183, 116, 0.8))' }}
          />
          <path 
            d="M0,125 C400,225 800,35 1200,165 C1350,205 1500,65 1800,135" 
            stroke="#FAF9F5" 
            strokeWidth="2.5"
            strokeDasharray="14 14"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="full-gold-stream-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E6B57" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#FAF9F5" stopOpacity="1" />
              <stop offset="60%" stopColor="#C5A059" stopOpacity="1" />
              <stop offset="100%" stopColor="#2E6B57" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="full-mid-wave-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A362D" stopOpacity="0" />
              <stop offset="40%" stopColor="#2D6B57" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#C5A059" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1A362D" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stream 3: Grand Tidal Waves rolling across the bottom */}
        <svg 
          className="absolute bottom-0 inset-x-0 w-[200%] h-60 opacity-85 animate-stream-3"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,90 C360,170 720,25 1080,120 C1260,160 1440,60 1800,100 L1800,200 L0,200 Z" 
            fill="url(#full-wave-base-gradient)" 
          />
          <path 
            d="M0,90 C360,170 720,25 1080,120 C1260,160 1440,60 1800,100" 
            stroke="#D8B774" 
            strokeWidth="3.5"
            style={{ filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.65))' }}
          />
          <defs>
            <linearGradient id="full-wave-base-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#11241E" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#286350" stopOpacity="0.75" />
              <stop offset="60%" stopColor="#C5A059" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#286350" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#11241E" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 100% Unobstructed Clean Typography for Perfect Readability */}
          <div className="lg:col-span-7 space-y-8 relative">

            {/* Editorial kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-semibold text-[#D8B774]">
              <span>Mastercoach & Wellness</span>
              <span aria-hidden="true" className="w-8 h-[1px] bg-[#C5A059]/40" />
              <span>Para la Mamá Mentora</span>
            </div>

            {/* Exact H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif text-[#FAF9F5] leading-[1.18] tracking-tight text-balance">
              Tu poder personal es la energía que recuperas cuando dejas de abandonarte.
            </h1>

            {/* Exact Subtitle */}
            <p className="text-lg sm:text-xl text-[#DDD7CC] font-normal leading-relaxed max-w-2xl text-balance">
              Ayudo a mamás que acompañan a otros —coaches, mentoras y terapeutas— a dejar de abandonarse mientras sostienen a los demás. Recupera tu energía, escucha tu propia voz y crea una vida que también sea tuya.
            </p>

            {/* Buttons: Primary Golden CTA (Opens Modal) & Secondary Underlined */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <button
                onClick={onOpenTest}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] transition-all duration-300 rounded-sm shadow-[0_10px_30px_-5px_rgba(197,160,89,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(197,160,89,0.55)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059]"
              >
                <span>Descubre tu fuga de energía (Test Gratuito)</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center text-sm font-medium text-[#FAF9F5] hover:text-[#C5A059] underline underline-offset-8 decoration-[#C5A059]/60 hover:decoration-[#C5A059] transition-all py-3"
              >
                Conoce el método
              </a>
            </div>

            {/* Unboxed Metadata Proof (Without Presencia Somática or 18+ Años) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#C9C2B5]">
              <span>Límites Sin Culpa</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Integración de Sombra</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>Cero Positividad Tóxica</span>
            </div>

          </div>

          {/* Right Column: 100% Free & Seamless Unboxed Portrait of Lia Pinto */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px]">
              
              {/* Celestial Golden Ambient Glow behind her */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-[420px] h-[520px] bg-[#C5A059]/20 rounded-full blur-[95px] -z-10" 
              />
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#23473C]/60 rounded-full blur-[65px] -z-10" 
              />

              {/* Concentric Energy Pulse Ripples */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-[#C5A059]/30 animate-ripple -z-10"
              />

              {/* Sacred Somatic Resonance Wheel & Portal behind Lia */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] -z-10 flex items-center justify-center"
              >
                {/* Outer Rotating Sacred Wheel with tick markers */}
                <div className="w-[560px] h-[560px] rounded-full border border-[#C5A059]/40 animate-spin-slow flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.18)]">
                  <div className="absolute inset-3 rounded-full border border-dashed border-[#D8B774]/45" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#FAF9F5] top-0 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#FAF9F5,0_0_20px_#C5A059]" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#FAF9F5] bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_12px_#FAF9F5,0_0_20px_#C5A059]" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#FAF9F5] left-0 top-1/2 -translate-y-1/2 shadow-[0_0_12px_#FAF9F5,0_0_20px_#C5A059]" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#FAF9F5] right-0 top-1/2 -translate-y-1/2 shadow-[0_0_12px_#FAF9F5,0_0_20px_#C5A059]" />
                </div>

                {/* Middle Counter-Rotating Sacred Energy Ring */}
                <div className="absolute w-[440px] h-[440px] rounded-full border border-[#D8B774]/45 border-dotted animate-spin-reverse-slow" />

                {/* Inner Breathing Core */}
                <div className="absolute w-[310px] h-[310px] rounded-full border-2 border-[#C5A059]/60 animate-halo-breath shadow-[inset_0_0_35px_rgba(197,160,89,0.3)]" />
              </div>

              {/* Completely Free, Unboxed Portrait: Seamless Edge Feathering & Bottom Melt */}
              <div className="relative w-full overflow-visible flex justify-center">
                <img
                  src="/lia-pinto-feathered.png"
                  alt="Lia Pinto - Mastercoach & Mentora de Encarnación"
                  className="w-full h-auto object-contain max-h-[620px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] select-none pointer-events-none transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Smooth liquid gradient fade at the bottom to melt into #1A362D */}
                <div 
                  aria-hidden="true" 
                  className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#1A362D] via-[#1A362D]/90 via-40% to-transparent pointer-events-none" 
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
