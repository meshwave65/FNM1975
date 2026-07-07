import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import logoFNM from './assets/logo_fnm.png'
import fotoFaculdade from './assets/foto_antiga_fnm_1910.jpeg'
import juramentoImg from './assets/juramento.jpeg'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('capa')
  const [formandos, setFormandos] = useState<any[]>([])
  const [homenagensEspeciais, setHomenagensEspeciais] = useState<any[]>([])

  const voltar = () => setPaginaAtual('menu')

  useEffect(() => {
    if (paginaAtual === 'formandos') {
      supabase.from('membros').select('*').eq('tipo', 'formando').order('nome').then(({ data }) => setFormandos(data || []))
    }
    if (paginaAtual === 'homenagens') {
      supabase.from('membros').select('*').eq('tipo', 'homenagem_especial').order('nome').then(({ data }) => setHomenagensEspeciais(data || []))
    }
  }, [paginaAtual])

  return (
    <div className="min-h-screen bg-[#0a1f0a] text-[#e8d5b8] font-serif pb-20">
      {/* Capa */}
      {paginaAtual === 'capa' && (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-12">
          <div className="border-8 border-[#c5a46e] p-8 bg-white/5 backdrop-blur">
            <img src={logoFNM} alt="Logo FNM" className="w-1/2 h-1/2 max-w-[300px] object-contain mx-auto mb-12" />
            <h1 className="text-6xl font-bold tracking-wider mb-4">FACULDADE NACIONAL DE MEDICINA</h1>
            <p className="text-3xl opacity-80">Turma de 1975</p>
          </div>
          <button onClick={() => setPaginaAtual('menu')} className="mt-20 border border-[#c5a46e] text-[#c5a46e] px-16 py-4 text-xl tracking-widest hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition">
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
              <button onClick={() => setPaginaAtual('formandos')} className="block w-full text-left py-6 border-b border-[#c5a46e]/30 hover:text-white transition">FORMANDOS</button>
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
            <p>A Faculdade Nacional de Medicina corresponde hoje à Faculdade de Medicina da UFRJ. Fundada em 1808, foi renomeada em 1937 e, desde 1973, funciona no campus da Cidade Universitária, na Ilha do Fundão. Atualmente, o curso integral exige dedicação de 6 anos (12 períodos).</p>
            <p>Historicamente, o edifício da instituição na Praia Vermelha foi um importante marco arquitetônico e palco de movimentos estudantis até sua demolição nos anos 70. Para detalhes acadêmicos, programas de pós-graduação e formas de ingresso, consulte o portal da Faculdade de Medicina da UFRJ.</p>
          </div>
          <button onClick={voltar} className="mt-12 border border-[#c5a46e] text-[#c5a46e] px-8 py-3 rounded-full hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition">VOLTAR AO ÍNDICE</button>
        </div>
      )}

      {/* Paraninfo */}
      {paginaAtual === 'paraninfo' && (
        <div className="p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-80 h-80 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">
              <img src="./src/assets/paraninfo_cor.png" alt="Paraninfo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="uppercase tracking-widest text-[#c5a46e] text-sm mb-2">PARANINFO</div>
              <h2 className="text-5xl font-bold mb-4">Prof. Dr. RODOLFO PAULO ROCCO</h2>
              <p className="text-xl opacity-90">29/12/19** ★</p>
              <div className="mt-8 prose prose-invert">
                <p>Breve biografia do Paraninfo aqui...</p>
              </div>
            </div>
          </div>
          <button onClick={voltar} className="mt-12 border border-[#c5a46e] text-[#c5a46e] px-8 py-3 rounded-full hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition">VOLTAR AO ÍNDICE</button>
        </div>
      )}

      {/* Patrono */}
      {paginaAtual === 'patrono' && (
        <div className="p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-80 h-80 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">
              <img src="./src/assets/patrono.png" alt="Patrono" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="uppercase tracking-widest text-[#c5a46e] text-sm mb-2">PATRONO</div>
              <h2 className="text-5xl font-bold mb-4">Prof. Dr. César B. Pernetta</h2>
              <p className="text-xl opacity-90">Data ★</p>
              <div className="mt-8 prose prose-invert">
                <p>Breve biografia do Patrono aqui...</p>
              </div>
            </div>
          </div>
          <button onClick={voltar} className="mt-12 border border-[#c5a46e] text-[#c5a46e] px-8 py-3 rounded-full hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition">VOLTAR AO ÍNDICE</button>
        </div>
      )}

      {/* Homenagens Especiais */}
      {paginaAtual === 'homenagens' && (
        <div className="p-12 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">HOMENAGENS ESPECIAIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homenagensEspeciais.map(membro => (
              <div key={membro.id} className="bg-white/5 border border-[#c5a46e]/30 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">
                    <img
                        src={`/assets/${membro.nome.toLowerCase().replace(/ /g, '.').replace(/[^a-z0-9.]/g, '')}.png`}
                        alt={membro.nome}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = './src/assets/semfoto.png';
                        }}
                        />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{membro.nome}</h3>
                    <p className="text-xl opacity-90">
                      {membro.data_nascimento} {membro.data_falecimento ? `(+)` : '★'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
          <button onClick={voltar} className="mt-12 border border-[#c5a46e] text-[#c5a46e] px-8 py-3 rounded-full hover:bg-[#c5a46e] hover:text-[#0a1f0a] transition">VOLTAR AO ÍNDICE</button>
        </div>
      )}

      {/* Formandos */}
      {paginaAtual === 'formandos' && (
        <div className="p-12 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">FORMANDOS DA TURMA 1975</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formandos.map(membro => (
              <div key={membro.id} className="bg-white/5 border border-[#c5a46e]/30 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">
                    <img
                        src={`./src/assets/${membro.nome.split(' ')[0].toLowerCase()}.${membro.id}.png`}
                        alt={membro.nome}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = './src/assets/semfoto.png';
                        }}
                     />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{membro.nome}</h3>
                    <p className="text-xl opacity-90">
                      {membro.data_nascimento} {membro.data_falecimento ? `(+)` : '★'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Barra fixa inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a1f0a] border-t border-[#c5a46e]/30 p-4 z-50">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={voltar} className="text-[#c5a46e] px-4 py-2">ÍNDICE</button>
        </div>
      </div>
    </div>
  )
}

export default App
