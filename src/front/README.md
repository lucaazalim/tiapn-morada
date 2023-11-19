# Front End

## Páginas

| Caminho                                             | Título                            | Processo | Descrição                                                                               |
| --------------------------------------------------- | --------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `/`                                                 | Página Inicial                    |          | Landing Page de apresentação da plataforma.                                             |
| `/search`                                           | Busca de Imóveis                  |          | Busca de imóveis publicados.                                                            |
| `/register`                                         | Registro                          |          | Registro de novo usuário.                                                               |
| `/login`                                            | Login                             |          | Login de usuário.                                                                       |
| `/property/?id=<ID do imóvel>`                      | Detalhes do Imóvel                | 2        | Detalhes de um imóvel publicado.                                                        |
| `/dashboard`                                        | Painel do Usuário                 |          | Página inicial do Painel do Usuário.                                                    |
| `/dashboard/verification`                           | Verificação de Usuário            | 1        | Verificações enviadas por um usuário.                                                   |
| `/dashboard/verification/create`                    | Envio de Verificação de Usuário   | 1        | Formulário de envio de verificação de usuário.                                          |
| `/dashboard/verification/admin`                     | Verificações de Usuário Pendentes | 1        | Verificações pendentes de revisão por um admin.                                         |
| `/dashboard/property/owner`                         | Imóveis Publicados                | 2        | Imóveis publicados por um proprietário.                                                 |
| `/dashboard/property/owner/create`                  | Publicar Imóvel                   | 2        | Formulário de publicação de um imóvel                                                   |
| `/dashboard/property/renter`                        | Imóveis Alugados                  | 4        | Imóveis alugados por um locatário.                                                      |
| `/dashboard/property/admin`                         | Imóveis Pendentes                 | 2        | Imóveis pendentes de revisão.                                                           |
| `/dashboard/visit/owner`                            | Visitas Agendadas                 | 3        | Visitas agendadas em imóveis de um proprietário.                                        |
| `/dashboard/visit/renter`                           | Visitas Agendadas                 | 3        | Visitas agendadas por um locatário.                                                     |
| `/dashboard/visit/renter/create/?id=<ID do imóvel>` | Agendamento de Visita             | 3        | Formulário de agendamento de visita.                                                    |
| `/dashboard/offer/owner`                            | Propostas Recebidas               | 4        | Propostas recebidas por um proprietário.                                                |
| `/dashboard/offer/renter`                           | Propostas Enviadas                | 4        | Propostas enviadas por um locatário.                                                    |
| `/dashboard/offer/renter/create/?id=<ID do imóvel>` | Envio de Proposta                 | 4        | Formulário de envio de proposta.                                                        |
| `/dashboard/payment/owner/?id=<ID do aluguel>`      | Pagamentos                        | 5        | Pagamentos de um aluguel específico da visão de um proprietário.                        |
| `/dashboard/payment/renter`                         | Pagamentos                        | 5        | Formulário de criação de aviso de pagamento e histórico de avisos de pagamento criados. |
| `/dashboard/termination/create/?id=<ID do aluguel>` | Rescisões                         | 6        | Formulário de iniciação de rescisão.                                                    |

## Layout Padrão

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título da Página</title>

    <!-- Font Awesome -->
    <script
      src="https://kit.fontawesome.com/86ad24bcb9.js"
      crossorigin="anonymous"></script>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="/assets/style/custom_bootstrap.css" />
    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    <link rel="stylesheet" href="/assets/style/style.css" />
  </head>

  <body>
    <div id="header" class="mb-4"></div>

    <div class="container">
      <h1>Título da Página</h1>
      <h5>Descrição da página.</h5>
      <hr />
      <!-- Page Content -->
    </div>

    <div id="footer"></div>
  </body>

  <script type="module" src="/assets/script/script.js"></script>
  <script type="module" src="script.js"></script>
</html>
```

## Comandos Úteis

Comando para instalar dependências:

```
npm install
```

Comando para aplicar as customizações do CSS ao Bootstrap via SASS:

```
npm exec sass ./assets/style/custom_bootstrap.scss ./assets/style/custom_bootstrap.css
```
