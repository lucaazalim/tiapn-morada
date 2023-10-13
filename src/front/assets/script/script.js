import * as API from './api.js';

let pathname = window.location.pathname;

if (pathname.startsWith("/dashboard/")) {
    if (!API.isAuthenticated()) {
        window.location.href = "../login";
    }
} else if (pathname.startsWith("/login/") || pathname.startsWith("/register/")) {
    if (API.isAuthenticated()) {
        window.location.href = "../dashboard";
    }
}

loadFavicon();
loadHeader();
loadFooter();

function loadFavicon() {

    let link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    link.href = '/assets/img/favicon.png?v=1';

}

function loadHeader() {

    let headerHtml = /*html*/`
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

    if (API.isAuthenticated()) {
        loadMenu();
    }

}

function loadMenu() {

    API.get("users/me")
        .then(response => response.json())
        .then(user => {

            let menu = "";

            menu += /*html*/`
                <nav class="navbar navbar-expand-lg bg-secondary bg-opacity-25">
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
                                <li><a class="dropdown-item" href="/dashboard/property/owner">Seus Imóveis</a></li>
                                <li><a class="dropdown-item" href="/dashboard/visit/owner">Visitas Agendadas</a></li>
                                <li><a class="dropdown-item" href="/dashboard/offer/owner">Propostas Recebidas</a></li>
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
                                <li><a class="dropdown-item" href="/dashboard/property/renter">Imóveis Alugados</a></li>
                                <li><a class="dropdown-item" href="/dashboard/visit/renter">Visitas Agendadas</a></li>
                                <li><a class="dropdown-item" href="/dashboard/offer/owner">Propostas Enviadas</a></li>
                                <li><a class="dropdown-item" href="/dashboard/payment/renter">Pagamentos</a></li>
                                <li><a class="dropdown-item" href="/dashboard/renegotiation/renter">Renegociações</a></li>
                                <li><a class="dropdown-item" href="/dashboard/termination/renter">Rescisões</a></li>
                            </ul>
                        </li>
            `;

            if (user.roles.includes("ADMIN")) {

                menu += /*html*/ `
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Para Admins
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/dashboard/verification/admin">Verificações Pendentes</a></li>
                            <li><a class="dropdown-item" href="/dashboard/property/admin">Imóveis Pendentes</a></li>
                        </ul>
                    </li >
                `;

            }

            menu += /*html*/ `
                    </ul >
                    </div >
                </div >
                </nav >
            `;

            document.getElementById("header").innerHTML += menu;

        });

}

function loadFooter() {
    fetch('/assets/includes/footer.html')
        .then(response => response.text())
        .then(function (data) {
            document.getElementById('footer').innerHTML = data;
        });
}