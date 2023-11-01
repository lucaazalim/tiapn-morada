# Back End

## Rotas

| Método | Rota                       | Processo | Descrição                                                          |
| ------ | -------------------------- | -------- | ------------------------------------------------------------------ |
| POST   | `/login`                   |          | Autenticar um usuário.                                             |
| GET    | `/users/{id}`              |          | Buscar um usuário pelo ID.                                         |
| POST   | `/users`                   |          | Criar um novo usuário.                                             |
| GET    | `/users/me`                |          | Consultar o usuário logado.                                        |
| PUT    | `/users/me`                |          | Atualizar o usuário logado.                                        |
| POST   | `/user-verifications`      | 1        | Criar uma nova verificação de usuário.                             |
| GET    | `/user-verifications/{id}` | 1        | Consultar verificação de usuário pelo ID.                          |
| GET    | `/user-verifications/user` | 1        | Consultar verificações de usuário do usuário logado.               |
| PUT    | `/user-verifications/{id}` | 1        | Atualizar verificação de usuário pelo ID.                          |
| GET    | `/properties`              | 2        | Consultar propriedades.                                            |
| GET    | `/properties/{id}`         | 2        | Consultar uma propriedade pelo ID.                                 |
| GET    | `/properties/user`         | 2        | Consultar propriedades do usuário logado.                          |
| PUT    | `/properties/{id}`         | 2        | Atualizar uma propriedade.                                         |
| POST   | `/properties`              | 2        | Criar uma nova propriedade.                                        |
| POST   | `/visits`                  | 3        | Criar uma nova visita.                                             |
| GET    | `/visits/{id}`             | 3        | Consultar uma visita pelo ID.                                      |
| GET    | `/visits/owner`            | 3        | Consultar visitas agendadas em todos os imóveis do usuário logado. |
| GET    | `/visits/renter`           | 3        | Consultar visitas agendadas pelo usuário logado.                   |
| GET    | `/offers/{id}`             | 4        | Consultar uma proposta pelo ID.                                    |
| PUT    | `/offers/{id}`             | 4        | Atualizar uma proposta pelo ID.                                    |
