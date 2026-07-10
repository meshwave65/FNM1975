interface BottomNavProps {
  voltar: () => void
  onClear?: () => void
  mostrarLimpar?: boolean
}

export default function BottomNav({
  voltar,
  onClear,
  mostrarLimpar = false,
}: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a1f0a] border-t border-[#c5a46e]/30 p-4 z-50">

      <div className="max-w-4xl mx-auto flex justify-center gap-4">

        {mostrarLimpar && (
          <button
            onClick={onClear}
            className="
              px-6
              py-4
              text-xl
              border
              border-[#c5a46e]/30
              rounded-full
              hover:bg-white/10
              transition
            "
          >
            Limpar
          </button>
        )}

        <button
          onClick={voltar}
          className="
            px-8
            py-4
            text-xl
            border
            border-[#c5a46e]/30
            rounded-full
            hover:bg-white/10
            transition
          "
        >
          ÍNDICE
        </button>

      </div>

    </div>
  )
}
