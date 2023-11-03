# Back End

## Rotas

| Método | Rota                         | Processo | Descrição                                                          |
| ------ | ---------------------------- | -------- | ------------------------------------------------------------------ |
| POST   | `/login`                     |          | Autenticar um usuário.                                             |
| GET    | `/users/{id}`                |          | Buscar um usuário pelo ID.                                         |
| POST   | `/users`                     |          | Criar um novo usuário.                                             |
| GET    | `/users/me`                  |          | Consultar o usuário logado.                                        |
| PUT    | `/users/me`                  |          | Atualizar o usuário logado.                                        |
| POST   | `/user-verifications`        | 1        | Criar uma nova verificação de usuário.                             |
| GET    | `/user-verifications/{id}`   | 1        | Consultar verificação de usuário pelo ID.                          |
| GET    | `/user-verifications/user`   | 1        | Consultar verificações de usuário do usuário logado.               |
| PUT    | `/user-verifications/{id}`   | 1        | Atualizar verificação de usuário pelo ID.                          |
| GET    | `/properties`                | 2        | Consultar propriedades.                                            |
| GET    | `/properties/{id}`           | 2        | Consultar uma propriedade pelo ID.                                 |
| GET    | `/properties/user`           | 2        | Consultar propriedades do usuário logado.                          |
| PUT    | `/properties/{id}`           | 2        | Atualizar uma propriedade.                                         |
| POST   | `/properties`                | 2        | Criar uma nova propriedade.                                        |
| POST   | `/visits`                    | 3        | Criar uma nova visita.                                             |
| GET    | `/visits/{id}`               | 3        | Consultar uma visita pelo ID.                                      |
| GET    | `/visits/owner`              | 3        | Consultar visitas agendadas em todos os imóveis do usuário logado. |
| GET    | `/visits/renter`             | 3        | Consultar visitas agendadas pelo usuário logado.                   |
| POST   | `/offers`                    | 4        | Criar uma nova proposta.                                           |
| GET    | `/offers/{id}`               | 4        | Consultar uma proposta pelo ID.                                    |
| PUT    | `/offers/{id}`               | 4        | Atualizar uma proposta pelo ID.                                    |
| GET    | `/offers/owner`              | 4        | Consultar propostas recebidas pelo usuário logado.                 |
| GET    | `/offers/renter`             | 4        | Consultar as propostas realizadas pelo usuário logado.             |
| POST   | `/rentals`                   | 4        | Criar um novo aluguel.                                             |
| GET    | `/rentals/{id}`              | 4        | Consultar um aluguel pelo ID.                                      |
| PUT    | `/rentals/{id}`              | 4        | Atualizar um aluguel pelo ID.                                      |
| GET    | `/rentals/user`              | 4        | Consultar todos os alugueis de um usuário.                         |
| POST   | `/payments`                  | 5        | Criar um novo pagamento.                                           |
| GET    | `/payments/{id}`             | 5        | Consultar pagamento pelo ID.                                       |
| PUT    | `/payments/{id}`             | 5        | Atualizar pagamento pelo ID.                                       |
| POST   | `/renegotiations`            | 6        | Criar nova renegociação de valor do aluguel.                       |
| GET    | `/renegotiations/{id}`       | 6        | Consultar uma renegociação pelo ID.                                |
| PUT    | `/renegotiations/{id}`       | 6        | Atualizar uma renegociação pelo ID.                                |
| POST   | `/renegotiation-offers`      | 6        | Criar uma nova oferta em uma renegociação.                         |
| GET    | `/renegotiation-offers/{id}` | 6        | Consultar uma oferta em uma renegociação pelo ID.                  |
| PUT    | `/renegotiation-offers/{id}` | 6        | Atualizar uma oferta em uma renegociação pelo ID.                  |
| POST   | `/terminations`              | 7        | Criar uma nova rescisão de aluguel.                                |
| GET    | `/terminations/{id}`         | 7        | Consultar uma rescisão de aluguel pelo ID.                         |
| PUT    | `/terminations/{id}`         | 7        | Atualizar uma rescisão de aluguel pelo ID.                         |
