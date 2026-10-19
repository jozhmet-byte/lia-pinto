import { TestQuestion, TestResult } from '../types';

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "¿Qué ocurre en tu cuerpo y mente cuando alguien te pide sostén, ayuda o un favor y estás exhausta?",
    context: "Observa tu primera reacción física antes de elaborar tu respuesta.",
    options: [
      {
        label: "Digo que sí automáticamente por fuera mientras por dentro siento pesadez y una contracción en el pecho.",
        dimension: "boundaries",
        insight: "Patrón de 'La Cuidadora Cansada': porosidad de límites y reflejo de complacencia."
      },
      {
        label: "Dudo y temo decir 'no' para no incomodar o decepcionar a quien me necesita.",
        dimension: "voice",
        insight: "Patrón de 'La Pacificadora Silenciosa': censura de la propia verdad para sostener la armonía externa."
      },
      {
        label: "Pongo su proceso por encima de mi tiempo; siempre encuentro espacio para otros pero nunca para mis propios proyectos.",
        dimension: "sovereignty",
        insight: "Patrón de 'La Mentora Invisible': sostener a todos mientras tus sueños quedan en pausa."
      },
      {
        label: "Asumo que 'tengo que poder con todo' y me exijo resolverlo con una sonrisa impecable.",
        dimension: "integration",
        insight: "Patrón de 'La Perfeccionista Agotada': autoexigencia implacable y negación del propio cansancio."
      }
    ]
  },
  {
    id: 2,
    question: "En una conversación donde tus necesidades o verdades difieren de los demás:",
    context: "La relación con tu voz y la tolerancia a no agradar a todos.",
    options: [
      {
        label: "Callo lo que verdaderamente pienso para evitar tensión o parecer conflictiva.",
        dimension: "voice",
        insight: "Autosilenciamiento: compras una calma externa al precio de tu paz interna."
      },
      {
        label: "Empiezo a ceder en mis límites hasta que termino adaptándome a lo que el otro quiere.",
        dimension: "boundaries",
        insight: "Dificultad para mantener una frontera sana entre el sentir ajeno y el propio."
      },
      {
        label: "Minimizo mi punto de vista pensando que el bienestar de la otra persona es más urgente.",
        dimension: "sovereignty",
        insight: "Empequeñecimiento inconsciente de tu valor y de tu palabra."
      },
      {
        label: "Racionalizo todo en mi mente y me juzgo por sentir molestia o incomodidad.",
        dimension: "integration",
        insight: "Bypass intelectual: intentar explicar la emoción en lugar de permitirle existir en el cuerpo."
      }
    ]
  },
  {
    id: 3,
    question: "Cuando tus clientes, consultantes o seres queridos atraviesan una crisis:",
    context: "Tu postura energética al sostener a otros en su proceso.",
    options: [
      {
        label: "Cargo energéticamente con su dolor y me quedo con su peso en los hombros días después.",
        dimension: "boundaries",
        insight: "Esponja empática: absorción de energía ajena por falta de enraizamiento terrenal."
      },
      {
        label: "Les doy contención infinita, pero cuando yo necesito ser sostenida, me aíslo en silencio.",
        dimension: "sovereignty",
        insight: "La facilitadora que nadie sostiene: soledad de quien siempre es el pilar de otros."
      },
      {
        label: "Siento culpa si no estoy 100% disponible o si me tomo una tarde entera para no hacer nada.",
        dimension: "integration",
        insight: "Asociación errónea entre valor personal y utilidad continua."
      },
      {
        label: "Me cuesta poner límites claros a sus demandas de tiempo por miedo a sonar fría o dura.",
        dimension: "voice",
        insight: "Falta de anclaje de la firmeza serena en tu comunicación."
      }
    ]
  },
  {
    id: 4,
    question: "Respecto a tus propios proyectos creativos, descanso o visión de vida personal:",
    context: "El lugar que le das a tus propios anhelos en tu agenda cotidiana.",
    options: [
      {
        label: "Mis sueños siempre quedan para 'cuando termine esta etapa' o 'cuando todos estén bien'.",
        dimension: "sovereignty",
        insight: "Postergación crónica: tus visiones quedan en el último escalón de la lista."
      },
      {
        label: "Empiezo con ilusión pero las urgencias de los demás devoran mi tiempo y energía.",
        dimension: "boundaries",
        insight: "Fuga por interrupciones y falta de un santuario infranqueable para ti."
      },
      {
        label: "Dudo si realmente soy capaz de dar el siguiente salto sin descuidar a quienes dependen de mí.",
        dimension: "voice",
        insight: "Conflicto de lealtades entre tu expansión y el rol de cuidadora."
      },
      {
        label: "Si no avanzo a paso perfecto me castigo con autocrítica y me siento una farsante.",
        dimension: "integration",
        insight: "Látigo de la perfeccionista: la autoexigencia que agota tu sistema nervioso."
      }
    ]
  },
  {
    id: 5,
    question: "¿Cuál es la sensación física y emocional predominante cuando cae la noche?",
    context: "El balance energético residual al final de una jornada ordinaria.",
    options: [
      {
        label: "Agotamiento sordo en el cuerpo: haber corrido todo el día sin haber tenido un solo instante para mí.",
        dimension: "boundaries",
        insight: "Tu energía vital está vertida hacia el afuera en lugar de nutrida desde tu centro."
      },
      {
        label: "Sensación de garganta apretada y mente activa repasando lo que no dije o debí callar.",
        dimension: "voice",
        insight: "Tensión laríngea y rumia mental por palabras retenidas."
      },
      {
        label: "Una tristeza silenciosa de ver cómo otro día pasó sin avanzar en lo que mi alma anhela.",
        dimension: "sovereignty",
        insight: "El duelo invisible de la mentora postergada."
      },
      {
        label: "Tensión en nuca y mandíbula por haber estado sosteniendo el control y la exigencia todo el día.",
        dimension: "integration",
        insight: "Hipervigilancia y rigidez somática acumulada en el sistema nervioso."
      }
    ]
  }
];

