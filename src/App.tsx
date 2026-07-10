import { useState } from 'react'

import Capa from './pages/Capa'
import Menu from './pages/Menu'
import Historia from './pages/Historia'
import Paraninfo from './pages/Paraninfo'
import Patrono from './pages/Patrono'
import Juramento from './pages/Juramento'
import Formandos from './pages/Formandos'
import Homenagens from './pages/Homenagens'
import HomenagensAdmin from './pages/HomenagensAdmin'
import Falecidos from './pages/Falecidos'

import BottomNav from './layout/BottomNav'


export type Pagina =
  | 'capa'
  | 'menu'
  | 'historia'
  | 'paraninfo'
  | 'patrono'
  | 'juramento'
  | 'formandos'
  | 'homenagens'
  | 'homenagens_admin'
  | 'falecidos'


function App() {

  const [paginaAtual, setPaginaAtual] =
    useState<Pagina>('capa')


  const navegar = (pagina: Pagina) => {
    setPaginaAtual(pagina)
  }


  const voltar = () => {
    setPaginaAtual('menu')
  }


  function renderPagina() {

    switch (paginaAtual) {

      case 'capa':
        return (
          <Capa
            onAbrir={() => navegar('menu')}
          />
        )


      case 'menu':
        return (
          <Menu
            navegar={navegar}
          />
        )


      case 'historia':
        return (
          <Historia
            voltar={voltar}
          />
        )


      case 'paraninfo':
        return (
          <Paraninfo
            voltar={voltar}
          />
        )


      case 'patrono':
        return (
          <Patrono
            voltar={voltar}
          />
        )


      case 'juramento':
        return (
          <Juramento
            voltar={voltar}
          />
        )


      case 'formandos':
        return (
          <Formandos
            voltar={voltar}
          />
        )


      case 'homenagens':
        return (
          <Homenagens
            voltar={voltar}
          />
        )


      case 'homenagens_admin':
        return (
          <HomenagensAdmin
            voltar={voltar}
          />
        )


      case 'falecidos':
        return (
          <Falecidos
            voltar={voltar}
          />
        )


      default:
        return null
    }
  }


  const mostrarBottomNav =
    [
      'formandos',
      'homenagens',
      'homenagens_admin',
      'falecidos'
    ].includes(paginaAtual)



  return (

    <div
      className="
        min-h-screen
        bg-[#0a1f0a]
        text-[#e8d5b8]
        font-serif
      "
    >

      <main
        className={
          mostrarBottomNav
            ? 'pb-32'
            : ''
        }
      >

        {renderPagina()}

      </main>


      {
        mostrarBottomNav &&
        (
          <BottomNav
            voltar={voltar}
          />
        )
      }

    </div>

  )
}


export default App

