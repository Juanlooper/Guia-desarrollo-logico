import React, { useState } from 'react';
import { BrainCircuit, Award, CheckCircle, AlertCircle } from 'lucide-react';
import { QUIZZES } from '../../data/db';

export default function QuizzesView() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const nextQuiz = () => {
    setCurrentQuiz((prev) => (prev + 1) % QUIZZES.length);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const quiz = QUIZZES[currentQuiz];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto mt-4">
      <h2 className="text-3xl font-bold text-amber-400 mb-6 flex items-center">
        <BrainCircuit className="mr-3" /> Quizzes Lógicos
      </h2>
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl shadow-black/50 relative overflow-hidden">
        {/* Decorative background visual */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

        <div className="mb-6 flex justify-between items-center text-slate-400 relative z-10">
          <span className="text-sm font-mono bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
            Pregunta {currentQuiz + 1} de {QUIZZES.length}
          </span>
          <Award className="text-amber-500/50" />
        </div>
        
        <h3 className="text-xl text-white mb-8 leading-relaxed font-medium relative z-10">
          {quiz.enunciado}
        </h3>
        
        <div className="space-y-4 relative z-10">
          {quiz.opciones.map((opcion, index) => {
            const isSelected = selectedOption === index;
            const statusColor = showExplanation
              ? opcion.esCorrecta
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                : isSelected
                ? 'border-rose-500 bg-rose-500/10 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.1)]'
                : 'border-slate-800 bg-slate-900/50 text-slate-500' // Dim the unselected/wrong ones
              : 'border-slate-700 bg-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 cursor-pointer hover:-translate-y-0.5';

             return (
              <div
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`p-5 rounded-xl border transition-all duration-300 flex items-center ${statusColor}`}
              >
                <div className="flex-1 text-lg">{opcion.texto}</div>
                {showExplanation && opcion.esCorrecta && <CheckCircle className="text-emerald-500 ml-4 w-6 h-6 flex-shrink-0" />}
                {showExplanation && isSelected && !opcion.esCorrecta && <AlertCircle className="text-rose-500 ml-4 w-6 h-6 flex-shrink-0" />}
              </div>
             )
          })}
        </div>

        {showExplanation && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 p-5 rounded-xl bg-slate-950 border border-slate-800 relative z-10">
            <h4 className={`font-bold mb-3 flex items-center text-lg ${quiz.opciones[selectedOption].esCorrecta ? 'text-emerald-400' : 'text-rose-400'}`}>
              {quiz.opciones[selectedOption].esCorrecta ? (
                <><CheckCircle className="w-5 h-5 mr-2" /> ¡Correcto!</>
              ) : (
                <><AlertCircle className="w-5 h-5 mr-2" /> Incorrecto</>
              )}
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed">{quiz.opciones[selectedOption].explicacion}</p>
            <button
              onClick={nextQuiz}
              className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center shadow-lg shadow-amber-500/20"
            >
              Siguiente Pregunta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