export const testResultsMap: Record<string, TestResult> = {
  boundaries: {
    dominantDimension: 'boundaries',
    title: "La Cuidadora Cansada",
    archetype: "Fuga por Porosidad de Límites",
    subtitle: "Dices sí por fuera mientras todo tu cuerpo grita no.",
    description: "Tu principal fuga energética ocurre en el umbral de tus límites. Has construido una identidad basada en ser el pilar generoso, comprensivo e incondicional. Sin embargo, para no decepcionar a los demás, has normalizado traicionar tu tiempo, tu descanso y tus necesidades biológicas más básicas.",
    fugaEnergy: "Entre el 45% y el 65% de tu energía diaria se disipa en responder a urgencias ajenas y compromisos que asumiste por complacencia.",
    prescripcion: "El trabajo somático de urgencia es habitar la pausa sagrada de 5 segundos antes de emitir cualquier respuesta. Un límite a tiempo no es un ataque hacia el otro, es una reverencia a tu propio templo.",
    firstStep: "Practica esta frase corporal hoy mismo: 'Déjame revisarlo con calma y te confirmo mañana', evitando el 'sí' automático."
  },
  voice: {
    dominantDimension: 'voice',
    title: "La Pacificadora Silenciosa",
    archetype: "Fuga por Autosilenciamiento",
    subtitle: "Callas lo que de verdad piensas para no generar tensión o conflicto.",
    description: "Tu energía se esfuma en la garganta y en la mente cada vez que censuras tu opinión o tus necesidades para no incomodar al entorno. Confundes la paz con la anestesia del conflicto: compras calma externa con una tormenta interna de resentimiento y fatiga crónica.",
    fugaEnergy: "Tu energía se estanca en el chakra laríngeo y en el diafragma, manifestándose como bruxismo, tensión cervical y agotamiento mental.",
    prescripcion: "Integrar tu voz no requiere agresividad ni defensa; requiere aprender a sostener la vibración de tu verdad en el cuerpo sin colapsar ante la incomodidad ajena.",
    firstStep: "En tu próxima conversación donde sientas un desacuerdo, nombra tu postura con sencillez sin acompañarla de cinco párrafos de disculpas."
  },
  sovereignty: {
    dominantDimension: 'sovereignty',
    title: "La Mentora Invisible",
    archetype: "Fuga por Sostén Ajeno y Postergación Propia",
    subtitle: "Sostienes los procesos de transformación de otros mientras tus propios sueños esperan turno indefinido.",
    description: "Eres una fuente inagotable de sabiduría, contención y visión para tus clientes, hijos o comunidad. Pero en el orden de prioridades, tu propia expansión, placer y descanso siempre quedan relegados al final de la fila. Has olvidado que no puedes regar un jardín si tu manantial está seco.",
    fugaEnergy: "Disipas tu magnetismo personal alimentando los proyectos de otros mientras tu propia obra queda postergada.",
    prescripcion: "Reclamar tu soberanía terrenal: agendar bloques innegociables para tu propia creación y permitirte ser sostenida antes de salir a sostener.",
    firstStep: "Bloquea 90 minutos esta misma semana en tu calendario exclusivamente para tu proyecto o descanso, tratándolo con el mismo rigor que una cita médica o con un cliente."
  },
  integration: {
    dominantDimension: 'integration',
    title: "La Perfeccionista Agotada",
    archetype: "Fuga por Rendimiento y Autoexigencia",
    subtitle: "Crees que solo eres valiosa cuando resuelves, cuando rindes, cuando no necesitas nada.",
    description: "Cargas con el mandato inconsciente de ser la mujer infalible: la que nunca se desmorona, la que todo lo resuelve y la que no necesita pedir auxilio. Esta armadura te ha traído reconocimiento, pero hoy tiene a tu sistema nervioso en estado de alerta constante y soledad profunda.",
    fugaEnergy: "El esfuerzo de sostener la imagen de 'la que puede con todo' consume el doble de calorías metabólicas y anímicas que cualquier trabajo físico.",
    prescripcion: "Dejar caer la armadura. Tu valor reside en tu presencia, no en tu productividad. Permitir que tu vulnerabilidad sea bienvenida sin culpa.",
    firstStep: "Coloca ambas manos sobre tu pecho durante 2 minutos al despertar, inhala hondo y repite en silencio: 'Hoy no necesito ganarme mi derecho a existir'."
  }
};

