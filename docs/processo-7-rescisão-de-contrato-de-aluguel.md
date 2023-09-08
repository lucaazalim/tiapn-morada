### 3.3.1 Processo 7 – Rescisão de contrato

Uma rescisão de contrato é um procedimento formal em que uma ou ambas as partes envolvidas decidem encerrar o acordo existente. Isso pode ocorrer por uma variedade de razões, incluindo ausência de pagamento, divergências entre as partes, conclusão do processo, mudanças nas situações previstas ou simplesmente porque ambas as partes concordam que é do interesse encerrar o aluguel. 

No Morada, a rescisão do contrato ocorrerá por meio de uma notificação formal. As partes deverão cumprir todas as cláusulas contratuais relacionadas ao processo de rescisão, como prazos de aviso prévio - 30 dias de antecedência - e condições específicas de rescisão, conforme previsto no documento original. Em suma, ainda que o encerramento, geralmente, ocorra de maneira amigável, em situações de desacordo, a resolução poderá exigir mediação judiciária, a fim de encerrar a movimentação de maneira justa e legal, protegendo os direitos e interesses de ambas as partes envolvidas.

![processo-7](/docs/images/processo-7.png)

#### Detalhamento das atividades

Os tipos de dados a serem utilizados são:

**Notificar sobre rescisão do contrato**

| **Campo**       | **Tipo**     |            **Restrições**                  | **Valor default** |
| Área de texto   | Texto        | Prazo de 30 dias para finalizar o contrato.| Dias úteis        |


| **Comandos**         |  **Destino**                                         | **Tipo** |
| Mensagem             |Notificar envolvidos sobre início do processo         | Padrão   |


**Verificar as condições do contrato**

| **Campo**       | **Tipo**                        |     **Restrições**      | **Valor default** |
| Arquivo         | Comprovante de pagamentos       | Enviar em PDF           | Nenhum            |
| Data e hora     | Verificar as condições do imóvel| Horário comercial       | Horário comercial |

| **Comandos**         |  **Destino**                                         | **Tipo** |
| Mensagem             |Notificar envolvidos sobre o decorrer do processo     | Padrão   |
| Enviar               |Notificar envolvidos sobre o encerramento do contrato | Padrão   |

