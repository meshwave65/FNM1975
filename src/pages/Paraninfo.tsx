import { assets } from "../assets";

export default function Paraninfo() {

  return (

    <div className="p-12 max-w-4xl mx-auto pb-32">

      <img
        src={assets.Paraninfo}
        alt="Paraninfo"
        className="
          w-1/2
          h-1/2
          object-contain
          mx-auto
          mb-12
        "
      />


      <h2 className="text-5xl font-bold mb-8 text-center">
        PARANINFO
      </h2>


      <div className="text-lg leading-relaxed">

        <p>
          Prof. Dr. RODOLPHO PAULO ROCCO
        </p>

      </div>


    </div>

  );
}
