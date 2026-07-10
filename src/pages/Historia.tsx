import { assets } from "../assets";

export default function Historia() {

  return (

    <div className="p-12 max-w-4xl mx-auto pb-32">

      <img
        src={assets.fotoFaculdade}
        alt="Faculdade Nacional de Medicina"
        className="
          w-full
          rounded-3xl
          mb-12
          shadow-2xl
        "
      />

      <h2 className="text-5xl font-bold mb-8">
        APRESENTAÇÃO
      </h2>


      <div
        className="
          prose
          prose-invert
          max-w-none
          text-lg
          leading-relaxed
        "
      >

        <p>
          A Faculdade Nacional de Medicina corresponde hoje à Faculdade de Medicina da UFRJ.
          Fundada em 1808, foi renomeada em 1937 e, desde 1973, funciona no campus da Cidade Universitária,
          na Ilha do Fundão.
        </p>


        <p>
          Historicamente, o edifício da instituição na Praia Vermelha foi um importante marco arquitetônico
          e palco de movimentos estudantis até sua demolição nos anos 70.
        </p>

      </div>

    </div>

  );
}
