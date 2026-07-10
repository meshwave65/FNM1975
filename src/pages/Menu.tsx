import type { Pagina } from '../App'


interface MenuProps {
  navegar: (pagina: Pagina) => void
}


export default function Menu({
  navegar
}: MenuProps) {


  return (

    <div
      className="
        min-h-screen
        p-12
        flex
        items-center
      "
    >

      <div
        className="
          max-w-2xl
          mx-auto
          text-center
          w-full
        "
      >

        <h2
          className="
            text-5xl
            font-bold
            mb-16
            tracking-widest
          "
        >
          ÍNDICE
        </h2>


        <div
          className="
            space-y-8
            text-2xl
          "
        >

          <button
            onClick={() => navegar('historia')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            APRESENTAÇÃO / HISTÓRICO
          </button>


          <button
            onClick={() => navegar('paraninfo')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            PARANINFO
          </button>


          <button
            onClick={() => navegar('patrono')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            PATRONO
          </button>


          <button
            onClick={() => navegar('homenagens')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            HOMENAGENS ESPECIAIS
          </button>


          <button
            onClick={() => navegar('homenagens_admin')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            HOMENAGENS ADMINISTRATIVAS
          </button>


          <button
            onClick={() => navegar('juramento')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            JURAMENTO
          </button>


          <button
            onClick={() => navegar('formandos')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            FORMANDOS DA TURMA 1975
          </button>


          <button
            onClick={() => navegar('falecidos')}
            className="
              block
              w-full
              text-left
              py-6
              border-b
              border-[#c5a46e]/30
              hover:text-white
              transition
            "
          >
            FALECIDOS
          </button>


        </div>

      </div>

    </div>

  )
}

