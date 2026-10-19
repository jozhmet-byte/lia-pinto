# Lia Pinto — Power Embodiment Mentor & Mastercoach
## Estado del Proyecto y Registro de Cambios (PROJECT STATUS)

> **Fecha de guardado:** 17 de Octubre, 2026  
> **Directorio del Proyecto:** `/Users/josuegarcia/Antigravity/Lia Pinto`  
> **Servidor Local de Desarrollo:** `http://localhost:3001/` (y proxy a `3000`)

---

## 1. Identidad de Marca y Enfoque
* **Cliente / Marca Personal:** Lia Pinto — Mastercoach & Mentora de Encarnación / Power Embodiment Mentor.
* **Audiencia Objetivo:** Mamás que acompañan a otros (coaches, mentoras, terapeutas y líderes de servicio).
* **Propuesta de Valor Central:**  
  *"Tu poder personal es la energía que recuperas cuando dejas de abandonarte."*
* **Estética y Paleta de Colores:**
  * Fondo Primario: Verde bosque profundo sagrado (`#1A362D` y `#11241E`).
  * Acentos de Poder: Dorado somático radiante (`#C5A059`, `#D8B774`).
  * Tipografía y Textos: Blanco marfil (`#FAF9F5`) y pergamino suave (`#DDD7CC`).
  * Sensación: Alta gama, espiritual pero aterrizada, profesional, elegante y transformadora.

---

## 2. Historial de Decisiones y Cambios Recientes

### A. Foto de Lia Pinto (Hero)
1. **Imagen Mejorada y Adaptada:**
   * Se procesó la fotografía original de Lia Pinto para integrarla en alta resolución.
   * Archivos generados en `public/`:
     * `public/lia-pinto-feathered.png` (fondo transparente con fundido suave inferior y lateral).
     * `public/lia-pinto-seamless-hero.png` (render de alta nitidez).
2. **Diseño Libre y sin Marcos:**
   * Se retiraron bordes duros, tarjetas rígidas y recuadros contenedores.
   * La foto ahora es la auténtica protagonista: se funde suave y naturalmente con el fondo verde `#1A362D`.
3. **Limpieza de Badges en la Foto:**
   * Se eliminaron etiquetas flotantes como *"18+ Años de Mentoría"* y *"Presencia Somática"* que restaban protagonismo visual al retrato.

### B. Fondo Animado del Hero y Tipografía
1. **Eliminación del Círculo Giratorio:**
   * Se retiró la geometría circular que rotaba detrás del titular en la columna izquierda porque obstaculizaba la lectura.
   * Ahora el texto tiene **100% de legibilidad**, contraste limpio y foco absoluto.
2. **Patrón Temático Tenue Continuo (*Seamless Pattern*):**
   * Se generó e implementó `public/somatic-pattern-bg.jpg` con motivos botánicos, flores de loto, destellos sagrados y trazos dorados finos.
   * Se animó en `src/index.css` con la clase `.somatic-pattern-layer` y `@keyframes patternDriftSlow` (desplazamiento orgánico suave de 36s en loop infinito).
   * Se configuró con una opacidad tenue calibrada (`opacity-[0.16]`) para no competir con el contenido ni la foto.
3. **Atmósfera Somática Viva:**
   * 4 cuadrantes de auroras vivas (`animate-aurora-1` a `4`).
   * 24 ascuas doradas flotantes (`EMBERS`) distribuidas uniformemente a lo largo de todo el ancho del hero.
   * Destellos de luz estelar (`TWINKLES`).
   * Ondas de energía sutiles inferiores en SVG con filtros drop-shadow dorados.

---

## 3. Estructura de Archivos Clave

```
Lia Pinto/
├── public/
│   ├── lia-pinto-feathered.png    # Foto de Lia con recorte y fundido degradado suave
│   ├── lia-pinto-seamless-hero.png# Foto alternativa en alta definición
│   └── somatic-pattern-bg.jpg     # Patrón continuo botánico / somático tenue
├── src/
│   ├── components/
│   │   ├── Hero.tsx               # Sección Hero principal con Lia, tipografía y patrón animado
│   │   ├── AssessmentModal.tsx    # Modal interactivo con el test de fuga de energía
│   │   ├── Methodology.tsx        # Explicación de los 4 pilares del método
│   │   ├── Programs.tsx           # Oferta de mentorías y programas
│   │   ├── Testimonials.tsx       # Prueba social y testimonios
│   │   ├── Navbar.tsx             # Navegación fija superior
│   │   └── Footer.tsx             # Pie de página y contacto
│   ├── App.tsx                    # Orquestador principal de la Landing
│   ├── index.css                  # Animaciones CSS, keyframes, tokens y capas de estilo
│   └── main.tsx                   # Punto de entrada de React
├── package.json                   # Dependencias (React 19, Lucide, Tailwind v4, Vite)
├── PROJECT_STATUS.md              # Este documento de referencia rápida
└── vite.config.ts                 # Configuración del bundler Vite
```

---

## 4. Comandos para Levantar y Probar

Para continuar trabajando o iniciar el servidor:

```bash
# 1. Directorio del proyecto
cd "/Users/josuegarcia/Antigravity/Lia Pinto"

# 2. Instalar dependencias si es necesario
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
# -> Corre por defecto en http://localhost:3001/

# 4. Validar build de producción (TypeScript + Vite)
npm run build
```

---

## 5. Próximos Pasos al Retomar
1. **Revisión del Hero:** Confirmar con el usuario si la opacidad del patrón tenue (`opacity-[0.16]`) es la deseada o si se requiere ajustar más clara / más sutil.
2. **Secciones Secundarias:** Continuar con la revisión o enriquecimiento visual de las secciones inferiores:
   * Metodología / Pilares.
   * Test de fuga de energía (flujo del modal).
   * Programas y Mentorías 1 a 1.
3. **Versión Responsive Mobile:** Verificar ajustes finos en pantallas móviles para la visualización del fondo y foto.
