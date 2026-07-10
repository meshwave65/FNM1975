export interface Membro {
  id: string;

  nome: string;

  tipo:
    | "formando"
    | "paraninfo"
    | "patrono"
    | "homenagem";

  foto_principal?: string | null;

  mini_biografia?: string | null;

  data_nascimento?: string | null;

  data_falecimento?: string | null;

  vivo: boolean;

  destaque?: boolean;
}
