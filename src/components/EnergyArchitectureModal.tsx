import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Mail, 
  User, 
  AlertCircle,
  Compass,
  Calendar,
  X,
  Check,
  Loader2
} from 'lucide-react';
import { dimensionsData, questionsData, scaleOptions } from '../data/energyQuizData';
import { DimensionScoreResult } from '../types';

interface EnergyArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleSession?: (lowestDimensionName: string) => void;
}

export const EnergyArchitectureModal: React.FC<EnergyArchitectureModalProps> = ({
  isOpen,
  onClose,
  onScheduleSession
}) => {
  // currentStep:
  // 0 to 31: Question screens (each shown individually)
  // 32: Lead Capture screen
  // 33: Results screen
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the step changes, preventing content clipping
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    };
  }, [autoAdvanceTimer]);

  if (!isOpen) return null;

  // Question details
  const isQuestionScreen = currentStep >= 0 && currentStep < 32;
  const currentQuestion = questionsData[currentStep];
  const currentDimensionIdx = isQuestionScreen ? Math.floor(currentStep / 4) : 0;
  const currentDimension = dimensionsData[currentDimensionIdx] || dimensionsData[0];
  const questionInDimension = (currentStep % 4) + 1;

  // Selected answer for current question
  const currentAnswer = isQuestionScreen ? answers[currentQuestion.id] : undefined;

  // Handle selecting an answer
  const handleSelectAnswer = (value: number) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value
    }));

    // Smooth auto-advance after 280ms
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    const timer = setTimeout(() => {
      if (currentStep < 31) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Move to lead capture
        setCurrentStep(32);
      }
    }, 280);
    setAutoAdvanceTimer(timer);
  };

  const handlePrev = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    if (currentStep < 31) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 31) {
      setCurrentStep(32);
    }
  };

  // Dynamic Calculation of 8 dimensions
  const calculateDimensionScores = (): DimensionScoreResult[] => {
    return dimensionsData.map((dim) => {
      let score = 0;
      for (let id = dim.startId; id <= dim.endId; id++) {
        score += answers[id] || 0;
      }
      const percentage = Math.round((score / 20) * 100);
      return {
        meta: dim,
        score,
        percentage
      };
    });
  };

  const calculatedScores = calculateDimensionScores();

  // Find lowest dimension (energy leak)
  const getLowestDimension = (): DimensionScoreResult => {
    if (calculatedScores.length === 0) {
      return { meta: dimensionsData[0], score: 0, percentage: 0 };
    }
    return calculatedScores.reduce((min, curr) => (curr.score < min.score ? curr : min), calculatedScores[0]);
  };

  const lowestDimension = getLowestDimension();

  const handleCaptureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.email.includes('@') || !userInfo.email.includes('.')) {
      setEmailError('Por favor ingresa un correo electrónico válido');
      return;
    }
    if (!userInfo.name.trim()) {
      setEmailError('Por favor ingresa tu nombre');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);

    const webhookUrl =
      import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbwTyJwzdHTHlEluPyXWB5Scz9AbovRpqveJSexTSJw4yPEpqZGyh4rqZGNoO9zcwMSt/exec';

    const payload = {
      name: userInfo.name.trim(),
      email: userInfo.email.trim(),
      lowestDimension: lowestDimension.meta.name,
      archetype: lowestDimension.meta.theme.archetypeBadge,
      lowestPercentage: lowestDimension.percentage,
      scores: {
        d1: calculatedScores[0]?.percentage ?? 0,
        d2: calculatedScores[1]?.percentage ?? 0,
        d3: calculatedScores[2]?.percentage ?? 0,
        d4: calculatedScores[3]?.percentage ?? 0,
        d5: calculatedScores[4]?.percentage ?? 0,
        d6: calculatedScores[5]?.percentage ?? 0,
        d7: calculatedScores[6]?.percentage ?? 0,
        d8: calculatedScores[7]?.percentage ?? 0
      }
    };

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
      }
    } catch (err) {
      console.warn('Error al sincronizar respuestas con Google Sheets:', err);
    } finally {
      setIsSubmitting(false);
      setCurrentStep(33); // Move to Results
    }
  };

  const handleReset = () => {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    setAnswers({});
    setCurrentStep(0);
    setEmailError('');
  };

  // Background styling: Distinct per dimension, flagship deep green for capture/results
  const activeBg = isQuestionScreen ? currentDimension.theme.bg : '#152A23';
  const activeHeaderBg = isQuestionScreen ? currentDimension.theme.headerBg : '#0E1E19';
  const activeAccent = isQuestionScreen ? currentDimension.theme.accent : '#C5A059';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Outer Card with Framer Motion background morphing */}
      <motion.div 
        animate={{ backgroundColor: activeBg }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl border border-[#C5A059]/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] text-[#FAF9F5]"
      >
        
        {/* Dynamic Header: Color adapts per Dimension */}
        <motion.div 
          animate={{ backgroundColor: activeHeaderBg }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="px-5 sm:px-8 py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between shrink-0"
        >
          {/* Dimension Title & Identity */}
          <div className="flex items-center gap-3">
            <div 
              style={{ borderColor: activeAccent }}
              className="w-8 h-8 rounded-full bg-black/30 border flex items-center justify-center text-[#FAF9F5] font-mono text-xs font-bold shrink-0"
            >
              {isQuestionScreen ? currentDimension.romanNumeral : <Compass className="w-4 h-4 text-[#C5A059]" />}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span 
                  style={{ color: activeAccent }}
                  className="text-xs font-mono uppercase tracking-widest font-semibold"
                >
                  {isQuestionScreen 
                    ? `Dimensión ${currentDimension.romanNumeral}: ${currentDimension.name}`
                    : currentStep === 32 
                    ? "Identificación para tu Mapa"
                    : "Diagnóstico Finalizado"}
                </span>
                {isQuestionScreen && (
                  <span className="hidden sm:inline-block text-[10px] text-white/50 border border-white/20 px-2 py-0.5 rounded-full font-mono">
                    {currentDimension.theme.archetypeBadge}
                  </span>
                )}
              </div>
              <p className="text-xs font-serif text-[#DDD7CC] truncate max-w-[200px] sm:max-w-md">
                {isQuestionScreen 
                  ? currentDimension.shortDescription 
                  : currentStep === 32 
                  ? "Para quién es este mapa somático" 
                  : "Tu mapa completo de 8 dimensiones"}
              </p>
            </div>
          </div>

          {/* Progress Indicators & Close */}
          <div className="flex items-center gap-3 sm:gap-4">
            {isQuestionScreen && (
              <div className="hidden sm:flex items-center gap-1.5 text-right font-mono text-xs">
                <span className="text-[#FAF9F5] font-bold">
                  {currentStep + 1}
                </span>
                <span className="text-white/40">/ 32</span>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="p-1.5 text-[#DDD7CC] hover:text-[#C5A059] hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* 8 Dimension Tabs / Progress Ribbon at Top of Modal (Questions only) */}
        {isQuestionScreen && (
          <div className="bg-black/30 px-5 sm:px-8 py-2 border-b border-white/5 flex items-center justify-between text-[11px] font-mono shrink-0">
            {/* 8 Segments */}
            <div className="flex items-center gap-1.5 flex-1 max-w-md">
              {dimensionsData.map((d, dIdx) => {
                const isPassed = currentDimensionIdx > dIdx;
                const isCurrent = currentDimensionIdx === dIdx;

                return (
                  <div key={d.key} className="flex-1 flex flex-col gap-1">
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isPassed 
                          ? 'bg-[#C5A059]' 
                          : isCurrent 
                          ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                          : 'bg-white/15'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="pl-4 text-xs font-mono text-white/70">
              Pregunta <span className="text-white font-bold">{questionInDimension}</span> de 4
            </div>
          </div>
        )}

        {/* Modal Scrollable Body (Starts cleanly at top = 0 without clipping) */}
        <div 
          ref={scrollContainerRef}
          className="p-5 sm:p-8 md:p-10 overflow-y-auto flex-1 overscroll-contain"
        >
          <AnimatePresence mode="wait">
            
            {/* SCREEN 1-32: INDIVIDUAL QUESTION SCREEN */}
            {isQuestionScreen && currentQuestion && (
              <div className="min-h-full flex flex-col justify-center max-w-2xl mx-auto w-full py-2">
                <motion.div
                  key={`single-q-${currentStep}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 w-full"
                >
                  {/* Element & Dimension Kicker */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70">
                      <span 
                        style={{ backgroundColor: activeAccent }}
                        className="w-2 h-2 rounded-full inline-block"
                      />
                      <span>{currentDimension.theme.element}</span>
                    </div>

                    <span className="text-xs font-mono text-white/50">
                      Pregunta {currentStep + 1} de 32
                    </span>
                  </div>

                  {/* Big Editorial Question Text */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl md:text-[25px] font-serif text-[#FAF9F5] leading-relaxed text-balance">
                      "{currentQuestion.text}"
                    </h3>
                    <p className="text-xs text-white/60 italic font-sans">
                      Escucha la primera sensación en tu cuerpo y elige la opción más honesta:
                    </p>
                  </div>

                  {/* 5 Scale Options: 1-Nunca to 5-Casi siempre */}
                  <div className="space-y-2.5 pt-1">
                    {scaleOptions.map((opt) => {
                      const isSelected = currentAnswer === opt.value;

                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelectAnswer(opt.value)}
                          className={`w-full p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between gap-4 border cursor-pointer ${
                            isSelected
                              ? 'bg-white/20 border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.3)] ring-1 ring-[#C5A059]'
                              : 'bg-black/25 hover:bg-black/40 border-white/10 hover:border-white/25 text-[#FAF9F5]'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <span 
                              style={{ 
                                borderColor: isSelected ? activeAccent : 'rgba(255,255,255,0.2)',
                                backgroundColor: isSelected ? activeAccent : 'transparent',
                                color: isSelected ? '#1A362D' : '#FAF9F5'
                              }}
                              className="w-7 h-7 rounded-full border flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors"
                            >
                              {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : opt.value}
                            </span>

                            <div>
                              <span className="text-sm sm:text-base font-medium block leading-snug">
                                {opt.label}
                              </span>
                              <span className="text-[11px] text-white/50 block font-normal">
                                {opt.description}
                              </span>
                            </div>
                          </div>

                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 hidden sm:inline-block">
                            Opción [{opt.value}]
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            )}

            {/* SCREEN 33: LEAD CAPTURE (Name / Email) */}
            {currentStep === 32 && (
              <div className="min-h-full flex flex-col justify-center max-w-lg mx-auto w-full py-4">
                <motion.div
                  key="modal-lead-capture"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 text-center w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-black/30 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center mx-auto shadow-inner">
                    <Sparkles className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#D8B774] font-semibold">
                      ¡32 Preguntas Completadas!
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF9F5]">
                      Calculando tu Mapa de Arquitectura Energética
                    </h3>
                    <p className="text-xs sm:text-sm text-[#DDD7CC] leading-relaxed">
                      Ingresa tus datos para desplegar inmediatamente los puntajes de tus 8 dimensiones y revelar tu patrón primario de fuga somática.
                    </p>
                  </div>

                  <form onSubmit={handleCaptureSubmit} className="space-y-4 text-left pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-[#FAF9F5] uppercase tracking-wider mb-1.5">
                        Tu Nombre Completo *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={userInfo.name}
                          onChange={(e) => {
                            setUserInfo({ ...userInfo, name: e.target.value });
                            if (emailError) setEmailError('');
                          }}
                          placeholder="ej. Mariana Santos"
                          className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-sm text-sm text-[#FAF9F5] placeholder-white/40 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#FAF9F5] uppercase tracking-wider mb-1.5">
                        Tu Correo Electrónico *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={userInfo.email}
                          onChange={(e) => {
                            setUserInfo({ ...userInfo, email: e.target.value });
                            if (emailError) setEmailError('');
                          }}
                          placeholder="mariana@ejemplo.com"
                          className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-sm text-sm text-[#FAF9F5] placeholder-white/40 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                        />
                      </div>
                    </div>

                    {emailError && (
                      <div className="flex items-center gap-1.5 text-xs text-[#E59B8B] font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{emailError}</span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] disabled:opacity-75 transition-all rounded-sm shadow-md flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#1A362D]" />
                            <span>Generando tu Mapa...</span>
                          </>
                        ) : (
                          <>
                            <span>Ver mi Mapa de Arquitectura Energética</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-white/60 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Tus datos son privados. Cero spam, respeto absoluto.</span>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}

            {/* SCREEN 34: RESULTS SCREEN (NEVER CUT OFF AT TOP) */}
            {currentStep === 33 && (
              <motion.div
                key="modal-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 max-w-2xl mx-auto w-full pt-2 pb-6"
              >
                {/* Results Top Title & Greeting - Prominent & Visible */}
                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A059]/40 text-xs font-mono uppercase tracking-widest text-[#D8B774]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Diagnóstico Personalizado · {userInfo.name}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FAF9F5] tracking-tight">
                    Tu Mapa de Arquitectura Energética
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD7CC] max-w-lg mx-auto leading-relaxed">
                    Puntajes calculados de tus 32 respuestas. Cada dimensión se evalúa en una escala de 4 a 20 puntos de vitalidad soberana.
                  </p>
                </div>

                {/* 8 ANIMATED HORIZONTAL BARS */}
                {/* Color de barra: Dorado (#C5A059); Fondo de barra: Índigo (#23254A) */}
                <div className="space-y-4 bg-black/35 p-5 sm:p-7 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-white/60 pb-2.5 border-b border-white/10">
                    <span>Dimensión</span>
                    <span>Puntaje (máx. 20)</span>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    {calculatedScores.map((item, idx) => {
                      const isLowest = item.meta.key === lowestDimension.meta.key;

                      return (
                        <div key={item.meta.key} className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-serif font-medium text-[#FAF9F5] flex items-center gap-1.5">
                              <span className="text-[#C5A059] font-mono text-[11px] font-bold">
                                {item.meta.romanNumeral}.
                              </span>
                              {item.meta.name}
                              {isLowest && (
                                <span className="text-[9px] font-mono uppercase tracking-wider text-[#1A362D] bg-[#D8B774] px-1.5 py-0.5 rounded-xs font-bold">
                                  Principal Fuga
                                </span>
                              )}
                            </span>
                            <span className="font-mono text-xs text-[#FAF9F5] font-semibold">
                              {item.score} / 20 ({item.percentage}%)
                            </span>
                          </div>

                          {/* Horizontal Bar: Background Indigo (#23254A), Fill Gold (#C5A059) */}
                          <div className="w-full h-3 bg-[#23254A] rounded-full overflow-hidden p-0.5 shadow-inner">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(item.score / 20) * 100}%` }}
                              transition={{ duration: 0.8, delay: idx * 0.06, ease: "easeOut" }}
                              className={`h-full rounded-full ${
                                isLowest
                                  ? 'bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.9)]'
                                  : 'bg-[#C5A059]'
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* DESTACADO DE FUGA DE ENERGÍA */}
                <div className="bg-black/40 text-[#FAF9F5] p-5 sm:p-7 rounded-2xl border border-[#C5A059]/40 shadow-xl space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D8B774]">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>Análisis Somático Clínico</span>
                  </div>

                  {/* Exact highlighted message */}
                  <div className="border-l-2 border-[#C5A059] pl-3.5 py-1">
                    <h4 className="text-lg sm:text-xl font-serif text-[#FAF9F5] leading-snug">
                      Tu principal fuga de energía está en la dimensión de <span className="text-[#D8B774] underline underline-offset-4 font-semibold">{lowestDimension.meta.name}</span>. Es aquí donde estás entregando tu poder.
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#DDD7CC] leading-relaxed">
                    {lowestDimension.meta.leakDescription}
                  </p>

                  <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="p-4 bg-black/40 rounded-xl border border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8B774] font-semibold block">
                        Recomendación Somática
                      </span>
                      <p className="text-xs text-[#FAF9F5] leading-relaxed">
                        {lowestDimension.meta.somaticRecommendation}
                      </p>
                    </div>

                    <div className="p-4 bg-black/40 rounded-xl border border-white/10 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-semibold block">
                        Micro-práctica de Hoy
                      </span>
                      <p className="text-xs text-[#FAF9F5] leading-relaxed italic">
                        "{lowestDimension.meta.firstStep}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* BOTÓN FINAL DORADO & ACCIONES */}
                <div className="p-5 sm:p-7 bg-black/30 rounded-2xl border border-white/10 text-center space-y-3.5">
                  <h4 className="text-lg sm:text-xl font-serif text-[#FAF9F5]">
                    Sellar esta fuga de raíz con acompañamiento experto
                  </h4>
                  <p className="text-xs text-[#DDD7CC] max-w-md mx-auto leading-relaxed">
                    Diseñaremos un mapa somático específico para recuperar tu soberanía en tu dimensión de {lowestDimension.meta.name}.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    {/* Botón final Dorado exigido */}
                    <button
                      onClick={() => {
                        onClose();
                        if (onScheduleSession) {
                          onScheduleSession(`Sesión 1:1 de Power Embodiment - Fuga en ${lowestDimension.meta.name}`);
                        }
                      }}
                      className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] transition-all rounded-sm shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agenda tu sesión 1:1 de Power Embodiment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reiniciar Test</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Modal Bottom Controls (During questions 1-32) */}
        {isQuestionScreen && (
          <motion.div 
            animate={{ backgroundColor: activeHeaderBg }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-5 sm:px-8 py-3 border-t border-white/10 flex items-center justify-between shrink-0"
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentAnswer === undefined}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A362D] bg-[#C5A059] hover:bg-[#D8B774] active:bg-[#A07D37] disabled:opacity-40 disabled:pointer-events-none transition-all rounded-sm shadow-sm"
            >
              <span>{currentStep === 31 ? "Finalizar Preguntas" : "Siguiente"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
};
