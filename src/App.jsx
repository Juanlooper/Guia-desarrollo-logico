import React, { useState } from 'react';
import { Terminal, BrainCircuit, Code2, BookOpen, Menu, X } from 'lucide-react';
import TheoryView from './components/Views/TheoryView';
import QuizzesView from './components/Views/QuizzesView';
import PracticesView from './components/Views/PracticesView';

export default function App() {
  const [activeView, setActiveView] = useState('teoria');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (view) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'teoria', label: 'Teoría EPS (Interactiva)', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'quizzes', label: 'Quizzes Lógicos', icon: <BrainCircuit className="w-5 h-5" /> },
    { id: 'practicas', label: 'Prácticas Resueltas', icon: <Code2 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 flex flex-col md:flex-row shadow-2xl">
      
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center text-xl font-black tracking-tight text-white">
          <img src="/logo-vecta.png" alt="Vecto Logo" className="w-6 h-6 mr-2 object-contain" />
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
                className={`flex items-center p-4 rounded-xl transition-all w-full text-left focus:outline-none ${
                  activeView === item.id 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
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
          <div className="flex items-center text-3xl font-black tracking-tighter text-white mb-2 group cursor-default">
            <img src="/logo-vecta.png" alt="Vecta Logo" className="w-8 h-8 mr-3 object-contain group-hover:scale-110 transition-transform" />
            VECTA<span className="text-cyan-500 animate-pulse">.</span>
          </div>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-11">Plataforma Lógica</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-4 px-4">Módulos de Lógica</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl transition-all focus:outline-none text-left shadow-sm ${
                activeView === item.id 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-transparent text-cyan-400 border-l-2 border-cyan-500' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              {item.icon}
              <span className="ml-4 font-medium tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800/50 mt-auto">
          <div className="flex items-center space-x-3 text-slate-500 transition-colors">
            <img src="/logo-vecta.png" alt="Vecta Logo" className="w-6 h-6 rounded-md shadow-sm" />
            <div className="text-sm">
              <p className="font-medium text-slate-400">Hecho por Juan Rodriguez</p>
              <p className="text-xs text-cyan-500/70">Miembro de VECTA</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxwYXRoIGQ9Ik0wIDBINnYyNEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPgoJPHBhdGggZD0iTTAgMEgyNHY2SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+Cjwvc3ZnPg==')] opacity-20 pointer-events-none mix-blend-screen" />
        
        <div className="p-6 md:p-12 relative z-10 max-w-5xl mx-auto min-h-screen">
          {activeView === 'teoria' && <TheoryView />}
          {activeView === 'quizzes' && <QuizzesView />}
          {activeView === 'practicas' && <PracticesView />}
        </div>
      </main>

    </div>
  );
}