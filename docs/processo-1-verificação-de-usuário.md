### 3.3.3 Processo 1 – Verificação de usuário

O processo de averiguação do indivíduo para torná-lo um futuro locatário é frequentemente complexo em imobiliárias tradicionais devido à exigência de uma série de documentações e procedimentos, o que pode ser um grande obstáculo no caminho do interessado em alugar um imóvel.

No Morada, tornamos esse processo muito mais simples. Para se tornar um locatário, o indivíduo precisará enviar apenas o RG e o comprovante de renda, ou até mesmo apenas o RG, para nossa plataforma. Esses documentos serão analisados e nossa equipe fornecerá uma resposta o mais breve possível, tornando o processo para a locação de imóveis muito mais ágil e simples.

![Processo 1 - Verificação de usuáriol](images/processo-1.png "Modelo BPMN do Processo 1.")


#### Detalhamento das atividades

**Enviar documentos**

|     **Campo**     | **Tipo**         | **Restrições**  | **Valor default** |
| ---               | ---              | ---             | ---               |
|        RG         | Imagem/Documento | png, jpg ou pdf |                   |
| Comprovante renda | Imagem/Documento | png, jpg ou pdf |                   |

| **Comandos**         |  **Destino**                          | **Tipo**          |
| ---                  | ---                                   | ---               |
| Enviar               | Notificar sobre o envio de documentos | default           |
| Cancelar             | Retornar à página inicial             | cancel            |

**Avaliar documentos do usuário**

| **Campo**             | **Tipo**              | **Restrições**      | **Valor default** |
| ---                   | ---                   | ---                 | ---               |
| Anexos                | Anexos de documentos  |  png, jpg e/ou pdf  |                   |
| Mensagem (resultado)  | Área de texto         |                     | default           |


| **Comandos**         |  **Destino**                                                | **Tipo**          |
| ---                  | ---                                                         | ---               |
| Aprovar              | Notificar resultado ao usuário e salvar dados em seu perfil | default           |
| Rejeitar             | Notificar resultado ao usuário                              |                   |
