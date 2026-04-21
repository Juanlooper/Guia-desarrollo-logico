import React from 'react';
import { BookOpen } from 'lucide-react';
import { TEORIA_SECTIONS } from '../../data/db';
import DataTypeInteractive from '../Theory/DataTypeInteractive';
import ModTruncCalculator from '../Theory/ModTruncCalculator';
import ConditionalToggle from '../Theory/ConditionalToggle';
import LoopSimulator from '../Theory/LoopSimulator';

export default function TheoryView() {
  const renderInteractiveComponent = (componentName) => {
    switch (componentName) {
      case 'DataTypeInteractive':
        return <DataTypeInteractive />;
      case 'ModTruncCalculator':
        return <ModTruncCalculator />;
      case 'ConditionalToggle':
        return <ConditionalToggle />;
      case 'LoopSimulator':
        return <LoopSimulator />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <h2 className="text-3xl font-black tracking-tight text-white mb-8 flex items-center">
        <BookOpen className="mr-4 text-cyan-500" /> Teoría Interactiva
      </h2>
      
      <div className="space-y-12">
        {TEORIA_SECTIONS.map((section, index) => (
          <div key={section.id} className="relative">
            {/* Timeline connector visual line */}
            {index !== TEORIA_SECTIONS.length - 1 && (
              <div className="absolute left-8 top-16 bottom-[-3rem] w-px bg-slate-800 hidden md:block"></div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Section Number Badge */}
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-slate-900 border border-slate-800 items-center justify-center text-2xl font-black text-slate-600 shadow-inner z-10">
                {index + 1}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 tracking-wide">{section.titulo}</h3>
                
                <div className="prose prose-invert prose-slate max-w-none text-slate-300 mb-6">
                  {section.contenido.split('\n').map((line, i) => {
                    // Simple bold text parsing
                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={i} className="mb-2">
                        {parts.map((part, j) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j} className="text-slate-100">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  })}
                </div>

                {/* Render corresponding interactive module */}
                {section.interactivo && renderInteractiveComponent(section.interactivo)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
