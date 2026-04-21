import React, { useState } from 'react';
import { Type, Hash, Quote, ToggleLeft, Code2 } from 'lucide-react';

export default function DataTypeInteractive() {
  const [activeType, setActiveType] = useState('Entero');

  const types = {
    Entero: {
      icon: <Hash className="w-5 h-5" />,
      desc: "Números sin decimales. Utilizado para contadores o cantidades exactas.",
      example: "Definir edad Como Entero;\nedad <- 25;",
      color: "border-cyan-500 text-cyan-400 bg-cyan-500/10"
    },
    Real: {
      icon: <Type className="w-5 h-5" />,
      desc: "Números con decimales. Utilizado para precios, promedios y divisiones.",
      example: "Definir pago_total Como Real;\npago_total <- 145.89;",
      color: "border-emerald-500 text-emerald-400 bg-emerald-500/10"
    },
    Caracter: {
      icon: <Quote className="w-5 h-5" />,
      desc: "Letras o cadenas de texto. Sus valores siempre van entre comillas dobles o simples.",
      example: "Definir nombre Como Caracter;\nnombre <- \"Juan Pérez\";",
      color: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    Logico: {
      icon: <ToggleLeft className="w-5 h-5" />,
      desc: "Solo acepta dos valores matemáticos boleanos: Verdadero o Falso.",
      example: "Definir es_egresado Como Logico;\nes_egresado <- Verdadero;",
      color: "border-rose-500 text-rose-400 bg-rose-500/10"
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-4 shadow-lg shadow-black/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Code2 className="mr-2 text-cyan-400" /> Tipos de Datos (Interactivo)
      </h3>
      <p className="text-slate-400 mb-6 text-sm">
        Haz clic en cada tipo de dato para ver cómo declararlo y usarlo en PSeInt.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(types).map(typeKey => (
          <button
            key={typeKey}
            onClick={() => setActiveType(typeKey)}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
              activeType === typeKey 
                ? types[typeKey].color 
                : 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <span className="mr-2">{types[typeKey].icon}</span>
            {typeKey}
          </button>
        ))}
      </div>

      <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <p className="text-slate-300 mb-4">{types[activeType].desc}</p>
        <pre className={`font-mono text-sm p-4 rounded bg-black/50 overflow-x-auto ${types[activeType].color.split(' ')[1]}`}>
          <code>{types[activeType].example}</code>
        </pre>
      </div>
    </div>
  );
}
