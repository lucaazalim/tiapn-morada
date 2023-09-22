### 3.3.5 Processo 5 – Pagamento do Aluguel

Nas imobiliárias tradicionais, o processo de Pagamento do Aluguel é ineficiente, dependendo no locatário para efetuar a comunicação do pagamento manualmente, um processo antigo e burocrático, longe de ser a melhor experiência para o usuário. 

No Morada, o processo de Pagamento do Aluguel garante simplicidade ao locatário e proprietário, entregando as informações necessárias quando chega a hora de efetuar o pagamento do aluguel e oferecendo um mecanismo de confirmação simplificado ao proprietário, garantindo uma experiência suave a nossos clientes.

![Processo 5 - Pagamento do Aluguel](images/processo-5.png "Modelo BPMN do Processo 5.")


#### Detalhamento das atividades



**Criar aviso de pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo | Seleção Única |                |                   |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Enviar | Notificar sobre o pagamento do aluguel  | Default |
| Cancelar |  Página inicial                          |      Cancel             |


**Confirmar recebimento do pagamento**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Tipo | Seleção Única  |              |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Aprovar | Página de pagamentos | Default |
| Rejeitar | Página de pagamentos |  Cancel                 |
