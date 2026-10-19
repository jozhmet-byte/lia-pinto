import { DimensionMeta, QuestionItem } from '../types';

export const scaleOptions = [
  { value: 1, label: "Nunca", description: "Casi no resuena con mi realidad" },
  { value: 2, label: "Rara vez", description: "Ocurre en contadas ocasiones" },
  { value: 3, label: "Algunas veces", description: "Depende del día o contexto" },
  { value: 4, label: "Frecuentemente", description: "Es un hábito o respuesta habitual" },
  { value: 5, label: "Casi siempre", description: "Es mi estado o reacción constante" }
];

export const dimensionsData: DimensionMeta[] = [
  {
    key: 'confianza',
    romanNumeral: 'I',
    name: 'Confianza',
    startId: 1,
    endId: 4,
    shortDescription: 'Ocupar tu lugar y avanzar sin pedir permiso.',
    leakDescription: 'Tu energía se disipa al empequeñecerte frente a otros que consideras más reconocidos o al postergarte esperando sentirte "completamente lista". Cedes tu soberanía esperando una validación que solo tú puedes otorgarte.',
    somaticRecommendation: 'Enraizar el peso en la pelvis y la planta de los pies. Respirar en la base de la columna para ocupar tu espacio corporal sin disculparte ni contraer la garganta.',
    firstStep: 'Entra a tu próximo encuentro sosteniendo tu mirada y tu postura erguida sin encogerte ni justificar tu presencia.',
    theme: {
      bg: '#142922', // Deep Forest Moss
      headerBg: '#0E1E19',
      glow: 'rgba(20, 41, 34, 0.85)',
      accent: '#C5A059',
      element: 'Tierra & Enraizamiento',
      archetypeBadge: 'Dimensión Terrenal'
    }
  },
  {
    key: 'pasion',
    romanNumeral: 'II',
    name: 'Pasión',
    startId: 5,
    endId: 8,
    shortDescription: 'Fuerza creativa, gozo y vitalidad en tu obra.',
    leakDescription: 'Has transformado tu quehacer en una lista interminable de deberes y productividad rígida, sofocando el fuego del juego, el deseo y el entusiasmo genuino que dio origen a tu vocación.',
    somaticRecommendation: 'Reconectar con el vientre y el sacro. Permitir que el placer y la danza espontánea despierten tu energía vital sin convertir cada impulso en una obligación comercial.',
    firstStep: 'Dedica 20 minutos esta semana a crear o explorar algo que no tenga ningún objetivo de monetización ni utilidad práctica.',
    theme: {
      bg: '#2C1614', // Terracotta Wine
      headerBg: '#1F0F0E',
      glow: 'rgba(55, 25, 23, 0.85)',
      accent: '#E59B8B',
      element: 'Fuego & Pulso Vital',
      archetypeBadge: 'Dimensión Creativa'
    }
  },
  {
    key: 'valia',
    romanNumeral: 'III',
    name: 'Valía',
    startId: 9,
    endId: 12,
    shortDescription: 'Autoridad interna, dignidad y recepción sin culpa.',
    leakDescription: 'Fugas energía al compararte compulsivamente con otras personas o al sentir la necesidad de sobre-demostrar tu capacidad cuando alguien te cuestiona. Te cuesta recibir abundancia y reconocimiento sin justificarte.',
    somaticRecommendation: 'Habitar el plexo solar sin rigidez defensiva. Reconocer tu linaje de experiencia y dejar de negociar el precio de tu entrega.',
    firstStep: 'Cuando recibas un halago, pago o agradecimiento, responde simplemente: "Gracias, lo recibo con alegría", sin minimizar tu esfuerzo.',
    theme: {
      bg: '#271F0E', // Solar Amber
      headerBg: '#1C1609',
      glow: 'rgba(45, 36, 15, 0.85)',
      accent: '#F0C265',
      element: 'Fuego Solar & Autoridad',
      archetypeBadge: 'Dimensión de Soberanía'
    }
  },
  {
    key: 'conexion',
    romanNumeral: 'IV',
    name: 'Conexión',
    startId: 13,
    endId: 16,
    shortDescription: 'Límites limpios, empatía soberana y amor sin absorber.',
    leakDescription: 'Fuga por absorción y exceso de responsabilidad emocional: sientes que para amar o acompañar debes solucionar las vidas ajenas. Dices sí cuando quieres decir no por terror a romper el vínculo.',
    somaticRecommendation: 'Fortalecer el campo áurico y la frontera cutánea. Sentir tu piel como un límite sagrado que te permite amar profundamente sin tragarte la turbulencia emocional ajena.',
    firstStep: 'Cuando alguien cercano viva una crisis, acompáñale con presencia y escucha sin ofrecerte de inmediato a resolverle el problema.',
    theme: {
      bg: '#132A24', // Deep Sage Emerald
      headerBg: '#0C1C18',
      glow: 'rgba(19, 42, 36, 0.85)',
      accent: '#7ED4BA',
      element: 'Corazón & Fronteras Sagradas',
      archetypeBadge: 'Dimensión Relacional'
    }
  },
  {
    key: 'voz',
    romanNumeral: 'V',
    name: 'Voz',
    startId: 17,
    endId: 20,
    shortDescription: 'Expresión clara, verdad encarnada y liderazgo.',
    leakDescription: 'Te censuras para evitar desacuerdos o suavizas tanto tu mensaje por miedo a incomodar que terminas diluyendo tu fuerza y esperando que los demás adivinen lo que necesitas.',
    somaticRecommendation: 'Abrir el paso del aire desde el diafragma hasta la boca. Aflojar la mandíbula y permitir que tu sonido resuene con la calma de la verdad no negociada.',
    firstStep: 'Expresa una necesidad o límite directo en una sola frase concisa, sin añadir explicaciones defensivas.',
    theme: {
      bg: '#141D33', // Deep Oceanic Indigo
      headerBg: '#0D1424',
      glow: 'rgba(20, 29, 51, 0.85)',
      accent: '#8AAEE8',
      element: 'Sonido & Verdad Encarnada',
      archetypeBadge: 'Dimensión Expresiva'
    }
  },
  {
    key: 'intuicion',
    romanNumeral: 'VI',
    name: 'Intuición',
    startId: 21,
    endId: 24,
    shortDescription: 'Certeza interna, escucha sutil y discernimiento.',
    leakDescription: 'Fuga por sobreanálisis y búsqueda frenética de respuestas afuera: antepones la opinión de "expertos" por encima de tu sabiduría somática, dudando de lo que tu cuerpo ya sabe con certeza.',
    somaticRecommendation: 'Pausar el ruido mental antes de decidir. Colocar una mano en el corazón y otra en el vientre para notar si la decisión genera expansión o contracción.',
    firstStep: 'Antes de pedir la opinión de otra persona sobre tu proyecto, siéntate 3 minutos en silencio y escribe tu propia respuesta interna.',
    theme: {
      bg: '#201A38', // Deep Mystic Violet
      headerBg: '#161127',
      glow: 'rgba(32, 26, 56, 0.85)',
      accent: '#B59EF8',
      element: 'Certeza Sutil & Tercer Ojo',
      archetypeBadge: 'Dimensión Intuitiva'
    }
  },
  {
    key: 'apertura',
    romanNumeral: 'VII',
    name: 'Apertura',
    startId: 25,
    endId: 28,
    shortDescription: 'Receptividad, confianza en la vida y entrega.',
    leakDescription: 'Control excesivo y desconfianza en recibir apoyo: crees que debes cargarlo todo sola y te cierras a oportunidades o sincronicidades porque no encajan con tu plan mental rígido.',
    somaticRecommendation: 'Relajar el diafragma y la nuca. Permitir que la espalda sea sostenida, rindiendo la hipervigilancia de la mujer que cree que si suelta un segundo, todo se derrumba.',
    firstStep: 'Pide o acepta una ayuda concreta esta semana sin apresurarte a devolver el favor de inmediato.',
    theme: {
      bg: '#2B1629', // Deep Royal Plum
      headerBg: '#1D0E1C',
      glow: 'rgba(43, 22, 41, 0.85)',
      accent: '#DE98D2',
      element: 'Corona & Receptividad Soberana',
      archetypeBadge: 'Dimensión Trascendente'
    }
  },
  {
    key: 'encarnacion',
    romanNumeral: 'VIII',
    name: 'Encarnación',
    startId: 29,
    endId: 32,
    shortDescription: 'Coherencia vivida, integración práctica y poder real.',
    leakDescription: 'Consumes cursos, libros y teorías como un mecanismo inconsciente para postergar la acción real. Existe una brecha entre lo que sabes filosóficamente y lo que te atreves a vivir en tu cotidianidad.',
    somaticRecommendation: 'Bajar de la cabeza al gesto cotidiano. Tomar decisiones audaces que cierren la brecha entre la mujer que te imaginas y la que toma decisiones hoy.',
    firstStep: 'Identifica una decisión que llevas semanas sobreanalizando y ejecuta el primer paso tangible hoy mismo sin esperar más información.',
    theme: {
      bg: '#1A1E1D', // Obsidian Charcoal
      headerBg: '#121413',
      glow: 'rgba(26, 30, 29, 0.85)',
      accent: '#D8B774',
      element: 'Tierra & Vida Manifestada',
      archetypeBadge: 'Dimensión de Integración'
    }
  }
];

