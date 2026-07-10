import { useNavigate } from "react-router-dom";


interface ListBottomBarProps {
  busca: string;
  setBusca: (valor:string)=>void;
}


export default function ListBottomBar({
  busca,
  setBusca
}: ListBottomBarProps){

const navigate = useNavigate();


return (

<div
className="
fixed
bottom-0
left-0
right-0
bg-[#0a1f0a]
border-t
border-[#c5a46e]/30
p-4
z-50
"
>

<div
className="
max-w-5xl
mx-auto
flex
gap-3
"
>


<input
value={busca}
onChange={(e)=>setBusca(e.target.value)}
placeholder="Buscar..."
className="
flex-1
bg-white/10
border
border-[#c5a46e]/30
rounded-full
px-6
py-4
text-xl
"
/>


<button
onClick={()=>setBusca("")}
className="
px-6
py-4
border
border-[#c5a46e]/30
rounded-full
"
>
Limpar
</button>


<button
onClick={()=>navigate("/")}
className="
px-6
py-4
border
border-[#c5a46e]/30
rounded-full
"
>
Índice
</button>


</div>

</div>

)

}
