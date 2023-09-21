### 3.3.3 Processo 3 – Visita ao imóvel

O agendamento de visitas ao imóvel pode ser um grande empecilho para obter sucesso no processo de fechamento do contrato de aluguel, especialmente quando se trata de imobiliárias tradicionais, visto que é necessário ter um conciliamento de horários entre o futuro locatário, do proprietário/corretor e entre os diversos agendamentos realizados por outras pessoas.

Para isso, o Morada torna tudo mais ágil e eficaz para ambas as partes ao exibir um calendário com todos os horários que o proprietário/corretor tem disponível para agendamento. Isso permite que os interessados em alugar o imóvel escolham facilmente um horário que se adeque às suas necessidades, contribuindo para o sucesso no processo de fechamento de aluguel.

![Processo 3 - Visita ao imóvel](images/processo-3.png "Modelo BPMN do Processo 3.")

#### Detalhamento das atividades

**Agendar visita ao imóvel**

| **Campo**           | **Tipo**         | **Restrições**                 | **Valor default** |
| ---                 | ---              | ---                            | ---               |
| Tabela com horários | Tabela           | Apresentar semana + horários   |          -        |
| Colunas Data        | Data             |                                |          -        |
| Linhas Hora         | Hora             | Horário comercial              |          -        |
| Seleção             | Seleção única    | Evidenciar horário selecionado |          -        |


| **Comandos**         |  **Destino**                                | **Tipo**      |
| ---                  | ---                                         | ---           |
| Selecionar horário   | Seleção de horário na página                | Seleção única |
| Confirmar            | Notificar ao proprietário sobre agendamento | Seleção única |
| Cancelar             | Cancelar agendamento                        | Seleção única |


**Avaliar imóvel e visita**

| **Campo**                        | **Tipo**         | **Restrições** | **Valor default** |
| ---                              | ---              | ---            | ---               |
| Avaliação com estrelas (símbolo) | Seleção múltipla |Símbolo estrela |  Estrelas vazias  |
| Mensagem de avaliação            | Área de texto    | Caracteres     |       -           |

| **Comandos**         |  **Destino**                             | **Tipo**          |
| ---                  | ---                                      | ---               |
| Selecionar           | Acrescentar avaliação ao imóvel          | Seleção múltipla  |
| Escrever mensagem    | Acrescentar avaliação ao imóvel          | Área de texto     |
| Enviar               | Acrescentar e salvar avaliação ao imóvel | Seleção Única     |
| Fechar               | Página inicial                           | Seleção única     |
