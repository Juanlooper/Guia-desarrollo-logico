import React, { useState } from 'react';
import { GitBranch } from 'lucide-react';

export default function ConditionalToggle() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-4 shadow-lg shadow-black/20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <GitBranch className="mr-2 text-rose-400" /> SI / SINO (Condicionales)
        </h3>
        
        <button 
          onClick={() => setIsTrue(!isTrue)}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${isTrue ? 'bg-emerald-500' : 'bg-slate-600'}`}
        >
          <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isTrue ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
      </div>

      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 font-mono text-sm leading-loose">
        <span className="text-emerald-400">Si</span> <span className="text-amber-300">condicion_es_verdadera</span> <span className="text-emerald-400">Entonces</span>
        <div className={`mx-4 p-3 rounded-lg border-l-2 transition-all duration-300 ${isTrue ? 'bg-emerald-500/10 border-emerald-500 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]' : 'border-slate-800 opacity-50'}`}>
          <span className="text-emerald-300">// Este bloque se ejecuta solo si el interruptor está activo</span><br />
          <span className="text-cyan-400">Escribir</span> <span className="text-amber-200">"¡La condición se cumplió!"</span>;
        </div>
        <span className="text-emerald-400">Sino</span>
        <div className={`mx-4 p-3 rounded-lg border-l-2 transition-all duration-300 ${!isTrue ? 'bg-rose-500/10 border-rose-500 shadow-[inset_0_0_20px_rgba(244,63,94,0.1)]' : 'border-slate-800 opacity-50'}`}>
          <span className="text-rose-300">// Este bloque se ejecuta solo si el interruptor NO está activo</span><br />
          <span className="text-cyan-400">Escribir</span> <span className="text-amber-200">"La condición fue Falsa."</span>;
        </div>
        <span className="text-emerald-400">FinSi</span>
      </div>
    </div>
  );
}
