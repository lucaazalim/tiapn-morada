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
                <div class="col-md-12 col-lg-6">
                    <h1>${API.propertyTypeMap[property.type].label} para alugar</h1>
                    <hr>
                    <h4 class="text-muted text-truncated">${property.street}, ${property.number} - ${property.neighborhood}</h4>
                    <h5 class="text-muted">${property.city}, ${property.state}</h5>
                    <hr>
                    <p class="lh-sm">
                        <span class="fs-4 fw-bold">Total ${formatCurrency(totalValue)}</span>
                        <br>
                        <span class="fs-5 text-muted">
                            <span class="fw-bold">Aluguel</span> ${formatCurrency(property.rentValue)}
                        </span>
                    </p>
                </div>
                <div class="col-md-12 col-lg-6 mt-3 mt-lg-0">
                    <img class="rounded" src="${property.photoBase64}" style="width: 100%; height: 500px; object-fit: cover;">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 col-lg-8 ">
                    <div class="d-flex justify-content-start flex-wrap row-gap-3 column-gap-5 border p-3 mb-3 rounded">
                        <div>
                            <i class="fa-solid fa-ruler me-2"></i> ${property.area} m²
                        </div>
                        <div>
                            <i class="fa-solid fa-bed me-2"></i> ${property.bedrooms} ${property.bedrooms != 1 ? "quartos" : "quarto"}
                        </div>
                        <div>
                            <i class="fa-solid fa-shower me-2"></i> ${property.bathrooms} ${property.bathrooms != 1 ? "banheiros" : "banheiro"}
                        </div>
                        <div>
                            <i class="fa-solid fa-car me-2"></i> ${property.garageSpaces} ${property.garageSpaces != 1 ? "vagas" : "vaga"}
                        </div>
                        <div>
                            <i class="fa-solid fa-paw me-2"></i> ${property.acceptsPet ? "Aceita pet" : "Não aceita pet"}
                        </div>
                        <div>
                            <i class="fa-solid fa-chair me-2"></i> ${property.furnished ? "Mobiliado" : "Sem mobília"}
                        </div>
                    </div>
                    <div class="border p-3 rounded">
                        <h4>Descrição do Proprietário</h4>
                        <span>${property.description}</span>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4 mt-3 mt-md-0">
                    <div class="bg-secondary-subtle p-3 rounded">
                        <div class="text-muted">
                            <div class="row">
                                <div class="col">Aluguel</div>
                                <div class="col text-end">${formatCurrency(property.rentValue)}</div>
                            </div>
                            <div class="row">
                                <div class="col">Condomínio</div>
                                <div class="col text-end">${formatCurrency(property.condominiumFee)}</div>
                            </div>
                            <div class="row">
                                <div class="col">IPTU</div>
                                <div class="col text-end">${formatCurrency(property.iptuValue)}</div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col">Total</div>
                            <div class="col text-end">${formatCurrency(totalValue)}</div>
                        </div>
                        <div class="row">
                            <div class="d-grid mt-3">
                                <a class="btn btn-primary w-100" href="/dashboard/visit/renter/create/?id=${property.id}" role="button"><i class="fa-regular fa-calendar me-2"></i> Agendar visita</a>
                            </div>
                            <div class="d-grid mt-3">
                                <a class="btn btn-outline-primary w-100" href="/dashboard/offer/renter/create/?id=${property.id}" role="button"><i class="fa-solid fa-money-bill me-2"></i> Fazer Proposta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    })
    .catch(error => console.error(error));

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}