import React, { useState } from 'react';
import { Code2, Terminal, ChevronUp, ChevronDown } from 'lucide-react';
import { PRACTICAS } from '../../data/db';
import FlowchartViewer from './FlowchartViewer';

export default function PracticesView() {
  const [openProblem, setOpenProblem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenProblem(openProblem === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-500 mt-4">
      <h2 className="text-3xl font-black text-emerald-400 mb-8 flex items-center tracking-tight">
        <Code2 className="mr-3" /> Prácticas Resueltas
      </h2>
      <div className="space-y-12">
        {PRACTICAS.map((modulo, modIdx) => (
          <div key={modIdx} className="mb-8">
            <h3 className="text-2xl font-bold border-b border-slate-800 pb-4 mb-8 text-slate-200">
              {modulo.modulo}
            </h3>
            <div className="space-y-8">
              {modulo.problemas.map((prob, probIdx) => {
                const id = `${modIdx}-${probIdx}`;
                const isOpen = openProblem === id;
                return (
                  <div key={probIdx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl shadow-black/40 transition-all hover:border-slate-700">
                    <div className="p-6 md:p-8">
                      <h4 className="text-xl font-bold text-cyan-400 mb-4 tracking-wide">{prob.titulo}</h4>
                      <p className="text-slate-300 bg-slate-950/50 p-5 rounded-xl mb-8 border border-slate-800/80 leading-relaxed">
                        {prob.enunciado}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2">
                        {/* ENTRADAS */}
                        <div className="bg-slate-950/50 rounded-xl p-5 border border-emerald-500/20 shadow-inner">
                          <h5 className="text-emerald-400 font-mono text-sm font-bold mb-4 border-b border-emerald-500/20 pb-2 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span> ENTRADAS
                          </h5>
                          <ul className="list-disc list-inside text-slate-300 space-y-2 font-mono text-sm">
                            {prob.eps.entradas.map((e, i) => <li key={i}>{e}</li>)}
                          </ul>
                        </div>
                        {/* PROCESOS */}
                        <div className="bg-slate-950/50 rounded-xl p-5 border border-amber-500/20 shadow-inner">
                          <h5 className="text-amber-400 font-mono text-sm font-bold mb-4 border-b border-amber-500/20 pb-2 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span> PROCESO
                          </h5>
                          <ul className="list-none text-slate-300 space-y-3 font-mono text-sm">
                            {prob.eps.proceso.map((p, i) => (
                              <li key={i} className="bg-amber-500/10 px-3 py-2 rounded border border-amber-500/10 text-amber-200">
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* SALIDAS */}
                        <div className="bg-slate-950/50 rounded-xl p-5 border border-cyan-500/20 shadow-inner">
                          <h5 className="text-cyan-400 font-mono text-sm font-bold mb-4 border-b border-cyan-500/20 pb-2 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span> SALIDA
                          </h5>
                          <ul className="list-disc list-inside text-slate-300 space-y-2 font-mono text-sm">
                            {prob.eps.salidas.map((s, i) => <li key={i}>{s}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex border-t border-slate-800 bg-slate-950/80">
                      <button
                        onClick={() => toggleAccordion(id + '-code')}
                        className={`flex-1 flex justify-center items-center px-6 md:px-8 py-5 hover:bg-slate-800 text-slate-300 font-medium transition-colors focus:outline-none border-r border-slate-800 ${openProblem === id + '-code' ? 'bg-slate-800' : ''}`}
                      >
                        <Terminal className="w-5 h-5 mr-3 text-cyan-400" /> Ver Código PSeInt
                      </button>
                      <button
                        onClick={() => toggleAccordion(id + '-flow')}
                        className={`flex-1 flex justify-center items-center px-6 md:px-8 py-5 hover:bg-slate-800 text-slate-300 font-medium transition-colors focus:outline-none ${openProblem === id + '-flow' ? 'bg-slate-800' : ''}`}
                      >
                        <span className="w-5 h-5 mr-3 text-amber-400 flex items-center justify-center border-2 border-amber-400 rounded-sm skew-x-[-15deg]"><div className="w-2 h-2 bg-amber-400 skew-x-[15deg]"></div></span> Ver Diagrama de Flujo
                      </button>
                    </div>
                    
                    {openProblem === id + '-code' && (
                      <div className="p-6 md:p-8 bg-black border-t border-slate-800 animate-in slide-in-from-top-4 duration-300">
                        <pre className="text-emerald-400 font-mono text-sm md:text-base overflow-x-auto leading-relaxed">
                          <code>{prob.codigo}</code>
                        </pre>
                      </div>
                    )}

                    {openProblem === id + '-flow' && (
                      <div className="p-6 md:p-8 bg-black border-t border-slate-800 animate-in slide-in-from-top-4 duration-300">
                         <FlowchartViewer eps={prob.eps} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
