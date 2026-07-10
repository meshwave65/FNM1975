import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Membro } from "../types/membro";

export function useMembros(
  tipo?: Membro["tipo"],
  somenteFalecidos = false
) {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      setErro(null);

      try {
        let query = supabase
          .from("membros")
          .select("*")
          .order("nome");

        if (tipo) {
          query = query.eq("tipo", tipo);
        }

        if (somenteFalecidos) {
          query = query.eq("vivo", false);
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setMembros((data ?? []) as Membro[]);
      } catch (err: any) {
        console.error("Erro ao carregar membros:", err);

        setErro(err.message ?? "Erro ao carregar membros");
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, [tipo, somenteFalecidos]);

  return {
    membros,
    carregando,
    erro,
  };
}