export const servicesData = [
  {
    id: "mentoria-individual",
    tag: "Acompañamiento 1 a 1",
    title: "Presencia & Soberanía",
    duration: "12 semanas individuales",
    description: "Proceso privado de alta profundidad para coaches, mentoras y terapeutas que sostienen a otros pero necesitan dejar de abandonarse a sí mismas.",
    bullets: [
      "Diagnóstico exhaustivo de fugas energéticas y cartografía del autoabandono somático.",
      "Sesiones quincenales de Power Embodiment de 75 minutos con Lia Pinto.",
      "Protocolos somáticos personalizados para calmar el sistema nervioso y enraizar límites.",
      "Acompañamiento cercano entre sesiones vía canal privado de notas de voz.",
      "Integración de sombra: convertir la culpa de elegirte en soberanía y calma interna."
    ],
    cta: "Postular a Mentoría Individual",
    badge: "Plazas estrictamente limitadas por trimestre"
  },
  {
    id: "programa-grupal",
    tag: "Inmersión en Círculo",
    title: "El Retorno",
    duration: "8 semanas en comunidad",
    description: "Un espacio íntimo y sagrado entre mujeres que comparten tu rol de facilitadoras y cuidadoras. Sin positivismo tóxico: indagación somática rigurosa y sostén mutuo.",
    bullets: [
      "8 encuentros semanales en vivo vía Zoom (círculo íntimo de máximo 12 mujeres).",
      "Prácticas guiadas del Ciclo de Recuperación: Sentir, Integrar, Elegirte y Habitar.",
      "Laboratorio somático para ejercitar límites claros y voz auténtica sin culpa.",
      "Cuaderno de bitácora y prácticas de meditación somática descargables.",
      "Espacio seguro de alta confidencialidad y resonancia entre pares."
    ],
    cta: "Unirme a la Lista de Espera",
    badge: "Próxima cohorte: Apertura exclusiva"
  },
  {
    id: "sesion-claridad",
    tag: "Diagnóstico Intensivo",
    title: "Sesión de Claridad Energética",
    duration: "90 minutos 1 a 1",
    description: "Un encuentro quirúrgico de alta precisión para identificar el punto ciego exacto donde estás entregando tu energía hoy y trazar un plan somático de retorno.",
    bullets: [
      "Cuestionario previo de auditoría de energía vital y hábitos de postergación.",
      "Sesión 1 a 1 intensiva de 90 minutos con Lia Pinto.",
      "Hoja de ruta somática personalizada con acciones claras para los siguientes 30 días.",
      "Grabación en audio y guía escrita de tus anclajes de poder."
    ],
    cta: "Agendar Sesión de Claridad",
    badge: "Cupos semanales reducidos"
  }
];
