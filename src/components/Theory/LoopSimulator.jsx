import React, { useState } from 'react';
import { RotateCw, Play, RotateCcw } from 'lucide-react';

export default function LoopSimulator() {
  const [activeTab, setActiveTab] = useState('MIENTRAS');
  const [contador, setContador] = useState(1);
  const [acumulador, setAcumulador] = useState(0);
  const maxIterations = 5;

  const handleNextStep = () => {
    if (activeTab === 'MIENTRAS' || activeTab === 'PARA') {
      if (contador <= maxIterations) {
        setAcumulador(prev => prev + (contador * 10)); 
        setContador(prev => prev + 1);
      }
    } else if (activeTab === 'REPETIR') {
      if (contador <= maxIterations) {
        // En repetir, simplemente aumentamos los intentos de contraseña.
        setContador(prev => prev + 1);
        if (contador === maxIterations) {
            setAcumulador(1); // 1 significa "Éxito" en este simulador
        }
      }
    }
  };

  const handleReset = () => {
    setContador(1);
    setAcumulador(0);
  };

  const isFinished = contador > maxIterations;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-4 shadow-lg shadow-black/20">
      <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <RotateCw className="mr-3 text-cyan-400" /> Simuladores de Ciclo
        </h3>
        {isFinished && (
          <span className="text-emerald-400 text-sm font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            ¡Ciclo Terminado!
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 bg-slate-950 p-1 rounded-lg border border-slate-800">
        {['MIENTRAS', 'REPETIR', 'PARA'].map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); handleReset(); }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${activeTab === tab ? 'bg-slate-800 text-cyan-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {tab}
            </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Código Dinámico por Tab */}
        <div className="flex-1 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-sm leading-loose">
          {activeTab === 'MIENTRAS' && (
            <>
                <span className="text-slate-500">// Evalúa ANTES de ejecutar</span><br/>
                <span className="text-cyan-400">Suma</span> <span className="text-slate-400">&lt;-</span> <span className="text-amber-400">0</span>;<br />
                <span className="text-cyan-400">C</span> <span className="text-slate-400">&lt;-</span> <span className="text-amber-400">1</span>;<br />
                <br />
                <span className="text-emerald-400">Mientras</span> <span className="text-amber-300">C {"<="} {maxIterations}</span> <span className="text-emerald-400">Hacer</span>
                <div className="mx-4 p-2 border-l border-slate-700 space-y-1">
                    <div className={`transition-colors ${!isFinished ? 'bg-cyan-500/10 text-cyan-200 indent-2 rounded' : 'text-slate-400'}`}>
                    Suma &lt;- Suma + (C * 10);
                    </div>
                    <div className={`transition-colors ${!isFinished ? 'bg-emerald-500/10 text-emerald-200 indent-2 rounded' : 'text-slate-400'}`}>
                    C &lt;- C + 1;
                    </div>
                </div>
                <span className="text-emerald-400">FinMientras</span>
            </>
          )}

          {activeTab === 'REPETIR' && (
             <>
                <span className="text-slate-500">// Ejecuta código al menos 1 vez, evalúa al FINAL</span><br/>
                <span className="text-cyan-400">Intentos</span> <span className="text-slate-400">&lt;-</span> <span className="text-amber-400">1</span>;<br />
                <br />
                <span className="text-emerald-400">Repetir</span>
                <div className="mx-4 p-2 border-l border-slate-700 space-y-1">
                    <div className={`transition-colors ${!isFinished ? 'bg-amber-500/10 text-amber-200 indent-2 rounded' : 'text-slate-400'}`}>
                    Escribir "Ingrese contraseña (1234):";
                    </div>
                    <div className={`transition-colors ${!isFinished ? 'bg-emerald-500/10 text-emerald-200 indent-2 rounded' : 'text-slate-400'}`}>
                    Leer pass; // Intento {contador}
                    </div>
                    <div className="text-slate-400 indent-2">
                    Intentos &lt;- Intentos + 1;
                    </div>
                </div>
                <span className="text-emerald-400">Hasta Que</span> <span className="text-amber-300">pass = "1234"</span>
             </>
          )}

          {activeTab === 'PARA' && (
             <>
                <span className="text-slate-500">// El ciclo maneja su propio contador interno</span><br/>
                <span className="text-cyan-400">P</span> <span className="text-slate-400">&lt;-</span> <span className="text-amber-400">0</span>; <span className="text-slate-500">// Producto</span><br />
                <br />
                <span className="text-emerald-400">Para</span> <span className="text-cyan-400">C</span> &lt;- <span className="text-amber-400">1</span> <span className="text-emerald-400">Hasta</span> <span className="text-amber-400">{maxIterations}</span> <span className="text-emerald-400">Hacer</span>
                <div className="mx-4 p-2 border-l border-slate-700 space-y-1">
                    <div className={`transition-colors ${!isFinished ? 'bg-cyan-500/10 text-cyan-200 indent-2 rounded' : 'text-slate-400'}`}>
                    P &lt;- 10 * C;
                    </div>
                    <div className={`transition-colors ${!isFinished ? 'bg-emerald-500/10 text-emerald-200 indent-2 rounded' : 'text-slate-400'}`}>
                    Escribir "10 * ", C, " = ", P;
                    </div>
                </div>
                <span className="text-emerald-400">FinPara</span>
             </>
          )}
        </div>

        {/* Variables de Memoria UI */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-slate-500 text-[10px] sm:text-xs font-bold mb-1 uppercase tracking-widest">
                  {activeTab === 'REPETIR' ? 'Intentos (C)' : 'Contador (C)'}
              </div>
              <div className="text-4xl font-black text-emerald-400">{contador > maxIterations ? (activeTab === 'REPETIR' ? maxIterations : contador) : contador}</div>
            </div>
            
            <div className={`bg-slate-950 border border-slate-800 rounded-lg p-4 text-center relative overflow-hidden group transition-colors ${activeTab === 'REPETIR' && acumulador === 1 ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : ''}`}>
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-slate-500 text-[10px] sm:text-xs font-bold mb-1 uppercase tracking-widest">
                  {activeTab === 'MIENTRAS' ? 'Acumulador (Suma)' : activeTab === 'PARA' ? 'Producto (P)' : 'Acceso'}
              </div>
              <div className="text-3xl font-black text-cyan-400">
                  {activeTab === 'REPETIR' ? (acumulador === 1 ? 'OK' : 'X') : acumulador}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleNextStep}
              disabled={isFinished}
              className={`flex-1 flex items-center justify-center p-3 rounded-lg font-bold transition-all ${
                isFinished 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' 
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              }`}
            >
              <Play className="w-4 h-4 mr-2" /> Iterar (Paso {contador <= maxIterations ? contador : maxIterations})
            </button>
            <button
              onClick={handleReset}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              title="Reiniciar Simulación"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
