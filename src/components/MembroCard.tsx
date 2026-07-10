import { formatDate } from "../utils/formatDate";

interface Membro {
  id: string;
  nome: string;
  foto_principal?: string | null;
  data_nascimento?: string | null;
  data_falecimento?: string | null;
}

interface MembroCardProps {
  membro: Membro;
}

export default function MembroCard({
  membro,
}: MembroCardProps) {
  return (
    <div className="bg-white/5 border border-[#c5a46e]/30 rounded-3xl p-8">

      <div className="flex flex-col items-center">

        <img
          src={
            membro.foto_principal
              ? `/assets/${membro.foto_principal}`
              : "/assets/semfoto.png"
          }
          alt={membro.nome}
          className="
            w-full
            max-w-[600px]
            h-auto
            rounded-2xl
            border-4
            border-[#c5a46e]
            mb-8
          "
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/semfoto.png";
          }}
        />

        <div className="w-full text-center">

          <h3 className="text-3xl font-bold mb-3">
            {membro.nome}
          </h3>

          <p className="text-xl opacity-90">
            {formatDate(membro.data_nascimento)}
            {membro.data_falecimento ? " (+)" : " ★"}
          </p>

        </div>

      </div>

    </div>
  );
}
