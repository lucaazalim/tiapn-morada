import * as API from '../assets/script/api.js';
import * as Alert from '../assets/script/alert.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

API.get("properties/" + id)
    .then(response => {

        if (!response.ok) {
            Alert.alert("Não foi possível obter os dados deste imóvel.", "danger", "default", 0);
            throw new Error("Unable to retrieve property.");
        }

        return response;

    })
    .then(response => response.json())
    .then(property => {

        let propertyElement = document.getElementById("property");
        let totalValue = property.rentValue + property.condominiumFee + property.iptuValue;

        propertyElement.innerHTML += /*html*/ `
            <div class="row">
                <div class="col-6">
                    <div>
                        <h1>${property.street}, ${property.neighborhood}</h1>
                        <p>${property.description}</p>
                        <p class="lh-sm">
                            <span class="fs-4 fw-bold">
                                Total
                                ${formatCurrency(totalValue)}
                            </span>
                            <br>
                            <span class="fs-5 text-muted">
                                <span class="fw-bold">Aluguel</span>
                                ${formatCurrency(property.rentValue)}
                            </span>
                        </p>
                    </div>
                    <div class="row">
                        <div class="d-grid col">
                            <a class="btn btn-primary" href="/dashboard/visit/renter/create/?id=${property.id}" role="button">Agendar visita</a>
                        </div>
                        <div class="d-grid col">
                            <a class="btn btn-outline-primary" href="/dashboard/offer/renter/create/?id=${property.id}" role="button">Fazer Proposta</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <img src="${property.photoBase64}" style="width: 100%; height: 30vw; object-fit: cover;">
                </div>
            </div>
        `;

    })
    .catch(error => console.error(error));

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}