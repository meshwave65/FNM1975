# BOOKFNM1975 - SYSTEM CONTRACT

## Versão 0.1 (Fundação do Projeto)

### 1. Propósito

O BookFNM1975 nasceu com um único objetivo:

Digitalizar o álbum físico da Turma de Medicina de 1975 da Faculdade Nacional de Medicina, permitindo que seus integrantes e familiares possam consultar o conteúdo em qualquer dispositivo de forma simples, intuitiva e permanente.

Este projeto não pretende reinventar o álbum original.

Pretende preservá-lo.

---

### 2. Escopo da Versão 1.0

A versão inicial contempla exclusivamente:

* Capa do álbum.
* Índice.
* Apresentação / Histórico.
* Paraninfo.
* Patrono.
* Juramento.
* Homenagens Especiais.
* Homenagens Administrativas.
* Formandos.
* Falecidos.
* Busca textual por nome.
* Retorno permanente ao Índice.

Nenhuma funcionalidade social faz parte do escopo desta versão.

---

### 3. Princípios

#### 3.1 O álbum físico é a referência.

A experiência digital deve respeitar a organização do álbum impresso sempre que possível.

O objetivo não é criar uma rede social.

O objetivo é permitir que o álbum continue existindo em formato digital.

---

#### 3.2 Simplicidade absoluta.

Toda funcionalidade deverá ser questionada:

"Ela torna o álbum mais simples de utilizar?"

Caso a resposta seja negativa, ela deverá ser descartada ou adiada.

---

#### 3.3 Usuário sem experiência tecnológica.

O sistema deve ser utilizável por qualquer pessoa, independentemente de sua experiência com computadores, celulares ou PWAs.

Nenhuma operação deve exigir explicação prévia.

---

#### 3.4 Navegação permanente.

O usuário nunca deverá sentir-se "preso" em uma página.

Sempre deverá existir um caminho evidente para retornar ao Índice.

---

#### 3.5 Busca imediata.

Sempre que houver listagem de pessoas, o usuário poderá localizar um colega simplesmente digitando parte do nome.

Não existirão botões de pesquisar, filtros complexos ou etapas adicionais.

---

### 4. Arquitetura da Interface

A interface será organizada em três regiões independentes:

* Header
* Content
* Bottom

Somente o Content realiza rolagem.

Header e Bottom permanecem estáveis durante toda a navegação.

---

### 5. Backend

Toda lógica de processamento deverá permanecer no backend.

O frontend apenas renderiza os dados.

Exemplo:

A identificação de membros falecidos e a geração automática da fotografia com fita de luto pertencem ao backend.

O frontend apenas exibe a imagem correspondente.

---

### 6. Evolução do Projeto

Durante o desenvolvimento poderão surgir novas ideias.

Essas ideias deverão ser registradas neste CONTRACT, porém não deverão alterar o escopo da versão em desenvolvimento.

O objetivo principal é concluir o MVP antes de iniciar qualquer expansão funcional.

---

### 7. Critério de Sucesso

O projeto será considerado concluído quando um integrante da Turma de Medicina de 1975 conseguir navegar pelo álbum, localizar um colega e retornar ao Índice sem necessidade de qualquer explicação.

Esse é o principal indicador de sucesso da versão 1.0.

