# Morada

Morada é uma plataforma para locação e anúncio de imóveis que simplifica o processo de aluguel para locatários e proprietários. Em contraste ao tradicional e burocrático mercado imobiliário, o Morada centraliza anúncios, integra processos e documentações, proporcionando uma experiência eficiente. A plataforma oferece recursos como anúncio de imóveis, personalização de pesquisas, agendamento de visitas, sistema de propostas, documentação online e acompanhamento do processo. Em resumo, busca transformar a experiência de aluguel, tornando-a mais ágil e conveniente.

## Integrantes

- Guilherme Leroy Teixeira Capanema
- João Pedro Queiroz Rocha
- Kimberly Liz Spencer Lourenço
- Luca Ferrari Azalim
- Wanessa Dias Costa

## Professor

- Eveline Alonso Veloso
- Hugo Bastos de Paula
- Juliana Amaral Baroni de Carvalho

## Instruções de utilização

A plataforma está disponível por meio do endereço [morada.azal.im](http://morada.azal.im).

Os indicadores de desempenho podem ser acessados por meio do endereço [morada.azal.im:3000](http://morada.azal.im:3000/d/f97fb6bd-4e03-49c8-8f05-d29c11036393/indicadores-de-desempenho?orgId=1), utilizando o usuário "admin" e a senha "admin". Caso a ferramente sugira a troca da senha, clique em "Skip".

---

O sistema é composto por quatro aplicações:

- MariaDB
- Back End
- Front End
- Grafana

Para executar um ambiente completo de desenvolvimento local, basta seguir os seguintes passos:

1. Clonar este repositório em seu computador
2. Acessar o diretório `/src/front` e executar o comando `npm install`
3. Instalar o [Docker Desktop](https://www.docker.com/products/docker-desktop/)
4. Executar o comando `docker-compose up --build -d` dentro do diretório `/assets/deploy`
