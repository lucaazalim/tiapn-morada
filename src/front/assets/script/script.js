loadFavicon();
loadHeader();
loadMenu();
loadFooter();

function loadFavicon() {

    let link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    link.href = '/assets/img/favicon.png?v=1';

}

function loadHeader() {

    let headerHtml = `
            <header>
                <nav class="navbar bg-morada">
                    <div class="container">

                        <a class="navbar-brand" href="/">
                            <img src="/assets/img/logo.png" alt="Morada" width="200px">
                        </a>
                    </div>
                </nav>
            </header>
    `;

    document.getElementById("header").innerHTML = headerHtml;

}

function loadMenu() {

    let menuElement = document.getElementById("menu");

    if (menuElement) {

        let menuHtml = `
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="/dashboard">Painel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Para Proprietários
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/dashboard/property/owner">Imóveis Publicados</a></li>
                            <li><a class="dropdown-item" href="/dashboard/visit/owner">Visitas</a></li>
                            <li><a class="dropdown-item" href="/dashboard/payment/owner">Pagamentos</a></li>
                            <li><a class="dropdown-item" href="/dashboard/renegotiation/owner">Renegociações</a></li>
                            <li><a class="dropdown-item" href="/dashboard/termination/owner">Rescisões</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Para Locatários
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/dashboard/verification">Verificação</a></li>
                            <li><a class="dropdown-item" href="/dashboard/visit/renter">Visitas</a></li>
                            <li><a class="dropdown-item" href="/dashboard/property/renter">Imóveis Alugados</a></li>
                            <li><a class="dropdown-item" href="/dashboard/payment/renter">Pagamentos</a></li>
                            <li><a class="dropdown-item" href="/dashboard/renegotiation/renter">Renegociações</a></li>
                            <li><a class="dropdown-item" href="/dashboard/termination/renter">Rescisões</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Para Admins
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/dashboard/verification/admin">Verificações Pendentes</a></li>
                            <li><a class="dropdown-item" href="/dashboard/property/admin">Imóveis Pendentes</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        `;

        menuElement.innerHTML = menuHtml;

    }

}

function loadFooter() {
    fetch('/assets/includes/footer.html')
        .then(response => response.text())
        .then(function (data) {
            document.getElementById('footer').innerHTML = data;
        });
}