import React, { useState } from 'react';
import { 
  Terminal, 
  Code2, 
  BrainCircuit, 
  CheckCircle, 
  AlertCircle, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Award,
  BookOpen
} from 'lucide-react';

const TEORIA = [
  { titulo: 'El Modelo EPS', contenido: '1. ENTRADA (Leer).\n2. PROCESO (Asignaciones).\n3. SALIDA (Escribir).' },
  { titulo: 'Variables y Tipos', contenido: 'Tipos: Entero, Real, Caracter, Logico. Sin espacios en el nombre.' },
  { titulo: 'Jerarquía de Operaciones', contenido: '1. Paréntesis\n2. Potencias\n3. *, /, MOD, TRUNC\n4. +, -' },
  { titulo: 'Estructuras Repetitivas (Ciclos)', contenido: '- MIENTRAS: Evalúa antes de entrar.\n- REPETIR... HASTA QUE: Evalúa al final (ejecuta al menos una vez).\n- PARA: Ciclo con contador definido.' }
];

const QUIZZES = [
  {
    enunciado: 'Para calcular el salario con horas y tarifa, ¿cuáles son las VARIABLES DE ENTRADA?',
    opciones: [
      { texto: 'salario_total, horas_trabajadas', esCorrecta: false, explicacion: 'El salario es la salida, no la entrada.' },
      { texto: 'horas_trabajadas, valor_por_hora', esCorrecta: true, explicacion: 'Correcto. Son los datos crudos necesarios.' }
    ]
  },
  {
    enunciado: '¿Qué operador usas en PSeInt para obtener el residuo de una división?',
    opciones: [
      { texto: 'TRUNC(x)', esCorrecta: false, explicacion: 'TRUNC da la parte entera, no el residuo.' },
      { texto: 'MOD (o %)', esCorrecta: true, explicacion: 'Exacto, MOD devuelve lo que sobra de una división exacta.' }
    ]
  },
  {
    enunciado: 'Si pides una contraseña y debe ingresarse al menos una vez antes de verificarla, ¿qué ciclo usas?',
    opciones: [
      { texto: 'Ciclo PARA', esCorrecta: false, explicacion: 'No, porque no sabes cuántos intentos tomará exactamente.' },
      { texto: 'Ciclo REPETIR... HASTA QUE', esCorrecta: true, explicacion: 'Correcto, obliga a ejecutar la lectura primero y luego evalúa.' }
    ]
  }
];

const PRACTICAS = [
  {
    modulo: 'Práctica 2: Secuencias',
    problemas: [
      {
        titulo: 'Problema de la Gasolinera',
        enunciado: 'Surtidores en galones, precio en litros. 1 galón = 3.785 litros. Precio = B/. 3.50/litro.',
        eps: { entradas: ['galones_surtidos'], proceso: ['litros <- galones_surtidos * 3.785', 'cobro_total <- litros * 3.50'], salidas: ['cobro_total'] },
        codigo: 'Algoritmo Cobro_Gasolinera\n  Definir galones_surtidos, litros, cobro_total Como Real;\n  Leer galones_surtidos;\n  litros <- galones_surtidos * 3.785;\n  cobro_total <- litros * 3.50;\n  Escribir "Monto a cobrar: B/. ", cobro_total;\nFinAlgoritmo'
      }
    ]
  },
  {
    modulo: 'Práctica 3: Condicionales',
    problemas: [
      {
        titulo: 'Matrícula Postgrado UTP',
        enunciado: 'Egresados UTP ("E") pagan B/. 30 por curso. Otros B/. 50. Todos pagan B/. 30 fijos.',
        eps: { entradas: ['tipo_egresado', 'n_cursos'], proceso: ['Si tipo="E" costo <- n_cursos * 30 Sino costo <- n_cursos * 50', 'pago <- costo + 30'], salidas: ['pago_total'] },
        codigo: 'Algoritmo Matricula_UTP\n  Definir tipo_egresado Como Caracter;\n  Definir n_cursos Como Entero;\n  Definir costo, pago_total Como Real;\n  Leer tipo_egresado, n_cursos;\n  Si tipo_egresado = "E" Entonces\n    costo <- n_cursos * 30;\n  Sino\n    costo <- n_cursos * 50;\n  FinSi\n  pago_total <- costo + 30;\n  Escribir "Total: ", pago_total;\nFinAlgoritmo'
      }
    ]
  },
  {
    modulo: 'Práctica 4: Ciclos (Repetitivas)',
    problemas: [
      {
        titulo: 'Suma de 10 Números (Ciclo MIENTRAS)',
        enunciado: 'Leer 10 números enteros. Determinar y mostrar la suma total acumulada.',
        eps: { entradas: ['num'], proceso: ['Mientras C <= 10 Leer num', 'suma <- suma + num', 'C <- C + 1'], salidas: ['suma'] },
        codigo: 'Algoritmo Suma_Numeros\n  Definir num, suma, C Como Entero;\n  suma <- 0;\n  C <- 1;\n  Mientras C <= 10 Hacer\n    Leer num;\n    suma <- suma + num;\n    C <- C + 1;\n  FinMientras\n  Escribir "Suma total: ", suma;\nFinAlgoritmo'
      }
    ]
  }
];

