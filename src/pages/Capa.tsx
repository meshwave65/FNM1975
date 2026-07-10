import { assets } from "../assets";

interface CapaProps {
  onAbrir: () => void;
}

export default function Capa({
  onAbrir,
}: CapaProps) {

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        p-12
      "
    >

      <div
        className="
          border-8
          border-[#c5a46e]
          p-8
          bg-white/5
          backdrop-blur
        "
      >

        <img
          src={assets.logoFNM}
          alt="Logo FNM"
          className="
            w-1/2
            h-1/2
            object-contain
            mx-auto
            mb-12
          "
        />

        <h1
          className="
            text-6xl
            font-bold
            tracking-wider
            mb-4
          "
        >
          FACULDADE NACIONAL DE MEDICINA
        </h1>

        <p className="text-3xl opacity-80">
          Turma de 1975
        </p>

      </div>


      <button
        onClick={onAbrir}
        className="
          mt-20
          border
          border-[#c5a46e]
          text-[#c5a46e]
          px-16
          py-6
          text-2xl
          tracking-widest
          hover:bg-[#c5a46e]
          hover:text-[#0a1f0a]
          transition
        "
      >
        ABRIR O LIVRO
      </button>

    </div>
  );
}
