```ts
export interface Membro {
  id: string

  nome: string

  tipo:
    | 'formando'
    | 'homenagem_especial'
    | 'homenagem_administrativa'

  foto_principal?: string | null

  data_nascimento?: string | null

  data_falecimento?: string | null

  vivo?: boolean | null

  created_at?: string
}
```

