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

## CT03 - Criação de Verificação de Usuário

- **Processo associado:** 1
- **Procedimento:**
  1. Acessar a página "Verificação" (`/dashboard/verification/`)
  2. Acessar a página de criação de uma verificação de usuário por meio do botão "Realizar verificação"
  3. Preencher os campos com uma imagem da frente e do verso do seu documento de identidade.
  4. Clicar no botão "Enviar"
- **Dados de entrada:**
  - **Imagem RG frente:** [Imagem](images/rgFrenteExemplo.jpg)
  - **Imagem RG verso:** [Imagem](images/rgVersoExemplo.png)
- **Resultado esperado:** O processo de verificação de usuário deve ser criado e o usuário deve ser redirecionado para a página "Verificação".
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct03.png)

---

## CT04 - Processo de Verificação de Usuário Negado

- **Processo associado:** 1
- **Procedimento:**
  1. Acessar a página "Verificação" (`/dashboard/verification/`)
  2. Visualizar os processos de verificação na página
  3. - Se a verificação for bem-sucedida, o resultado exibido deve ser "Aprovado".
     - Se a verificação estiver em andamento, o resultado deve ser "Pendente", indicando que ainda não houve uma decisão.
     - Se a verificação for mal-sucedida, o resultado deve ser "Reprovado", indicando que o processo não foi concluído com sucesso.
- **Resultado esperado:** Aprovado
- **Resultado obtido:** Reprovado
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
- **Resultado obtido:** Erro
- **Evidência:** [Imagem](images/ct06.png)

---

## CT07 - Agendamento de Visita com Sucesso

- **Processo associado:** 3
- **Procedimento:**
  1. Acessar a página inicial
  2. Acessar um imóvel apertando o botão "Visualizar imóvel"
  3. Na página de um imóvel específico selecione o botão "Agendar visita"
  4. Escolha uma data e horário 
- **Dados de entrada:**
  - **Data e Horário:** 01/12/2023 às 10h00
- **Resultado esperado:** Deve aparecer um pop-up com a mensagem "Agendado com sucesso!" e o agendamento irá aparecer no calendário
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem 1](images/agendamento-pop-up-sucesso.png) e [Imagem 2](images/agendamento-calendario-sucesso.png)

---

## CT08 - Agendamento De Mais De Uma Visita Em Um Mesmo Imóvel Sem Sucesso 

- **Processo associado:** 3
- **Procedimento:**
  1. Acessar a página inicial
  2. Acessar um imóvel apertando o botão "Visualizar imóvel"
  3. Na página de um imóvel específico selecione o botão "Agendar visita"
  4. Escolha uma data e horário
  5. No calendário irá aparecer o seu agendamento
  6. Tente agendar mais um horário no calendário
- **Dados de entrada:** 
  - **Data e Horário:** 29/11/2023 às 11h00
- **Resultado esperado:** Deve aparecer um pop-up com a mensagem "Você já tem um agendamento nesta propriedade." e o agendamento não irá aparecer no calendário
- **Resultado obtido:** Sem sucesso
- **Evidência:** [Imagem 1](images/agendamento-pop-up-Sem-sucesso.png) e [Imagem 2](images/agendamento-calendario-Sem-sucesso.png)


---

## CT09 - Envio de oferta

- **Processo associado:** 4
- **Procedimento:**
 1. Acessar a tela inicial da plataforma.
  2. Clicar no botão "imóvel"
  3. Visualizar o imóvel e em seguida propor o valor de oferta.
  4. Clicar em "enviar". 
- **Dados de entrada:**
  - **Campo:** 4000,00
- **Resultado esperado:** Após o usuário clicar no botão "enviar", deverá aparecer um alert ao usuário informando que a oferta foi enviada.
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct09.png)

---

## CT10 - Campo vazio sem sucesso

- **Processo associado:** 4
- **Procedimento:**
1. Acessar a tela inicial da plataforma.
  2. Clicar no botão "imóvel"
  3. Visualizar o imóvel e em seguida propor o valor de oferta.
  4. Clicar em "enviar". 
- **Dados de entrada:**
  - **Campo:** Vazio.
- **Resultado esperado:** Após o usuário clicar no botão "enviar", deverá aparecer um alert pedindo ao usuário que preencha o campo de oferta.

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

## CT13 - Confirmar envio de rescisão 

- **Processo associado:** 6
- **Procedimento:**
  1. Acessar a página inicial da plataforma.
  2. Acessar a visualização de imóveis através do botão "Meus imóveis" na aba do proprietário.
  3. Visualizar o imóvel apto ao início do processo de rescisão.
  4. Clicar no botão de options ilustrado por "três pontinhos"
  5. Clicar na opção "Iniciar processo de rescisão"
  6. Preencher o formulário a fim de informar o motivo do pedido de rescisão.
- **Dados de entrada:**
  - **Campo:** Olá, desejo finalizar o contrato do imóvel pois vou me casar e estou em busca de um apartamento maior. Aguardo contato para finalizarmos o processo. 
- **Resultado esperado:** Após o usuário clicar no botão "Confirmar" aparecerá um alert indicando que o pedido foi enviado.
- **Resultado obtido:** Sucesso
- **Evidência:** [Imagem](images/ct13.png)

---

## CT14 - Formulário vazio sem sucesso 

- **Processo associado:** 6
- **Procedimento:**
1. Acessar a página inicial da plataforma.
  2. Acessar a visualização de imóveis através do botão "Meus imóveis" na aba do proprietário.
  3. Visualizar o imóvel apto ao início do processo de rescisão.
  4. Clicar no botão de options ilustrado por "três pontinhos"
  5. Clicar na opção "Iniciar processo de rescisão"
  6. Preencher o formulário a fim de informar o motivo do pedido de rescisão.
- **Dados de entrada:**
  - **Campo:** Vazio
- **Resultado esperado:** Após o usuário clicar no botão "Confirmar" aparecerá um alert indicando que é obrigatório o preenchimento do formulário. 
- **Resultado obtido:** Sem sucesso
- **Evidência:** [Imagem](images/ct14.png)
