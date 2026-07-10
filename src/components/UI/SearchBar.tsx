interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


export default function SearchBar({
  value,
  onChange
}: SearchBarProps) {


  return (

    <div
      className="
        flex
        gap-4
        items-center
      "
    >

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
          placeholder:text-[#c5a46e]/50
          focus:outline-none
        "
      />


      <button
        onClick={() => onChange("")}
        className="
          px-6
          py-4
          border
          border-[#c5a46e]/30
          rounded-full
          text-xl
          hover:bg-white/10
        "
      >
        Limpar
      </button>


    </div>

  )

}
