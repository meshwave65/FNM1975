import { useState } from "react";
import { useMembros } from "../hooks/useMembros";
import SearchBar from "../components/UI/SearchBar";
import MembroCard from "../components/MembroCard";


interface FormandosProps {
  voltar: () => void;
}


export default function Formandos({
  voltar,
}: FormandosProps) {


  const [busca, setBusca] = useState("");


  const {
    membros,
    carregando
  } = useMembros("formando");


  const lista = membros.filter((membro) =>
    membro.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
  );


  return (

    <>

      <div
        className="
          pb-32
          p-12
          max-w-5xl
          mx-auto
        "
      >


        <h2
          className="
            text-5xl
            font-bold
            text-center
            mb-12
          "
        >
          FORMANDOS DA TURMA 1975
        </h2>



        {carregando ? (

          <p
            className="
              text-center
              mt-12
            "
          >
            Carregando...
          </p>


        ) : (


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              mt-10
            "
          >

            {lista.map((membro) => (

              <MembroCard
                key={membro.id}
                membro={membro}
              />

            ))}

          </div>

        )}


      </div>



      <SearchBar
        busca={busca}
        setBusca={setBusca}
      />


    </>

  );

}