export const questionsData: QuestionItem[] = [
  // I. CONFIANZA (1 a 4)
  {
    id: 1,
    dimensionKey: 'confianza',
    text: 'Cuando entro en espacios donde hay personas que percibo más exitosas, preparadas o reconocidas que yo, puedo ocupar mi lugar sin sentirme menos.'
  },
  {
    id: 2,
    dimensionKey: 'confianza',
    text: 'Puedo mostrar mi trabajo aunque todavía no sienta que soy "lo suficientemente buena".'
  },
  {
    id: 3,
    dimensionKey: 'confianza',
    text: 'Me permito imaginarme teniendo el nivel de éxito que deseo sin pensar inmediatamente que quizá no sea para mí.'
  },
  {
    id: 4,
    dimensionKey: 'confianza',
    text: 'Cuando aparece el pensamiento "¿quién soy yo para hacer esto?", puedo continuar sin necesitar que alguien me dé permiso.'
  },

  // II. PASIÓN (5 a 8)
  {
    id: 5,
    dimensionKey: 'pasion',
    text: 'Mi negocio nace de algo que genuinamente deseo expresar, crear o transformar.'
  },
  {
    id: 6,
    dimensionKey: 'pasion',
    text: 'Puedo sentir entusiasmo y deseo por lo que estoy creando, incluso cuando todavía no veo resultados externos.'
  },
  {
    id: 7,
    dimensionKey: 'pasion',
    text: 'Me doy espacios para jugar, explorar y crear sin convertir todo inmediatamente en obligación o productividad.'
  },
  {
    id: 8,
    dimensionKey: 'pasion',
    text: 'Reconozco mi deseo y mi energía sexual como una fuerza creativa que puedo dirigir hacia mi vida y mi negocio.'
  },

  // III. VALÍA (9 a 12)
  {
    id: 9,
    dimensionKey: 'valia',
    text: 'Puedo reconocer el valor de lo que aporto sin compararme constantemente con otras personas.'
  },
  {
    id: 10,
    dimensionKey: 'valia',
    text: 'Cuando alguien cuestiona mi capacidad, no siento que tenga que demostrar inmediatamente mi valor.'
  },
  {
    id: 11,
    dimensionKey: 'valia',
    text: 'Puedo recibir dinero, reconocimiento o éxito sin sentir que tengo que justificar que lo merezco.'
  },
  {
    id: 12,
    dimensionKey: 'valia',
    text: 'Puedo tomar decisiones desde mi propia autoridad aunque otras personas no estén de acuerdo conmigo.'
  },

  // IV. CONEXIÓN (13 a 16)
  {
    id: 13,
    dimensionKey: 'conexion',
    text: 'Puedo escuchar las necesidades de otra persona sin asumir automáticamente que tengo que resolverlas.'
  },
  {
    id: 14,
    dimensionKey: 'conexion',
    text: 'Puedo decir que no sin interpretar que estoy dañando la relación.'
  },
  {
    id: 15,
    dimensionKey: 'conexion',
    text: 'Cuando alguien está decepcionado, molesto o en desacuerdo conmigo, puedo permanecer conectada conmigo misma.'
  },
  {
    id: 16,
    dimensionKey: 'conexion',
    text: 'Puedo amar profundamente a alguien sin hacerme responsable de sus emociones, decisiones o bienestar.'
  },

  // V. VOZ (17 a 20)
  {
    id: 17,
    dimensionKey: 'voz',
    text: 'Expreso claramente lo que quiero aunque exista la posibilidad de que alguien no esté de acuerdo.'
  },
  {
    id: 18,
    dimensionKey: 'voz',
    text: 'Puedo hablar de mi trabajo y de lo que hago sin sentir que estoy imponiéndome o molestando.'
  },
  {
    id: 19,
    dimensionKey: 'voz',
    text: 'Cuando sé que algo necesita cambiar, puedo expresarlo en lugar de seguir esperando que los demás lo adivinen.'
  },
  {
    id: 20,
    dimensionKey: 'voz',
    text: 'Soy capaz de convertir una visión interna en palabras, decisiones y acciones concretas.'
  },

  // VI. INTUICIÓN (21 a 24)
  {
    id: 21,
    dimensionKey: 'intuicion',
    text: 'Puedo escuchar mi intuición incluso cuando una persona que considero experta me dice algo diferente.'
  },
  {
    id: 22,
    dimensionKey: 'intuicion',
    text: 'Antes de buscar respuestas afuera, me doy espacio para preguntarme qué pienso, siento o sé internamente.'
  },
  {
    id: 23,
    dimensionKey: 'intuicion',
    text: 'Puedo distinguir entre una decisión que nace del miedo y una que nace de una certeza interna.'
  },
  {
    id: 24,
    dimensionKey: 'intuicion',
    text: 'Confío en que puedo encontrar mis propias respuestas aunque todavía no tenga claridad absoluta.'
  },

  // VII. APERTURA (25 a 28)
  {
    id: 25,
    dimensionKey: 'apertura',
    text: 'Puedo permanecer abierta a nuevas posibilidades aunque no se parezcan a lo que había imaginado.'
  },
  {
    id: 26,
    dimensionKey: 'apertura',
    text: 'Presto atención a coincidencias, conversaciones, oportunidades y experiencias que podrían estar mostrándome algo.'
  },
  {
    id: 27,
    dimensionKey: 'apertura',
    text: 'Cuando la vida no sucede como esperaba, puedo preguntarme qué está intentando mostrarme en lugar de asumir inmediatamente que algo salió mal.'
  },
  {
    id: 28,
    dimensionKey: 'apertura',
    text: 'Puedo recibir ayuda, oportunidades, dinero, reconocimiento y apoyo sin sentir que tengo que demostrar que los merezco primero.'
  },

  // VIII. ENCARNACIÓN (29 a 32)
  {
    id: 29,
    dimensionKey: 'encarnacion',
    text: 'Lo que sé sobre crecimiento personal se refleja realmente en la manera en que tomo decisiones cotidianas.'
  },
  {
    id: 30,
    dimensionKey: 'encarnacion',
    text: 'Cuando reconozco un patrón que ya no quiero, soy capaz de actuar diferente aunque emocionalmente todavía no me resulte cómodo.'
  },
  {
    id: 31,
    dimensionKey: 'encarnacion',
    text: 'No utilizo aprender, analizar, hacer cursos o buscar más información como una manera de postergar aquello que sé que necesito hacer.'
  },
  {
    id: 32,
    dimensionKey: 'encarnacion',
    text: 'Mi manera de vivir, relacionarme y crear mi negocio refleja cada vez más la mujer que digo querer ser.'
  }
];
