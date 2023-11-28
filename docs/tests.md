## 7. Testes da solução

# Testes de Inspeção

Abaixo, estão listados os testes de inspeção realizados na solução.

## CT01 - Criação de Usuário

- **Processo associado:** Nenhum
- **Procedimento:**
  1. Acessar a página inicial da plataforma
  2. Acessar a página de Cadastro por meio do botão "Crie sua conta" (`/register`)
  3. Preencher os campos de nome, CPF, e-mail e senha com dados válidos
  4. Clicar no botão "Cadastrar"
- **Dados de entrada:**
  - **Nome:** Luca Ferrari Azalim
  - **CPF:** 10885213637
  - **E-mail:** lucaazalim@gmail.com
  - **Senha:** 123456
- **Resultado esperado:** O usuário é cadastrado e redirecionado ao dashboard.
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct01.png)

---

## CT02 - Autenticação de Usuário

- **Processo associado:** Nenhum
- **Procedimento:**
  1. Acessar a página inicial da plataforma
  2. Acessar a página de Login por meio do botão "Acessar" (`/login`)
  3. Preencher os campos de e-mail e senha com dados válidos de um usuário cadastrado
  4. Clicar no botão "Entrar"
- **Dados de entrada:**
  - **E-mail:** lucaazalim@gmail.com
  - **Senha:** 123456
- **Resultado esperado:** O usuário é autenticado e redirecionado ao dashboard.
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct02.png)

---

## CT03 - Título do Caso de Teste

- **Processo associado:** 1
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct03.png)

---

## CT04 - Título do Caso de Teste

- **Processo associado:** 1
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct04.png)

---

## CT05 - Publicação de Imóvel

- **Processo associado:** 2
- **Procedimento:**
  1. Acessar a página "Seus Imóveis" (`/dashboard/property/owner/`)
  2. Acessar a página de publicação de imóvel por meio do botão "Anunciar Imóvel no Morada"
  3. Preencher todos os campos com dados válidos
  4. Clicar no botão "Publicar imóvel"
- **Dados de entrada:**
  - **Tipo:** Apartamento
  - **CEP:** 30130155
  - **Rua:** Rua Pernambuco
  - **Número:** 873
  - **Complemento:** 701
  - **Bairro:** Savassi
  - **Cidade:** Belo Horizonte
  - **Estado:** Minas Gerais
  - **Descrição:** Lorem ipsum...
  - **Quartos:** 3
  - **Banheiros:** 2
  - **Vagas de Garagem:** 2
  - **Aceita Pet:** Sim
  - **Mobiliado:** Não
  - **Valor do Aluguel:** 3000
  - **Valor do Condomínio:** 600
  - **Valor do IPTU:** 400
  - **Foto:** [Imagem](https://i.imgur.com/JSovnWd.jpg)
- **Resultado esperado:** O imóvel deve ser criado e o usuário deve ser redirecionado para a página "Seus Imóveis".
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct05.png)

---

## CT06 - Publicação de Imóvel com CEP inválido

- **Processo associado:** 2
- **Procedimento:**
  1. Acessar a página "Seus Imóveis" (`/dashboard/property/owner/`)
  2. Acessar a página de publicação de imóvel por meio do botão "Anunciar Imóvel no Morada"
  3. Preencher o campo CEP com um CEP inválido (inexistente no banco de dados dos Correios)
  4. Aguardar até 3 segundos para que o CEP seja validado
- **Dados de entrada:**
  - **CEP:** 1234567
  - **Foto:** [Imagem](https://i.imgur.com/JSovnWd.jpg)
- **Resultado esperado:** Deve ser exibido o erro "O CEP informado é inválido.".
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct06.png)

---

## CT07 - Título do Caso de Teste

- **Processo associado:** 3
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct07.png)

---

## CT08 - Título do Caso de Teste

- **Processo associado:** 3
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct08.png)

---

## CT09 - Título do Caso de Teste

- **Processo associado:** 4
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct09.png)

---

## CT10 - Título do Caso de Teste

- **Processo associado:** 4
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct10.png)

---

## CT11 - Título do Caso de Teste

- **Processo associado:** 5
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct11.png)

---

## CT12 - Título do Caso de Teste

- **Processo associado:** 5
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct12.png)

---

## CT13 - Título do Caso de Teste

- **Processo associado:** 6
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct13.png)

---

## CT14 - Título do Caso de Teste

- **Processo associado:** 6
- **Procedimento:**
  1. Lorem ipsum
  2. Lorem ipsum
  3. Lorem ipsum
- **Dados de entrada:**
  - **Campo:** Valor
  - **Outro campo:** Outro valor
- **Resultado esperado:**
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct14.png)
