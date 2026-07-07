import { useState } from 'react'
import logoFNM from './assets/logo_fnm.jpeg'
import cunhadoFoto from './assets/lsgo.png'
import fotoFaculdade from './assets/foto_antiga_fnm_1910.jpeg'
import juramentoImg from './assets/juramento.jpeg' // adicione esta foto

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
              <button onClick={() => setPaginaAtual('juramento')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">JURAMENTO</button>
              <button onClick={() => setPaginaAtual('alunos')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">ALUNOS DA TURMA</button>
            </div>
          </div>
        </div>
      )}

      {/* História */}
      {paginaAtual === 'historia' && (
        <div className="p-12 max-w-4xl mx-auto">
          <img src={fotoFaculdade} alt="Faculdade Nacional de Medicina" className="w-full rounded-3xl mb-12 shadow-2xl" />
          <h2 className="text-5xl font-bold mb-8">APRESENTAÇÃO</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p>A Faculdade Nacional de Medicina corresponde hoje à Faculdade de Medicina da UFRJ. Fundada em 1808, foi renomeada em 1937 e, desde 1973, funciona no campus da Cidade Universitária, na Ilha do Fundão.</p>
            <p>Historicamente, o edifício da instituição na Praia Vermelha foi um importante marco arquitetônico e palco de movimentos estudantis até sua demolição nos anos 70.</p>
          </div>
        </div>
      )}

      {/* Juramento */}
      {paginaAtual === 'juramento' && (
        <div className="p-12 max-w-4xl mx-auto">
          <img src={juramentoImg} alt="Juramento" className="w-full rounded-3xl mb-12 shadow-2xl" />
          <h2 className="text-5xl font-bold mb-8">JURAMENTO</h2>
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p><strong>PROMETO:</strong></p>
            <ul className="list-none space-y-4">
              <li>— No exercício de minha profissão, cumprir todos os deveres a ela inerentes, com caridade e justiça.</li>
              <li>— Devotarei, com todo empenho, meus esforços, na aplicação das técnicas de tratamento, sempre atualizadas, para consecução do fim máximo — O bem-estar do paciente.</li>
              <li>— Tratarei a todos com equanimidade e elevado zelo, não distinguindo raça, credo religioso, político, valores temporais e espirituais.</li>
              <li>— Conservarei, de modo inviolável o vir e ouvir no trato com os pacientes.</li>
              <li>— Guardarei devido recato no exercício de minhas funções, máximo quando de aplicação de técnicas que importem em maior intimidade, jamais prevalecendo desses momentos para fins que desabonem a dignidade de minha profissão.</li>
              <li>— Usarei de complacência para com os que se manifestarem rebeldes e impetuosos.</li>
              <li>— Buscarei, por todos os meios a meu alcance, fortalecer o ânimo dos pacientes para que não sucumbam moralmente e se desagreguem da sociedade.</li>
              <li><strong>Por fim:</strong></li>
              <li>— Não me considerarei um profissional se faltar a quaisquer desses propósitos.</li>
            </ul>
          </div>
        </div>
      )}

      <footer className="text-center py-12 text-[#c5a46e]/60 text-sm">
        Turma Eterna • Faculdade Nacional de Medicina • 1975
      </footer>
    </div>
  )
}

export default App
