import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTest }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Dónde entregas tu poder?', href: '#dolor' },
    { name: 'El Método', href: '#metodo' },
    { name: 'Test Energético', href: '#test-arquitectura' },
    { name: 'Manifiesto', href: '#manifiesto' },
    { name: 'Sesiones 1:1', href: '#servicios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A362D]/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-[0_10px_30px_-10px_rgba(26,54,45,0.4)] text-[#F9F8F6]'
          : 'bg-[#1A362D]/90 backdrop-blur-sm border-b border-white/5 text-[#F9F8F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo: Lia Pinto */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-2xl font-serif tracking-tight text-[#FAF9F5] hover:text-[#C5A059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
        >
          <span>Lia Pinto</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80 group-hover:scale-125 transition-transform" />
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#E4DFD5]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#FAF9F5] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Golden): "Haz el Test" (Opens Modal) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTest}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] transition-all duration-200 rounded-sm shadow-[0_4px_15px_-3px_rgba(197,160,89,0.35)] hover:shadow-[0_6px_20px_-2px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059]"
          >
            Haz el Test
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-2 text-[#FAF9F5] hover:text-[#C5A059] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A362D] border-b border-[#C5A059]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#FAF9F5] hover:text-[#C5A059] py-2 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTest();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] transition-colors rounded-sm shadow-sm"
            >
              Haz el Test
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
