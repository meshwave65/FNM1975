import { useState } from "react";

import { useMembros } from "../hooks/useMembros";

import SearchBar from "../components/UI/SearchBar";
import BottomNav from "../layout/BottomNav";
import MembroCard from "../components/MembroCard";


interface HomenagensProps {
  voltar: () => void;
}


export default function Homenagens({
  voltar,
}: HomenagensProps) {

  const [busca, setBusca] = useState("");

  const {
    membros,
    carregando
  } = useMembros("homenagem_especial");


  const lista = membros.filter((membro) =>
    membro.nome.toLowerCase().includes(busca.toLowerCase())
  );


  return (
    <>
      <div className="pb-32 p-12 max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          HOMENAGENS ESPECIAIS
        </h2>


        <SearchBar
          value={busca}
          onChange={setBusca}
        />


        {carregando ? (

          <p className="text-center mt-12">
            Carregando...
          </p>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

            {lista.map((membro) => (
              <MembroCard
                key={membro.id}
                membro={membro}
              />
            ))}

          </div>

        )}

      </div>


      <BottomNav
        voltar={voltar}
        mostrarLimpar
        onClear={() => setBusca("")}
      />

    </>
  );
}
