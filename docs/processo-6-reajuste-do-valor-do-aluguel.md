### 3.3.6 Processo 6 – Reajuste do Valor do Aluguel

![Processo 6 - Reajuste do Aluguel](images/processo-6.png "Modelo BPMN do Processo 6.")


#### Detalhamento das atividades

**Solicitar reajuste do aluguel**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
|  Valor aluguel | Numérico |   Valor positivo, menor que 10.000.000        |                   |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar | Página de aluguéis | Default |
| Cancelar          | Pagina de aluguéis  |          Cancel         |


**Análise reajuste**

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Aceitar | Página de aluguéis | Default |
| Rejeitar             |       Página de aluguéis        |   Cancel       |
