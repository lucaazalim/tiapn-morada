## 5. Indicadores de desempenho

Foi elaborado um indicador de desempenho para cada um dos processos.

| Processo | Nome                                        | Objetivo                                                                                                      | Descrição                                                                                       | Fonte de Dados                   | Perspectiva               |
| -------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------- |
| 1        | Taxa de usuários verificados                | Avaliar o percentual de usuários verificados                                                                  | Percentual mensal do total de usuários cadastrados que foram verificados                        | Tabela “user”                    | Aprendizado e Crescimento |
| 2        | Taxa de imóveis rejeitados                  | Avaliar percentual de propriedades que violam regras e são rejeitadas                                         | Percentual mensal do total de imóveis cadastrados que foram rejeitados                          | Tabela “property”                | Processos internos        |
| 3        | Avaliação média das visitas                 | Melhorar a qualidade do atendimento dos proprietários de imóveis durante as visitas                           | Média aritmética mensal das avaliações das visitas realizadas pelos usuários                    | Tabela “visit”                   | Aprendizado e Crescimento |
| 4        | Valor médio de aluguel dos imóveis alugados | Acompanhar os efeitos da inflação no valor médio dos alugueis                                                 | Média aritmética mensal dos valores de aluguel                                                  | Tabela “rental”                  | Processos internos        |
| 5        | Taxa de inadimplência                       | Acompanhar taxa de inadimplência dos imóveis alugados                                                         | Percentual mensal dos imóveis alugados que não possuem avisos de pagamento confirmados          | Tabela “rental” e “payment”      | Financeiro                |
| 6        | Taxa de rescisões precoces                  | Melhorar a satisfação dos locatários por meio da redução da taxa de rescisão precoce dos contratos de aluguel | Percentual mensal de rescisões realizadas cujo período total do aluguel não ultrapassou 3 meses | Tabelas “rental” e “termination” | Aprendizado e Crescimento |

Queries SQL a serem utilizadas na plataforma Grafana para visualização dos indicadores de desempenho:

**Taxa de usuários verificados:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), '%Y-%m-01')) AS "time",
  COUNT(*) / (
    SELECT COUNT(*)
    FROM user
    WHERE YEAR(u1.created_at) = YEAR(created_at) AND MONTH(u1.created_at) = MONTH(created_at)
  ) AS "Taxa de usuários verificados",
  created_at
FROM user u1
WHERE verified = 1 AND $__timeFilter(created_at)
GROUP BY YEAR(created_at), MONTH(created_at)
```

**Taxa de imóveis rejeitados:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), '%Y-%m-01')) AS "time",
  COUNT(*) / (
    SELECT COUNT(*)
    FROM property
    WHERE YEAR(p1.created_at) = YEAR(created_at) AND MONTH(p1.created_at) = MONTH(created_at)
  ) AS "Taxa de imóveis rejeitados",
  created_at
FROM property p1
WHERE status = 'REJECTED' AND $__timeFilter(created_at)
GROUP BY YEAR(created_at), MONTH(created_at)
```

**Avaliação média das visitas:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), '%Y-%m-01')) AS "time",
  AVG(visit_rating) AS "Avaliação média das visitas",
  created_at
FROM visit
WHERE visit_rating IS NOT NULL AND $__timeFilter(created_at)
GROUP BY YEAR(created_at), MONTH(created_at)
```

**Valor médio de aluguel dos imóveis alugados:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), '%Y-%m-01')) AS "time",
  AVG(rent_value) AS "Valor médio de aluguel dos imóveis alugados",
  created_at
FROM rental
WHERE $__timeFilter(created_at)
GROUP BY YEAR(created_at), MONTH(created_at)
```

**Taxa de inadimplência:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), '%Y-%m-01')) AS time,
  1 - COUNT(*) / (
    SELECT COUNT(*)
    FROM rental
    WHERE (
      YEAR(created_at) < YEAR(p1.created_at) OR (YEAR(created_at) = YEAR(p1.created_at) AND MONTH(created_at) <= MONTH(p1.created_at)))
      AND (terminated_at IS NULL OR (YEAR(terminated_at) > YEAR(p1.created_at) OR (YEAR(terminated_at) = YEAR(p1.created_at) AND MONTH(terminated_at) >= MONTH(p1.created_at)))
    )
  ) AS "Taxa de inadimplência",
  created_at
FROM payment p1
WHERE status = 'CONFIRMED' AND $__timeFilter(created_at)
GROUP BY YEAR(created_at), MONTH(created_at)
```

**Taxa de rescisões precoces:**

```sql
SELECT
  UNIX_TIMESTAMP(FROM_UNIXTIME(UNIX_TIMESTAMP(t1.created_at), '%Y-%m-01')) AS "time",
  COUNT(*) / (
    SELECT COUNT(*)
    FROM termination t2
    WHERE YEAR(t1.created_at) = YEAR(t2.created_at) AND MONTH(t1.created_at) = MONTH(t2.created_at)
  ) AS "Taxa de rescisões preococes",
  t1.created_at
FROM termination t1
JOIN rental r1 ON r1.id = t1.rental_id
WHERE TIMESTAMPDIFF(MONTH, t1.created_at, r1.created_at) < 3 AND $__timeFilter(t1.created_at)
GROUP BY YEAR(t1.created_at), MONTH(t1.created_at)
```
