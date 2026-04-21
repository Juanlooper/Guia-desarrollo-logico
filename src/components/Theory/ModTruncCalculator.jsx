import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ModTruncCalculator() {
  const [numA, setNumA] = useState(15);
  const [numB, setNumB] = useState(4);

  const truncRes = numB !== 0 ? Math.trunc(numA / numB) : 'Error';
  const modRes = numB !== 0 ? numA % numB : 'Error';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-4 shadow-lg shadow-black/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Calculator className="mr-2 text-amber-400" /> Calculadora TRUNC y MOD
      </h3>
      <p className="text-slate-400 mb-6 text-sm">
        Ingresa dos números para ver cómo se comportan el truncamiento y el residuo. 
        En PSeInt: <code>TRUNC(A / B)</code> y <code>A MOD B</code>.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wide">
              Dividendo (Número A)
            </label>
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-bold mb-2 uppercase tracking-wide">
              Divisor (Número B)
            </label>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-center space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full translate-x-10 -translate-y-10 pointer-events-none"></div>
          
          <div>
            <div className="text-slate-500 text-xs font-mono mb-1">TRUNC({numA} / {numB})</div>
            <div className="flex justify-between items-end border-b border-slate-800 pb-2">
              <span className="text-slate-300 font-medium">Cociente Entero:</span>
              <span className="text-2xl font-bold text-cyan-400">{truncRes}</span>
            </div>
          </div>
          
          <div>
            <div className="text-slate-500 text-xs font-mono mb-1">{numA} MOD {numB}</div>
            <div className="flex justify-between items-end border-b border-slate-800 pb-2">
              <span className="text-slate-300 font-medium">Residuo:</span>
              <span className="text-2xl font-bold text-amber-400">{modRes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
