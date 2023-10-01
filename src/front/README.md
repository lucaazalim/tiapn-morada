# Front End

## Comandos Úteis

Comando para instalar dependências:

```
npm install
```

Comando para aplicar as customizações do CSS ao Bootstrap via SASS:

```
npm exec sass ./assets/style/custom_bootstrap.scss ./assets/style/custom_bootstrap.css
```

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

    <!-- Morada -->
    <link rel="stylesheet" href="/assets/style/style.css" />
  </head>

  <body>
    <div id="header"></div>
    <div id="menu"></div>

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
