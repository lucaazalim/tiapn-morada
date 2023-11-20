import * as API from '../script/api.js';

export default function getPropertyCard(property) {

    if (!property.photoBase64) {
        property.photoBase64 = "assets/img/exemplo-apartamento-" + (Math.floor(Math.random() * 3) + 1) + ".jpg";
    }

    let totalValue = property.rentValue + property.condominiumFee + property.iptuValue;

    return /*html*/ `
        <div class="card mb-3">
            <img src="${property.photoBase64}" class="card-img-top" style="width: 100%; height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5>${API.propertyTypeMap[property.type].label}</h5>
                <p class="text-truncate">${property.street}, ${property.neighborhood}</p>
                <hr>
                <div class="text-muted mb-3">
                    <div class="row">
                        <div class="col">Total</div>
                        <div class="col text-end">${formatCurrency(totalValue)}</div>
                    </div>
                    <div class="row">
                        <div class="col">Aluguel</div>
                        <div class="col text-end">${formatCurrency(property.rentValue)}</div>
                    </div>
                </div>
                <div class="d-grid">
                    <a href="/property/?id=${property.id}" class="btn btn-primary">Visualizar Imóvel</a>
                </div>
            </div>
        </div>
    `;
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}