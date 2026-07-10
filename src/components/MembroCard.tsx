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

      <div className="flex flex-col md:flex-row gap-8 items-center">

        <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#c5a46e]">

          <img
            src={
              membro.foto_principal
                ? `/assets/${membro.foto_principal}`
                : "/assets/semfoto.png"
            }
            alt={membro.nome}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/semfoto.png";
            }}
          />

        </div>

        <div className="flex-1">

          <h3 className="text-3xl font-bold mb-3">
            {membro.nome}
          </h3>

          <p className="text-xl opacity-90">

            {formatDate(membro.data_nascimento)}

            {membro.data_falecimento
              ? " (+)"
              : " ★"}

          </p>

        </div>

      </div>

    </div>
  );
}
