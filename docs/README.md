# Morada

- Guilherme Leroy Teixeira Capanema, gleroydev@gmail.com
- João Pedro Queiroz Rocha, queirozrochajoaopedro2004@gmail.com
- Kimberly Liz Spencer Lourenço, kimberlylizsl@gmail.com
- Luca Ferrari Azalim, lucaazalim@gmail.com
- Wanessa Dias Costa, wanessadiascw@gmail.com

---

Professores:

- Eveline Alonso Veloso
- Hugo Bastos de Paula
- Juliana Amaral Baroni de Carvalho

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final, 
mostrar algum resultado relevante do trabalho (até 10 linhas)._

---


## 1. Introdução

Morada é a plataforma definitiva para locação e anúncio de imóveis. Simplificamos o processo de aluguel, unificando anúncios e aprimorando a experiência tanto para locatários quanto para proprietários. Além da centralização de anúncios, integramos processos e documentações, oferecendo benefícios que enriquecem a jornada no setor imobiliário.

### 1.1 Contextualização

No cenário atual, em meio à crescente inflação global, os salários perderam poder de compra, enquanto as taxas de juros atingiram níveis recordes. Diante do custo elevado para adquirir uma casa devido ao aumento frenético das taxas de juros, a busca por moradias para aluguel tem se intensificado, o que, por sua vez, impulsiona os preços dos aluguéis. Esse cenário é ainda mais evidente conforme noticiado pelo [ G1 em 2023.](https://g1.globo.com/mundo/noticia/2023/06/03/o-que-explica-disparada-de-alugueis-nas-maiores-cidades-da-america-latina.ghtml)

### 1.2 Problema

O processo tradicional de busca, seleção e locação de imóveis apresenta uma série de barreiras. Os locatários são obrigados a percorrer vários sites e agências, consumindo tempo e esforço consideráveis. Já os proprietários enfrentam dificuldades em promover seus imóveis de forma eficaz e lidar com as etapas burocráticas e documentais complexas.

### 1.3 Objetivo geral

O objetivo do Morada é centralizar anúncios de aluguel, simplificando o processo para locatários e proprietários, e para concretizar essa visão, buscamos proporcionar uma experiência totalmente integrada desde a busca até a assinatura do contrato, tornando todo o processo mais ágil. Isso será alcançado por meio de uma busca avançada que permite filtrar opções por localização, tamanho e preço, além da integração direta com serviços de pagamento, simplificando aluguéis e depósitos, e complementado por um suporte ao cliente disponível 24/7, garantindo assistência contínua para uma experiência de aluguel fluida e sem interrupções.


#### 1.3.1 Objetivos específicos

* Realizar um levantamento minucioso dos processos envolvidos na busca, seleção e locação de imóveis, identificando pontos de dificuldade e oportunidades de aprimoramento.
* Identificar as necessidades específicas dos locatários, compreendendo seus critérios de escolha, preferências de localização e requisitos essenciais, a fim de apresentar o imóvel ideal para atender a todas essas demandas de maneira precisa
* Coletar feedback dos proprietários para entender os desafios enfrentados na promoção de seus imóveis, bem como para identificar as documentações e processos necessários.
* Desenvolver um sistema de interface que permita a inserção e busca de informações por meio de campos claros e objetivos, proporcionando facilidade de uso e uma experiência intuitiva para o usuário.
* Estabelecer uma estrutura robusta de gerenciamento de documentos, permitindo o compartilhamento seguro e eficaz de informações entre as partes envolvidas, agilizando a locação.
* Utilizar os insights e feedbacks para otimizar continuamente a plataforma, adaptando-a às necessidades em evolução dos clientes e às mudanças no mercado imobiliário.


### 1.4 Justificativas

A criação da Morada tem como base a necessidade de centralizar anúncios, simplificar procedimentos e eliminar as buscas caóticas por moradias. Com a Morada, você economizará tempo, evitará erros e desfrutará de uma experiência de aluguel tranquila e agradável. A plataforma oferece recursos inovadores, como avaliações e comentários de locatários anteriores, e funcionalidades que transformam a maneira como as pessoas encontram e alugam imóveis, incluindo a integração com serviços de pagamento para agilizar aluguéis e depósitos, além da praticidade da assinatura digital de contratos e documentações.

## 2. Participantes do processo
### Usuário
  - Perfil: Jovens adultos e adultos que buscam flexibilidade em termos de moradia.
  - Objetivo: Encontrar um conjunto de acomodações que se adequem às suas necessidades individuais. 
  - Necessidades: Buscam uma plataforma abrangente para encontrar acomodações.

### Locatário
  - Perfil: Pessoas acima de 18 anos, especialmente jovens adultos e adultos.
  - Objetivo: Encontrar imóveis que atendam às suas diversas preferências e necessidades habitacionais.
  - Necessidades: Obter informações precisas sobre imóveis de maneira simples e prática e encontrar propriedades ideais aos seus critérios.

### Proprietário de imóveis:
  - Perfil: Indivíduos com propriedades disponíveis para aluguel.
  - Objetivo: Anunciar suas propriedades e obter retorno financeiro sobre elas.
  - Necessidades: Buscam inquilinos confiáveis e desejam anunciar seus imóveis de forma facilitada e eficiente a fim de alcançar um público amplo e atrair potenciais inquilinos interessados em suas propriedades



## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

No contexto do mercado de aluguel residencial, proprietários e locatários em potencial frequentemente se deparam com uma gama de desafios que tornam a busca e a locação de imóveis uma experiência cansativa e demorada. Isso inclui a necessidade de explorar diversos canais em busca de propriedades disponíveis, a dificuldade em anunciar imóveis de maneira eficaz e a complexidade burocrática envolvida no processo de locação.

Atualmente, os locatários em busca de moradia têm que se envolver em uma busca por imóveis utilizando uma série de fontes, incluindo os inúmeros sites imobiliários e aplicativos. A multiplicidade e descentralização da informação torna o processo exaustivo, exigindo coleta e comparação meticulosa de dados.

Por outro lado, os proprietários de imóveis precisam recorrer a múltiplos métodos para anunciar suas propriedades a fim de garantir o alcance de um amplo público e de conquistar potenciais locatários. Os locadores (proprietários de imóveis) utilizam agências imobiliárias, realizam publicações em sites especializados e até recorrem às redes sociais. Essa variedade de meios pode acarretar dificuldades na promoção de seus imóveis de modo eficaz, além de exigir investimento significativo de tempo e de recursos.


### 3.2. Descrição geral da proposta
 
A proposta do Morada consiste em simplificar e agilizar o processo de aluguel de imóveis, através da eliminação de burocracias impostas aos inquilinos e proprietários, como a necessidade de fiador e de assinatura em cartório, associadas aos modelos tradicionais de locação. A plataforma busca oferecer uma experiência mais eficiente e conveniente para todas as partes envolvidas. O sistema Morada abordará as seguintes funcionalidades de alto nível:

• Centralização da Informação: A plataforma centralizará informações sobre imóveis disponíveis para aluguel, reunindo dados relevantes como localização, tamanho, comodidades e preços. Isso eliminará a necessidade de os locatários consultarem múltiplos sites e aplicativos, tornando o processo de busca mais ágil.

• Anúncios Eficientes: Proprietários poderão anunciar suas propriedades de maneira eficaz, eliminando a necessidade de recorrer a múltiplos canais. Isso será possível por meio de uma interface intuitiva que permite o cadastro detalhado das informações do imóvel, alcançando um amplo público de locatários em potencial.

• Personalização de Pesquisas: Os locatários poderão personalizar suas pesquisas utilizando filtros que atendam às suas necessidades específicas, como localização, tamanho do imóvel e faixa de preço. Isso reduzirá a necessidade de coletar e comparar meticulosamente os dados de diversas fontes.

• Sistema de Propostas: Os locatários poderão fazer propostas diretamente aos proprietários dos imóveis de seu interesse, agilizando o processo de negociação. Os proprietários terão a opção de aceitar ou recusar essas propostas com base em critérios específicos.

• Negociação Simplificada: Uma vez que a proposta seja aceita, o sistema facilitará uma etapa de negociação mais simplificada. Será estabelecida uma comunicação direta entre as partes, permitindo a solicitação de documentação necessária para o processo de aluguel.

• Avaliação Personalizada: Os proprietários poderão avaliar os locatários em potencial com base em critérios personalizados, como histórico de aluguel, referências e outras informações relevantes. Isso ajudará a garantir a seleção do locatário mais adequado para o imóvel.

• Documentação Online: A plataforma permitirá o envio e a análise de documentos online, eliminando a necessidade de procedimentos demorados, como assinaturas em cartório e comprovação de renda em papel.

• Acompanhamento do Processo: Tanto locatários quanto proprietários poderão acompanhar o progresso do processo de aluguel por meio da plataforma, mantendo-se atualizados sobre o processo de locação e as etapas restantes.

O sistema Morada se concentrará em simplificar a experiência de aluguel de imóveis, automatizando processos que tradicionalmente são demorados e burocráticos. Isso resultará em um ambiente mais eficiente para locatários e proprietários, proporcionando uma abordagem mais ágil e conveniente para encontrar, negociar e alugar imóveis residenciais.

Por fim, o fluxo da aplicação seguirá as seguintes etapas:

• Usuário acessa a plataforma, fornece dados pessoais (nome, data de nascimento, CPF, e-mail, telefone) para efetuar seu cadastro.

• Confirmado o cadastro, o usuário está apto a cadastrar um imóvel e/ou a realizar pesquisas personalizadas de moradias.

• Na ocorrência de interesse por um determinado imóvel, deverá propor uma oferta ao locador, da qual, após avaliação pelo proprietário, poderá ser aceita, iniciando o procedimento para a locação, ou recusada. 

• No caso de validação da proposta de oferta, as partes envolvidas se sujeitarão a uma etapa simples de negociação, havendo a solicitação de determinada documentação. Enquanto não for aprovada, o imóvel seguirá disponível a novas propostas.


### 3.3. Modelagem dos processos

[PROCESSO 1 - Verificação de usuário](processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Publicação de imóvel](processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Visita ao imóvel](processo-3-nome-do-processo.md "Detalhamento do Processo 3.")

[PROCESSO 4 - Aluguel de imóvel](processo-4-nome-do-processo.md "Detalhamento do Processo 4.")

[PROCESSO 5 - Pagamento de aluguel](processo-5-nome-do-processo.md "Detalhamento do Processo 5.")

[PROCESSO 6 - Reajuste do valor do aluguel](processo-6-nome-do-processo.md "Detalhamento do Processo 6.")

[PROCESSO 7 - Rescisão de contrato de aluguel](processo-7-nome-do-processo.md "Detalhamento do Processo 7.")

## 4. Projeto da solução

O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas cinco seções que descrevem, respectivamente: diagrama de classes, diagrama de componentes, diagrama de entidade-relacionamento, tecnologias utilizadas e guias de estilo.

[Projeto da solução](solution-design.md "Detalhamento do Projeto da solução: classes, componentes, der, tecnologias e guias de estilo.")


## 5. Indicadores de desempenho

O documento a seguir apresenta os indicadores de desempenho dos processos.

[Indicadores de desempenho dos processos](performance-indicators.md)


## 6. Interface do sistema

A sessão a seguir apresenta a descrição do produto de software desenvolvido. 

[Documentação da interface do sistema](interface.md)

## 7. Testes

A sessão a seguir apresenta a descrição dos testes de unidade e testes de usabilidade realizados. 

[Testes do sistema](tests.md)

## 8. Conclusão

_Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo._

# REFERÊNCIAS

_Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

_Verifique no link abaixo como devem ser as referências no padrão ABNT:_

http://www.pucminas.br/imagedb/documento/DOC_DSC_NOME_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES


_Atualizar os links e adicionar novos links para que a estrutura do código esteja corretamente documentada._


## Apêndice A - Código fonte

[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back)  -- repositório do código do back-end


## Apêndice B - Apresentação final


[Slides da apresentação final](presentations/arquivo.pdf)


[Vídeo da apresentação final](video/arquivo.mp4)






