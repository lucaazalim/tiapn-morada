# Front End

## Páginas

| Caminho                           | Título             | Acesso            | Descrição                                        |
| --------------------------------- | ------------------ | ----------------- | ------------------------------------------------ |
| `/`                               | Página Inicial     | Público           | Landing Page de apresentação da plataforma.      |
| `/search`                         | Busca de Imóveis   | Público           | Busca de imóveis publicados.                     |
| `/search/property`                | Detalhes do Imóvel | Público           | Detalhes de um imóvel publicado.                 |
| `/register`                       | Registro           | Usuário deslogado | Registro de novo usuário.                        |
| `/login`                          | Login              | Usuário deslogado | Login de usuário.                                |
| `/dashboard`                      | Painel do Usuário  | Usuário logado    | Página inicial do Painel do Usuário.             |
| `/dashboard/verification`         | Imóveis Pendentes  | Usuário logado    | Imóveis pendentes de revisão.                    |
| `/dashboard/verification/admin`   | Imóveis Pendentes  | Usuário logado    | Verificações pendentes de revisão.               |
| `/dashboard/property/owner`       | Imóveis Publicados | Usuário logado    | Imóveis publicados por um proprietário.          |
| `/dashboard/property/renter`      | Imóveis Alugados   | Usuário logado    | Imóveis alugados por um locatário.               |
| `/dashboard/property/admin`       | Imóveis Pendentes  | Admin             | Imóveis pendentes de revisão.                    |
| `/dashboard/visit/owner`          | Visitas Agendadas  | Usuário logado    | Visitas agendadas em imóveis de um proprietário. |
| `/dashboard/visit/renter`         | Visitas Agendadas  | Usuário logado    | Visitas agendadas por um locatário.              |
| `/dashboard/payment/owner`        | Pagamentos         | Usuário logado    | Pagamentos de imóveis de um proprietário.        |
| `/dashboard/payment/renter`       | Pagamentos         | Usuário logado    | Pagamentos de imóveis alugados por um locatário. |
| `/dashboard/renegotiation/owner`  | Renegociações      | Usuário logado    | Renegociações de um proprietário.                |
| `/dashboard/renegotiation/renter` | Renegociações      | Usuário logado    | Renegociações de um locatário.                   |
| `/dashboard/termination/owner`    | Rescisões          | Usuário logado    | Rescisões de um proprietário.                    |
| `/dashboard/termination/renter`   | Rescisões          | Usuário logado    | Rescisões de um locatário.                       |

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
    <div id="header"></div>
    <div id="menu" class="mb-4"></div>

    <div class="container">
      <h1>Título da Página</h1>
      <h5>Descrição da página.</h5>
      <hr />
      <!-- Conteúdo da Página -->
    </div>

    <div id="footer"></div>
  </body>

  <script type="module" src="/assets/script/script.js"></script>
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
