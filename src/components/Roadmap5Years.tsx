import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Rocket, 
  Building2, 
  Trophy, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Milestone,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  Layers,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectLifeData } from '../types';

interface Roadmap5YearsProps {
  data: ProjectLifeData;
}

const yearIcons = [
  GraduationCap,
  Award,
  Rocket,
  Building2,
  Trophy
];

export const Roadmap5Years: React.FC<Roadmap5YearsProps> = ({ data }) => {
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'poster' | 'slider'>('poster');

  const roadmapItems = (data.fiveYearRoadmap && data.fiveYearRoadmap.length > 0)
    ? data.fiveYearRoadmap
    : [
        {
          year: 'Año 1 (2026)',
          stage: 'Aprobación Semestral & Formulación del Proyecto',
          focus: 'Aprobar con éxito 6to semestre en la ESPOCH, estructurar el plan técnico y de costeo arancelario en la cátedra del Ing. Hitalo Veloz, y arrancar la importación inicial de prueba.',
          keyResults: [
            'Aprobar 6to semestre de Contabilidad y Auditoría en la ESPOCH con bases sólidas.',
            'Formular la viabilidad económica y costeo arancelario en la cátedra del Ing. Hitalo Veloz.',
            'Efectuar una primera importación piloto de prueba para validar tiempos y proveedores.',
          ],
        },
        {
          year: 'Año 2 (2027)',
          stage: 'Séptimo Semestre, Registro de Marca & Ventas Activas',
          focus: 'Cursar y aprobar 7mo semestre en la ESPOCH, formalizar el registro de mi marca comercial y acelerar las importaciones directas con catálogo digital.',
          keyResults: [
            'Aprobar las asignaturas de 7mo semestre (vigente hasta septiembre de 2027).',
            'Registro formal de mi marca comercial y trámites aduaneros/tributarios propios.',
            'Consolidar cartera activa de clientes en Riobamba y pedidos por catálogo online.',
          ],
        },
        {
          year: 'Año 3 (2028)',
          stage: 'Graduación de la ESPOCH & Escalamiento Comercial',
          focus: 'Culminar la carrera y graduarme de la ESPOCH como Licenciado en Contabilidad y Auditoría, dedicando el impulso profesional a escalar el volumen de importación.',
          keyResults: [
            'Obtención de mi título profesional en la ESPOCH (Ingeniería/Licenciatura en Contabilidad y Auditoría).',
            'Importaciones recurrentes de mayor volumen en domótica y dispositivos inteligentes.',
            'Reinversión sistemática de utilidades para capital de trabajo operativo.',
          ],
        },
        {
          year: 'Año 4 (2029)',
          stage: 'Showroom de Domótica & Contratos Corporativos',
          focus: 'Abrir mi primer showroom físico de domótica inteligente para residencias y oficinas, cerrando contratos de instalación integral y servicios.',
          keyResults: [
            'Inauguración del espacio físico de exhibición tecnológica interactiva.',
            'Alianzas comerciales con arquitectos, constructores e instaladores técnicos.',
            'Flujo de caja positivo, sólido y con ingresos recurrentes.',
          ],
        },
        {
          year: 'Año 5 (2030 - 2031)',
          stage: 'Empresa Consolidada & Independencia y Bienestar Familiar',
          focus: 'Consolidar mi empresa de importación y domótica como referente del sector, logrando independencia financiera y brindando bienestar integral y tranquilidad a mi familia.',
          keyResults: [
            'Empresa formalmente posicionada, rentable y con operaciones automatizadas.',
            'Libertad financiera y respaldo económico duradero para mi hogar.',
            'Capacidad de asesorar y apoyar a nuevos jóvenes emprendedores politécnicos.',
          ],
        },
      ];

  const totalYears = roadmapItems.length;
  const currentStage = roadmapItems[currentYearIndex] || roadmapItems[0];
  const CurrentIcon = yearIcons[currentYearIndex] || Rocket;

  const handlePrev = () => {
    setCurrentYearIndex((prev) => (prev > 0 ? prev - 1 : totalYears - 1));
  };

  const handleNext = () => {
    setCurrentYearIndex((prev) => (prev < totalYears - 1 ? prev + 1 : 0));
  };

  return (
    <section id="vision5" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-xs font-semibold text-indigo-400">
          <Milestone className="w-3.5 h-3.5" />
          <span>Fase 3: Proyección en el Tiempo y Superación de Obstáculos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          ¿Dónde quiero estar en 5 Años?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Un plan de vida claro y estructurado: desde las aulas de la ESPOCH hasta la graduación y la consolidación de mi empresa de importación y domótica.
        </p>

        {/* View Switcher: Cartel Completo vs Slider Interactivo */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="inline-flex items-center p-1 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              id="view-poster-btn"
              onClick={() => setViewMode('poster')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'poster'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cartel General (Ver Todo)</span>
            </button>
            <button
              id="view-slider-btn"
              onClick={() => setViewMode('slider')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'slider'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Paso a Paso (Slider)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pregunta 8: VISTA 1 - CARTEL GENERAL COMPLETO */}
      {viewMode === 'poster' && (
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Cartel Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 relative z-10">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">
                Pregunta 8 · Cartel Cronológico (2026 - 2031)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Línea de Tiempo Formativa y Empresarial (ESPOCH & Negocio Propio)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-950/60 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>5 Etapas Secuenciales Claras</span>
            </div>
          </div>

          {/* 5-Year Poster Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {roadmapItems.map((item, idx) => {
              const IconComp = yearIcons[idx] || Rocket;
              const isGraduation = item.stage.toLowerCase().includes('graduación') || item.year.includes('2028');
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-300 relative group border ${
                    isGraduation
                      ? 'bg-gradient-to-b from-indigo-950/70 via-slate-900/90 to-slate-950 border-indigo-500/50 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/30'
                      : 'bg-slate-950/80 hover:bg-slate-900/90 border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Badge + Year Number */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg border ${
                        isGraduation
                          ? 'bg-indigo-950 text-indigo-300 border-indigo-700/60'
                          : 'bg-slate-900 text-slate-300 border-slate-800'
                      }`}>
                        {item.year}
                      </span>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isGraduation ? 'bg-indigo-600/20 text-indigo-300' : 'bg-slate-800/80 text-slate-400'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug group-hover:text-indigo-200 transition-colors">
                        {item.stage}
                      </h4>
                    </div>

                    {/* Focus / Core Objective */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                        Meta Principal:
                      </span>
                      {item.focus}
                    </div>
                  </div>

                  {/* Key Actions List */}
                  <div className="pt-2 border-t border-slate-800/60 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Acciones Clave:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      {item.keyResults.map((kr, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{kr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300 relative z-10">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                <strong className="text-white">Realismo Académico:</strong> Formulación y 6to semestre en 2026; 7mo semestre y registro de marca en 2027; y graduación en la ESPOCH en 2028 para dar impulso al negocio.
              </span>
            </div>
            <button
              onClick={() => setViewMode('slider')}
              className="text-indigo-400 hover:text-indigo-300 font-bold shrink-0 flex items-center gap-1"
            >
              <span>Ver en modo slider detallado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Pregunta 8: VISTA 2 - SLIDER INTERACTIVO PASO A PASO */}
      {viewMode === 'slider' && (
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header of Slider */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 relative z-10">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">
              Pregunta 8 · Proyección de Vida (2026 - 2031)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Ruta Año por Año (5 Metas Principales)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60">
              Año {currentYearIndex + 1} de {totalYears}
            </span>

            {/* Next/Prev quick buttons on top */}
            <div className="flex items-center gap-1.5">
              <button
                id="roadmap-prev-top-btn"
                onClick={handlePrev}
                aria-label="Año anterior"
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Año anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="roadmap-next-top-btn"
                onClick={handleNext}
                aria-label="Siguiente año"
                className="p-2 rounded-xl bg-indigo-600 border border-indigo-500 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-colors"
                title="Siguiente año"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stepper Tabs: Quick Jump to any of the 5 years */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 relative z-10 scrollbar-none">
          {roadmapItems.map((item, idx) => {
            const isActive = currentYearIndex === idx;
            return (
              <button
                key={idx}
                id={`roadmap-step-btn-${idx + 1}`}
                onClick={() => setCurrentYearIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                  isActive ? 'bg-white text-indigo-700' : 'bg-slate-700 text-slate-300'
                }`}>
                  {idx + 1}
                </span>
                <span>{item.year.split(' ')[0]} {item.year.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800/70 h-1.5 rounded-full overflow-hidden relative z-10">
          <div 
            className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentYearIndex + 1) / totalYears) * 100}%` }}
          />
        </div>

        {/* Slider Slide Content Container */}
        <div className="relative z-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentYearIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-6"
            >
              {/* Year Badge + Stage Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
                        {currentStage.year}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 font-medium">
                        Meta #{currentYearIndex + 1} de {totalYears}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {currentStage.stage}
                    </h4>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-indigo-300 font-semibold px-3 py-1.5 rounded-xl bg-indigo-950/50 border border-indigo-900/50">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enfoque Prioritario</span>
                </div>
              </div>

              {/* Main Goal Highlight Box (Una cosa concreta por este año) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/40 border border-indigo-800/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span>Meta Principal para este Año:</span>
                </div>
                <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {currentStage.focus}
                </p>
              </div>

              {/* Key Results / Expected Achievements */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Acciones y Resultados Clave Programados:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.keyResults.map((kr, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{kr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 relative z-10">
          {/* Button: Anterior */}
          <button
            id="roadmap-prev-bottom-btn"
            onClick={handlePrev}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Año Anterior</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {roadmapItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentYearIndex(idx)}
                aria-label={`Ir al Año ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentYearIndex === idx
                    ? 'w-8 h-2.5 bg-indigo-500 shadow-md shadow-indigo-500/50'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Button: Siguiente */}
          <button
            id="roadmap-next-bottom-btn"
            onClick={handleNext}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-xs sm:text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>
              {currentYearIndex === totalYears - 1 ? 'Volver al Año 1' : 'Siguiente Año'}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      )}

      {/* Grid: Pregunta 9 (Sueño no comenzado) & Pregunta 10 (Obstáculos) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Pregunta 9: El Sueño Pendiente */}
        <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-amber-950/20 to-slate-900/90 border border-amber-900/40 space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/60">
                Pregunta 9 · La Meta Latente
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Rocket className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                El Sueño que Aún no he Comenzado a Perseguir
              </h3>
              <h4 className="text-base font-semibold text-amber-300 mt-2">
                {data.unstartedDream.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {data.unstartedDream.description}
              </p>
            </div>

            {/* Why not yet */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                ¿Por qué aún no ha iniciado?
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {data.unstartedDream.whyNotYet}
              </p>
            </div>
          </div>

          {/* First Step */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-1">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Primer Paso Concreto (Este Semestre):
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">
              {data.unstartedDream.firstStep}
            </p>
          </div>
        </div>

        {/* Pregunta 10: Obstáculos y Mitigaciones */}
        <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                Pregunta 10 · Obstáculos y Cómo Superarlos
              </span>
              <h3 className="text-2xl font-bold text-white">
                ¿Qué Obstáculos Podrían Impedir mis Metas?
              </h3>
            </div>
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm">
            En la formulación de proyectos aprendemos que anticipar los riesgos es fundamental. Para cada dificultad identificada, he establecido una respuesta práctica:
          </p>

          <div className="space-y-3">
            {data.obstacles.map((obs, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200">
                      {obs.obstacle}
                    </h4>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                    obs.severity === 'alta'
                      ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                      : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                  }`}>
                    Riesgo {obs.severity}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg">
                  <span className="text-emerald-400 font-bold shrink-0">Plan de Mitigación:</span>
                  <span>{obs.mitigation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
