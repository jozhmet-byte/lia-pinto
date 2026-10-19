/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { MethodologySection } from './components/MethodologySection';
import { TestLeadMagnetCard } from './components/TestLeadMagnetCard';
import { ManifestoSection } from './components/ManifestoSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { EnergyArchitectureModal } from './components/EnergyArchitectureModal';
import { ApplicationModal } from './components/ApplicationModal';

export default function App() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenTest = () => {
    setIsTestModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#232323] flex flex-col font-sans selection:bg-[#1A362D] selection:text-[#FAF9F5]">
      {/* A. Navbar */}
      <Navbar onOpenTest={handleOpenTest} />

      <main className="flex-1">
        {/* B. Hero Section */}
        <Hero onOpenTest={handleOpenTest} />

        {/* C. Sección de Dolor */}
        <ProblemSection onOpenTest={handleOpenTest} />

        {/* D. El Método */}
        <MethodologySection onOpenTest={handleOpenTest} />

        {/* Lead Magnet Banner: Invita a abrir el Test de 32 Preguntas en Modal */}
        <TestLeadMagnetCard onOpenTest={handleOpenTest} />

        {/* E. Manifiesto (Fondo Índigo) & Sobre Lia */}
        <ManifestoSection onOpenTest={handleOpenTest} />

        {/* Formatos de Acompañamiento & Sesiones 1:1 */}
        <ServicesSection 
          onSelectService={handleSelectService} 
          onOpenTest={handleOpenTest} 
        />
      </main>

      {/* F. Footer */}
      <Footer onOpenTest={handleOpenTest} />

      {/* Modal Interactivo: Test de Arquitectura Energética (32 Preguntas / 8 Dimensiones / Resultados Dinámicos) */}
      <EnergyArchitectureModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        onScheduleSession={(lowestDimensionContext) => {
          setSelectedService(lowestDimensionContext);
        }}
      />

      {/* Modal de Postulación / Agenda 1:1 de Power Embodiment */}
      {selectedService && (
        <ApplicationModal
          isOpen={Boolean(selectedService)}
          onClose={() => setSelectedService(null)}
          serviceTitle={selectedService}
        />
      )}
    </div>
  );
}
