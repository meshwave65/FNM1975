import { useState } from 'react'
import logoFNM from './assets/logo_fnm.jpeg'
import cunhadoFoto from './assets/lsgo.png'
import fotoFaculdade from './assets/foto_antiga_fnm_1910.jpeg' // adicione esta foto

function App() {
  const [paginaAtual, setPaginaAtual] = useState('capa')

  return (
    <div className="min-h-screen bg-[#0a1f0a] text-[#e8d5b8] font-serif">
      {/* Capa */}
      {paginaAtual === 'capa' && (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-12">
          <div className="border-8 border-[#c5a46e] p-8 bg-white/5 backdrop-blur">
            <img src={logoFNM} alt="Logo FNM" className="w-72 h-72 object-contain mx-auto mb-12" />
            <h1 className="text-6xl font-bold tracking-wider mb-4">FACULDADE NACIONAL DE MEDICINA</h1>
            <p className="text-3xl opacity-80">Turma de 1975</p>
          </div>
          <button 
            onClick={() => setPaginaAtual('menu')}
            className="mt-20 border border-[#c5a46e] text-[#c5a46e] px-16 py-4 text-xl tracking-widest hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition"
          >
            ABRIR O LIVRO
          </button>
        </div>
      )}

      {/* Menu */}
      {paginaAtual === 'menu' && (
        <div className="min-h-screen p-12 flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-16 tracking-widest">ÍNDICE</h2>
            <div className="space-y-8 text-2xl">
              <button onClick={() => setPaginaAtual('historia')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">APRESENTAÇÃO / HISTÓRICO</button>
              <button onClick={() => setPaginaAtual('paraninfo')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">PARANINFO</button>
              <button onClick={() => setPaginaAtual('patrono')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">PATRONO</button>
              <button onClick={() => setPaginaAtual('homenagens')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">HOMENAGENS ESPECIAIS</button>
              <button onClick={() => setPaginaAtual('alunos')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">ALUNOS DA TURMA</button>
            </div>
          </div>
        </div>
      )}

      {/* História da Faculdade */}
      {paginaAtual === 'historia' && (
        <div className="p-12 max-w-4xl mx-auto">
          <img src={fotoFaculdade} alt="Faculdade Nacional de Medicina" className="w-full rounded-3xl mb-12" />
          <h2 className="text-5xl font-bold mb-8">APRESENTAÇÃO</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p>A Faculdade Nacional de Medicina corresponde hoje à Faculdade de Medicina da UFRJ. Fundada em 1808, foi renomeada em 1937 e, desde 1973, funciona no campus da Cidade Universitária, na Ilha do Fundão. Atualmente, o curso integral exige dedicação de 6 anos (12 períodos).</p>
            <p>Historicamente, o edifício da instituição na Praia Vermelha foi um importante marco arquitetônico e palco de movimentos estudantis até sua demolição nos anos 70.</p>
          </div>
        </div>
      )}

      {/* Alunos */}
      {paginaAtual === 'alunos' && (
        <div className="p-12">
          <h2 className="text-5xl font-bold text-center mb-16">ALUNOS DA TURMA 1975</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-[#c5a46e]/30 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-80 h-80 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">
                  <img src={cunhadoFoto} alt="Dr. Luiz Sergio" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-4">Dr. Luiz Sergio Gomes de Oliveira</h3>
                  <p className="text-xl leading-relaxed opacity-90