function TeoriaView() {
  return (
    <div className="animate-in fade-in zoom-in duration-500">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center">
        <BookOpen className="mr-3 text-cyan-400" /> Teoría EPS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEORIA.map((item, index) => (
          <div key={index} className="bg-slate-900 border border-slate-700/50 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-black/40 group">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">{item.titulo}</h3>
            <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm bg-slate-950 p-4 rounded-lg border border-slate-800">
              {item.contenido}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizzesView() {
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
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-400 mb-6 flex items-center">
        <BrainCircuit className="mr-3" /> Quizzes Lógicos
      </h2>
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl shadow-black/50">
        <div className="mb-6 flex justify-between items-center text-slate-400">
          <span className="text-sm font-mono bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
            Pregunta {currentQuiz + 1} de {QUIZZES.length}
          </span>
          <Award className="text-amber-500/50" />
        </div>
        <h3 className="text-xl text-white mb-8 leading-relaxed font-medium">
          {quiz.enunciado}
        </h3>
        <div className="space-y-4">
          {quiz.opciones.map((opcion, index) => {
            const isSelected = selectedOption === index;
            const statusColor = showExplanation
              ? opcion.esCorrecta
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                : isSelected
                ? 'border-rose-500 bg-rose-500/10 text-rose-300'
                : 'border-slate-700 bg-slate-800/50 text-slate-400'
              : 'border-slate-700 bg-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 cursor-pointer';

             return (
              <div
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`p-5 rounded-xl border transition-all duration-300 flex items-center ${statusColor}`}
              >
                <div className="flex-1 text-lg">{opcion.texto}</div>
                {showExplanation && opcion.esCorrecta && <CheckCircle className="text-emerald-500 ml-4" />}
                {showExplanation && isSelected && !opcion.esCorrecta && <AlertCircle className="text-rose-500 ml-4" />}
              </div>
             )
          })}
        </div>

        {showExplanation && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-2 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className={`font-bold mb-2 flex items-center ${selectedOption !== null && quiz.opciones[selectedOption].esCorrecta ? 'text-emerald-400' : 'text-rose-400'}`}>
              {selectedOption !== null && quiz.opciones[selectedOption].esCorrecta ? (
                <><CheckCircle className="w-5 h-5 mr-2" /> ¡Correcto!</>
              ) : (
                <><AlertCircle className="w-5 h-5 mr-2" /> Incorrecto</>
              )}
            </h4>
            <p className="text-slate-300 text-lg">{selectedOption !== null && quiz.opciones[selectedOption].explicacion}</p>
            <button
              onClick={nextQuiz}
              className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors w-full sm:w-auto"
            >
              Siguiente Pregunta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PracticasView() {
  const [openProblem, setOpenProblem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenProblem(openProblem === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold text-emerald-400 mb-8 flex items-center">
        <Code2 className="mr-3" /> Prácticas Resueltas
      </h2>
      <div className="space-y-10">
        {PRACTICAS.map((modulo, modIdx) => (
          <div key={modIdx} className="mb-8">
            <h3 className="text-2xl font-semibold border-b border-slate-800 pb-3 mb-6 text-slate-200">
              {modulo.modulo}
            </h3>
            <div className="space-y-6">
              {modulo.problemas.map((prob, probIdx) => {
                const id = `${modIdx}-${probIdx}`;
                const isOpen = openProblem === id;
                return (
                  <div key={probIdx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-black/30">
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-cyan-400 mb-3">{prob.titulo}</h4>
                      <p className="text-slate-400 bg-slate-950 p-4 rounded-lg mb-6 border border-slate-800/50">
                        {prob.enunciado}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-slate-950/50 rounded-xl p-4 border border-emerald-500/20">
                          <h5 className="text-emerald-400 font-mono text-sm font-bold mb-3 border-b border-emerald-500/20 pb-2">ENTRADA</h5>
                          <ul className="list-disc list-inside text-slate-300 space-y-1 font-mono text-sm">
                            {prob.eps.entradas.map((e, i) => <li key={i}>{e}</li>)}
                          </ul>
                        </div>
                        <div className="bg-slate-950/50 rounded-xl p-4 border border-amber-500/20">
                          <h5 className="text-amber-400 font-mono text-sm font-bold mb-3 border-b border-amber-500/20 pb-2">PROCESO</h5>
                          <ul className="list-none text-slate-300 space-y-2 font-mono text-sm">
                            {prob.eps.proceso.map((p, i) => <li key={i} className="bg-amber-500/10 px-2 py-1 rounded text-amber-200">{p}</li>)}
                          </ul>
                        </div>
                        <div className="bg-slate-950/50 rounded-xl p-4 border border-rose-500/20">
                          <h5 className="text-rose-400 font-mono text-sm font-bold mb-3 border-b border-rose-500/20 pb-2">SALIDA</h5>
                          <ul className="list-disc list-inside text-slate-300 space-y-1 font-mono text-sm">
                            {prob.eps.salidas.map((s, i) => <li key={i}>{s}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleAccordion(id)}
                      className="w-full flex justify-between items-center px-6 py-4 bg-slate-950/80 hover:bg-slate-800 text-slate-300 font-medium transition-colors border-t border-slate-800 focus:outline-none"
                    >
                      <span className="flex items-center text-cyan-400"><Terminal className="w-5 h-5 mr-2" /> Ver Código PSeInt</span>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    
                    {isOpen && (
                      <div className="p-6 bg-black border-t border-slate-800 animate-in slide-in-from-top-2">
                        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
                          <code>{prob.codigo}</code>
                        </pre>
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

export default function App() {
  const [activeView, setActiveView] = useState('teoria');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (view) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'teoria', label: 'Teoría EPS', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'quizzes', label: 'Quizzes Lógicos', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'practicas', label: 'Prácticas Resueltas', icon: <Code2 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center text-xl font-black tracking-tight text-white">
          <Terminal className="text-cyan-500 mr-2" />
          VECTA<span className="text-cyan-500">.</span>
        </div>
        <button className="text-slate-300 hover:text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-slate-950/95 backdrop-blur-xl z-40 p-4 border-t border-slate-800 animate-in fade-in">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`flex items-center p-4 rounded-xl transition-all w-full text-left focus:outline-none ${activeView === item.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
              >
                {item.icon}
                <span className="ml-4 font-medium text-lg">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 flex-col bg-slate-900/50 border-r border-slate-800 sticky top-0 h-screen overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center text-3xl font-black tracking-tighter text-white mb-2">
            <Terminal className="text-cyan-500 mr-3 w-8 h-8" />
            VECTA<span className="text-cyan-500">.</span>
          </div>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-11">Plataforma de Lógica UTP</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-4 px-4">Módulos</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all focus:outline-none text-left ${activeView === item.id ? 'bg-gradient-to-r from-cyan-500/20 to-transparent text-cyan-400 border-l-2 border-cyan-500' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              {item.icon}
              <span className="ml-3 font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800/50 mt-auto">
          <div className="flex items-center space-x-3 text-slate-500 hover:text-slate-300 transition-colors cursor-help">
            <BrainCircuit className="w-5 h-5 text-emerald-500/70" />
            <div className="text-sm">
              <p className="font-medium text-slate-400">Modo Aprendizaje</p>
              <p className="text-xs">v1.2.0-beta</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/30 via-slate-950 to-slate-950">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxwYXRoIGQ9Ik0wIDBINnYyNEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPgoJPHBhdGggZD0iTTAgMEgyNHY2SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+Cjwvc3ZnPg==')] opacity-20 pointer-events-none mix-blend-screen" />
        
        <div className="p-6 md:p-12 relative z-10 max-w-6xl mx-auto min-h-screen">
          {activeView === 'teoria' && <TeoriaView />}
          {activeView === 'quizzes' && <QuizzesView />}
          {activeView === 'practicas' && <PracticasView />}
        </div>
      </main>

    </div>
  );
}