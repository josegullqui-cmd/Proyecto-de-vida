import React from 'react';
import { 
  ArrowDown, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  GraduationCap, 
  Calculator, 
  Compass, 
  UserCheck,
  Download,
  Share2
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface HeroSectionProps {
  data: ProjectLifeData;
  onOpenPresentation?: () => void;
  onOpenEditor?: () => void;
  onOpenExport: () => void;
  onOpenShareDocente?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  onOpenExport,
  onOpenShareDocente,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle Background Glows (Apple dark aesthetic) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full text-center space-y-8">
        {/* Top Badges with Institutional Logos */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-lg">
            <EspochLogo size="sm" className="w-5 h-5" />
            <span>{data.profile.university}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-200">
            <FadeContabilidadLogo size="sm" className="w-5 h-5" />
            <span>{data.profile.career} ({data.profile.semester})</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-medium text-indigo-300">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Importación de Tecnología, Domótica & IA</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            {data.profile.subject} · Actividad Individual
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            ¿Quién soy y <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              hacia dónde voy?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            <span className="italic text-slate-200">
              “Antes de formular un proyecto de inversión en el mercado, es indispensable aprender a formular y auditar también nuestro propio proyecto de vida”.
            </span>
          </p>
        </div>

        {/* Student & Professor Credential Capsule */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-5 text-left shadow-2xl">
          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {data.profile.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              {data.profile.career} · {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-start bg-slate-950/40 px-4 py-2.5 rounded-xl border border-slate-800/60">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Docente de la Cátedra</span>
              <span className="text-slate-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                {data.profile.professorName || 'Ingeniero Hitalo Veloz'}
              </span>
            </div>
            <div className="text-right md:text-left border-l border-slate-800 pl-5">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Asignatura</span>
              <span className="text-cyan-300 font-medium text-xs">Formulación y Evaluación</span>
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          {onOpenShareDocente && (
            <button
              id="hero-share-docente-btn"
              onClick={onOpenShareDocente}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-200 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/70 shadow-xl shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5"
            >
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>Entregar al Ingeniero (Link / PPTX / PDF)</span>
            </button>
          )}

          <button
            id="hero-explore-scroll-btn"
            onClick={() => scrollTo('identidad')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/25 border border-indigo-400/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-cyan-300" />
            <span>Explorar Diagnóstico (13 Preguntas)</span>
          </button>

          <button
            id="hero-export-slides-btn"
            onClick={onOpenExport}
            className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Descargar Diapositivas (.pptx)</span>
          </button>
        </div>

        {/* Feature Grid / Key Architecture stats */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div 
            onClick={() => scrollTo('identidad')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-cyan-400 font-medium mb-1">
              <span>Eje I</span>
              <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              Identidad & Fortalezas
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Autoconocimiento, ética profesional y áreas de mejora continua.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('dimensiones')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-blue-400 font-medium mb-1">
              <span>Eje II</span>
              <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
              Las 3 Dimensiones
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Aspiración personal, rigor profesional en auditoría y meta económica.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('vision5')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-1">
              <span>Eje III</span>
              <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
              Horizonte 5 Años
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Hoja de ruta temporal, mitigación de riesgos y el sueño pendiente.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('compromiso')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-emerald-400 font-medium mb-1">
              <span>Eje IV & V</span>
              <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Compromiso Semestre
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Declaración solemne, acción inmediata y pacto de excelencia académica.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-4 flex justify-center">
          <button 
            onClick={() => scrollTo('identidad')}
            className="p-2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
            aria-label="Desplazarse hacia abajo"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
