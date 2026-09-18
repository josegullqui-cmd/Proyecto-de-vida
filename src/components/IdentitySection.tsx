import React, { useState } from 'react';
import { 
  UserCheck, 
  Zap, 
  TrendingUp, 
  Target, 
  Shield, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { ProjectLifeData, StrengthItem } from '../types';

interface IdentitySectionProps {
  data: ProjectLifeData;
}

export const IdentitySection: React.FC<IdentitySectionProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  const filteredStrengths = selectedCategory === 'todas'
    ? data.strengths
    : data.strengths.filter((s) => s.category === selectedCategory);

  const getCategoryBadge = (category: StrengthItem['category']) => {
    switch (category) {
      case 'analitica':
        return { label: 'Analítica', color: 'bg-blue-950/60 text-blue-300 border-blue-800/60' };
      case 'tecnologica':
        return { label: 'Tecnológica / IA', color: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60' };
      case 'artistica':
        return { label: 'Creativa & Artística', color: 'bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-800/60' };
      case 'humana':
        return { label: 'Ética & Valores', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60' };
      case 'estrategica':
        return { label: 'Estratégica', color: 'bg-purple-950/60 text-purple-300 border-purple-800/60' };
    }
  };

  return (
    <section id="identidad" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-semibold text-cyan-400">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Fase 1: Diagnóstico Personal y Formativo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Identidad, Fortalezas y Propósito
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          El primer paso para aprender a formular un proyecto es conocernos a nosotros mismos, identificando nuestras capacidades y el valor que queremos aportar.
        </p>
      </div>

      {/* Pregunta 1: ¿Quién soy realmente? (Full width Hero Card) */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Pregunta 1 · El Núcleo de Identidad</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              ¿Quién soy realmente?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {data.whoAmI.core}
            </p>
            
            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.whoAmI.identityPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Quotation Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 backdrop-blur-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                Principio Rector Politécnico
              </span>
              <p className="text-slate-200 text-base sm:text-lg italic font-medium leading-snug">
                {data.whoAmI.philosophy}
              </p>
            </div>
            <div className="pt-4 border-t border-cyan-900/40 flex items-center justify-between text-xs text-slate-400">
              <span>{data.profile.career}</span>
              <span className="text-cyan-400 font-semibold">{data.profile.university.split(' ')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pregunta 2: Principales Fortalezas */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Pregunta 2 · Mis Activos Estratégicos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Principales Fortalezas
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Competencias analíticas, creativas, tecnológicas y humanas que impulsan mi visión.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'analitica', label: 'Analítica' },
              { id: 'tecnologica', label: 'IA & Tecnología' },
              { id: 'artistica', label: 'Creatividad & Arte' },
              { id: 'humana', label: 'Ética & Valores' },
              { id: 'estrategica', label: 'Estrategia' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStrengths.map((strength) => {
            const badge = getCategoryBadge(strength.category);
            return (
              <div
                key={strength.id}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all space-y-3 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${badge.color}`}>
                      {badge.label}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Capacidad formativa</span>
                  <span className="text-cyan-400/80 font-medium">Habilidad para mi futuro</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Pregunta 3 (Aspectos a Mejorar) & Pregunta 4 (Tipo de Persona) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Pregunta 3: Aspectos a mejorar */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Pregunta 3 · Madurez y Autocrítica</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Aspectos que Necesito Mejorar
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Identificar la debilidad es el 50% de la solución. Cada brecha tiene su plan de acción:
            </p>
          </div>

          <div className="space-y-3">
            {data.growthAreas.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-200">
                    {item.aspect}
                  </h4>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                    item.status === 'prioridad'
                      ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                      : 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                  }`}>
                    {item.status === 'prioridad' ? 'Prioridad Inmediata' : 'En Optimización'}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold shrink-0">Estrategia:</span>
                  <span>{item.strategy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pregunta 4: ¿Qué tipo de persona quiero llegar a ser? */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/30 to-slate-900/90 border border-blue-900/40 space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Pregunta 4 · La Visión del Ser</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ¿Qué tipo de persona quiero llegar a ser?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                El éxito profesional carece de valor si no está sustentado por una calidad moral intachable.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-sm sm:text-base text-slate-200 leading-relaxed">
              {data.targetPersona.statement}
            </div>

            {/* Core virtues list */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                Pilares de Carácter Deseados:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.targetPersona.virtues.map((v, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold">Legado buscado:</span> {data.targetPersona.impactVision}
          </div>
        </div>
      </div>
    </section>
  );
};
