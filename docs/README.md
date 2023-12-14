# Morada

Morada é uma plataforma para locação e anúncio de imóveis que simplifica o processo de aluguel para locatários e proprietários. Em contraste ao tradicional e burocrático mercado imobiliário, o Morada centraliza anúncios, integra processos e documentações, proporcionando uma experiência eficiente. A plataforma oferece recursos como anúncio de imóveis, personalização de pesquisas, agendamento de visitas, sistema de propostas, documentação online e acompanhamento do processo. Em resumo, busca transformar a experiência de aluguel, tornando-a mais ágil e conveniente.

## Integrantes

- [Guilherme Leroy Teixeira Capanema](https://github.com/ggleroy)
- [João Pedro Queiroz Rocha](https://github.com/JoaoPedroQueirozRocha)
- [Kimberly Liz Spencer Lourenço](https://github.com/kspencerl)
- [Luca Ferrari Azalim](https://github.com/lucaazalim)
- [Wanessa Dias Costa](https://github.com/diascw07)

---

Professores:

- Eveline Alonso Veloso
- Hugo Bastos de Paula
- Juliana Amaral Baroni de Carvalho

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

Morada é uma plataforma para locação e anúncio de imóveis que simplifica o processo de aluguel para locatários e proprietários. Em contraste ao tradicional e burocrático mercado imobiliário, o Morada centraliza anúncios, integra processos e documentações, proporcionando uma experiência eficiente. A plataforma oferece recursos como anúncio de imóveis, personalização de pesquisas, agendamento de visitas, sistema de propostas, documentação online e acompanhamento do processo. Em resumo, busca transformar a experiência de aluguel, tornando-a mais ágil e conveniente.

Como resultado relevante, o desenvolvimento da plataforma permitiu automatizar todos os processos propostos. O sistema foi desenvolvido utilizando tecnologias modernas, como Java Spring Boot, Docker e MariaDB, o que permitiu a aplicação de conhecimentos adquiridos ao longo do curso.

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

- Realizar um levantamento minucioso dos processos envolvidos na busca, seleção e locação de imóveis, identificando pontos de dificuldade e oportunidades de aprimoramento.
- Identificar as necessidades específicas dos locatários, compreendendo seus critérios de escolha, preferências de localização e requisitos essenciais, a fim de apresentar o imóvel ideal para atender a todas essas demandas de maneira precisa
- Coletar feedback dos proprietários para entender os desafios enfrentados na promoção de seus imóveis, bem como para identificar as documentações e processos necessários.
- Desenvolver um sistema de interface que permita a inserção e busca de informações por meio de campos claros e objetivos, proporcionando facilidade de uso e uma experiência intuitiva para o usuário.
- Estabelecer uma estrutura robusta de gerenciamento de documentos, permitindo o compartilhamento seguro e eficaz de informações entre as partes envolvidas, agilizando a locação.
- Utilizar os insights e feedbacks para otimizar continuamente a plataforma, adaptando-a às necessidades em evolução dos clientes e às mudanças no mercado imobiliário.

### 1.4 Justificativas

A criação da Morada tem como base a necessidade de centralizar anúncios, simplificar procedimentos e eliminar as buscas caóticas por moradias. Com a Morada, você economizará tempo, evitará erros e desfrutará de uma experiência de aluguel tranquila e agradável. A plataforma oferece recursos inovadores, como avaliações e comentários de locatários anteriores, e funcionalidades que transformam a maneira como as pessoas encontram e alugam imóveis, incluindo a integração com serviços de pagamento para agilizar aluguéis e depósitos, além da praticidade da assinatura digital de contratos e documentações.

## 2. Participantes do processo

### Locatário

- Perfil: Pessoas acima de 18 anos, especialmente jovens adultos e adultos.
- Objetivo: Encontrar imóveis que atendam às suas diversas preferências e necessidades habitacionais.
- Necessidades: Obter informações precisas sobre imóveis de maneira simples e prática e encontrar propriedades ideais aos seus critérios.

### Proprietário:

- Perfil: Indivíduos com propriedades disponíveis para aluguel.
- Objetivo: Anunciar suas propriedades e obter retorno financeiro sobre elas.
- Necessidades: Buscam inquilinos confiáveis e desejam anunciar seus imóveis de forma facilitada e eficiente a fim de alcançar um público amplo e atrair potenciais inquilinos interessados em suas propriedades

### Admin

- Perfil: Funcionários do Morada
- Objetivo: Responsáveis por avaliar publicações de imóveis e analisar solicitações dos usuários.

## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

No contexto do mercado de aluguel residencial, proprietários e locatários em potencial frequentemente se deparam com uma gama de desafios que tornam a busca e a locação de imóveis uma experiência cansativa e demorada. Isso inclui a necessidade de explorar diversos canais em busca de propriedades disponíveis, a dificuldade em anunciar imóveis de maneira eficaz e a complexidade burocrática envolvida no processo de locação.

Atualmente, os locatários em busca de moradia têm que se envolver em uma busca por imóveis utilizando uma série de fontes, incluindo os inúmeros sites imobiliários e aplicativos. A multiplicidade e descentralização da informação torna o processo exaustivo, exigindo coleta e comparação meticulosa de dados.

Por outro lado, os proprietários de imóveis precisam recorrer a múltiplos métodos para anunciar suas propriedades a fim de garantir o alcance de um amplo público e de conquistar potenciais locatários. Os locadores (proprietários de imóveis) utilizam agências imobiliárias, realizam publicações em sites especializados e até recorrem às redes sociais. Essa variedade de meios pode acarretar dificuldades na promoção de seus imóveis de modo eficaz, além de exigir investimento significativo de tempo e de recursos.

### 3.2. Descrição geral da proposta

A proposta do Morada consiste em simplificar e agilizar o processo de aluguel de imóveis, através da eliminação de burocracias impostas aos inquilinos e proprietários, como a necessidade de fiador e de assinatura em cartório, associadas aos modelos tradicionais de locação. A plataforma busca oferecer uma experiência mais eficiente e conveniente para todas as partes envolvidas. O sistema Morada abordará as seguintes funcionalidades de alto nível:

- Centralização da Informação: A plataforma centralizará informações sobre imóveis disponíveis para aluguel, reunindo dados relevantes como localização, tamanho, comodidades e preços. Isso eliminará a necessidade de os locatários consultarem múltiplos sites e aplicativos, tornando o processo de busca mais ágil.

- Anúncios Eficientes: Os proprietários poderão criar anúncios altamente informativos e visualmente atraentes para suas propriedades em poucos passos, incluindo detalhes como fotos de alta qualidade e descrições completas sobre o imóvel, o que facilitará o alcance de um público amplo de locatários em potencial.

- Personalização de Pesquisas: Os locatários poderão personalizar suas pesquisas utilizando filtros que atendam às suas necessidades específicas, como localização, tamanho do imóvel e faixa de preço, o que reduzirá a necessidade de coletar e comparar meticulosamente os dados de diversas fontes.

- Agendamento de Visitas: A plataforma permitirá que os proprietários/corretores imobiliários definam facilmente os horários disponíveis para visitas aos imóveis. Isso simplificará o processo de marcação de visitas, permitindo que os locatários escolham horários que atendam às suas necessidades.

- Sistema de Propostas: Os locatários poderão fazer propostas diretamente aos proprietários dos imóveis de seu interesse, agilizando o processo de negociação. Os proprietários terão a opção de aceitar ou recusar essas propostas com base em critérios específicos.

- Documentação Online: A plataforma permitirá o envio e a análise de documentos online, eliminando a necessidade de procedimentos demorados, como assinaturas em cartório.

- Acompanhamento do Processo: Tanto locatários quanto proprietários poderão acompanhar o progresso do processo de aluguel por meio da plataforma.

O sistema Morada se concentrará em simplificar a experiência de aluguel de imóveis, automatizando processos que tradicionalmente são demorados e burocráticos. Isso resultará em um ambiente mais eficiente para locatários e proprietários, proporcionando uma abordagem mais ágil e conveniente para encontrar, negociar e alugar imóveis residenciais.

Por fim, o fluxo da aplicação seguirá as seguintes etapas:

- Usuário acessa a plataforma, fornece dados pessoais (nome, data de nascimento, CPF, e-mail, telefone) para efetuar seu cadastro.

- Confirmado o cadastro, o usuário está apto a cadastrar um imóvel e/ou a realizar pesquisas personalizadas de moradias.

- Na ocorrência de interesse por um determinado imóvel, deverá propor uma oferta ao locador, da qual, após avaliação pelo proprietário, poderá ser aceita, iniciando o procedimento para a locação, ou recusada.

- No caso de validação da proposta de oferta, as partes envolvidas se sujeitarão a uma etapa simples de negociação, havendo a solicitação de determinada documentação. Enquanto não for aprovada, o imóvel seguirá disponível a novas propostas.

### 3.3. Modelagem dos processos

[PROCESSO 1 - Verificação de usuário](processo-1-verificação-de-usuário.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Publicação de imóvel](processo-2-publicação-de-imóvel.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Visita ao imóvel](processo-3-visita-ao-imóvel.md "Detalhamento do Processo 3.")

[PROCESSO 4 - Aluguel de imóvel](processo-4-aluguel-do-imóvel.md "Detalhamento do Processo 4.")

[PROCESSO 5 - Pagamento de aluguel](processo-5-pagamento-do-aluguel.md "Detalhamento do Processo 5.")

[PROCESSO 6 - Rescisão de contrato de aluguel](processo-6-rescisão-de-contrato-de-aluguel.md "Detalhamento do Processo 7.")

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

Com este trabalho, a equipe teve a oportunidade de desenvolver habilidades de trabalho em equipe, comunicação, organização e gerenciamento de projetos. Além disso, o projeto permitiu a aplicação de conhecimentos adquiridos ao longo do curso, como a modelagem de processos de negócio, a modelagem de dados e o desenvolvimento de software. Dentre os conhecimentos técnicos trabalhados, destacam-se: desenvolvimento de aplicações back end com Java Spring Boot, deploy de aplicações com Docker e desenvolvimento de aplicações front end com HTML, CSS e JavaScript.

Havendo a oportunidade de voltar ao desenvolvimento deste projeto no futuro, investiríamos esforços na melhoria da interface do sistema, com o objetivo de torná-la mais intuitiva e agradável para o usuário. Além disso, buscaríamos aprimorar a experiência do usuário, tornando todos os processos ainda mais simples de serem compreendidos. Por fim, buscaríamos aprimorar a segurança do sistema, por meio da implementação de verificações de autorização, garantindo que os dados dos usuários estejam protegidos.

# APÊNDICES

## Apêndice A - Código fonte

[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back) -- repositório do código do back-end

## Apêndice B - Apresentação final

[Slides da apresentação final](presentations/arquivo.pdf)

[Vídeo da apresentação final](video/arquivo.mp4)
