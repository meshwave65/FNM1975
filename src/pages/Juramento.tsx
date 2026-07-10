import { assets } from "../assets";

export default function Juramento() {
  return (
    <div className="p-12 max-w-4xl mx-auto pb-32">

      <img
        src={assets.juramento}
        alt="Juramento"
        className="w-1/2 rounded-3xl mb-12 shadow-2xl"
      />

      <h2 className="text-5xl font-bold mb-8">
        JURAMENTO
      </h2>

      <div className="prose prose-invert max-w-none text-lg leading-relaxed">

        <p>
          <strong>PROMETO:</strong>
        </p>

        <ul className="list-none space-y-4">

          <li>
            — No exercício de minha profissão, cumprir todos os deveres a ela inerentes, com caridade e justiça.
          </li>

          <li>
            — Devotarei, com todo empenho, meus esforços, na aplicação das técnicas de tratamento, sempre atualizadas, para consecução do fim máximo — O bem-estar do paciente.
          </li>

          <li>
            — Tratarei a todos com equanimidade e elevado zelo, não distinguindo raça, credo religioso, político, valores temporais e espirituais.
          </li>

          <li>
            — Conservarei, de modo inviolável o ver e ouvir no trato com os pacientes.
          </li>

          <li>
            — Guardarei devido recato no exercício de minhas funções, máximo quando de aplicação de técnicas que importem em maior intimidade, jamais prevalecendo desses momentos para fins que desabonem a dignidade de minha profissão.
          </li>

          <li>
            — Usarei de complacência para com os que se manifestarem rebeldes e impetuosos.
          </li>

          <li>
            — Buscarei, por todos os meios a meu alcance, fortalecer o ânimo dos pacientes para que não sucumbam moralmente e se desagreguem da sociedade.
          </li>

          <li>
            <strong>Por fim:</strong>
          </li>

          <li>
            — Não me considerarei um profissional se faltar a quaisquer desses propósitos.
          </li>

        </ul>

      </div>

    </div>
  );
}
