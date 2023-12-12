import * as API from '../../../assets/script/api.js';

loadProperties();

function loadProperties() {

    let propertiesElement = document.getElementById("properties");

    API.get("properties/user")
        .then(response => response.json())
        .then(properties => {

            if (properties.length == 0) {
                propertiesElement.innerHTML = `<p class="text-center">Você não possui imóveis geridos pelo Morada.</p>`;
                return;
            }

            properties.forEach(property => {

                console.log(property);

                let currentRentalId = property.currentRentalId; // TODO: pegar o id do aluguel
                let options = "";

                if (currentRentalId) {
                    options += /*html*/ `
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/dashboard/termination/create/owner/?id=${currentRentalId}&propertyId=${property.id}">Rescindir contrato de aluguel</a>
                        </div>
                    `;
                }

                propertiesElement.innerHTML += /*html*/ `
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-3">
                                <img src="${property.photoBase64}" style="width: 100%; height: 200px; object-fit: cover;">
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <span class="${API.propertyStatusMap[property.status].bgClass} text-uppercase fw-bold p-1 " style="font-size: 12px; color: white;">
                                        ${API.propertyStatusMap[property.status].label}
                                    </span>
                                    <h5 class="card-title mt-2">${property.street}, ${property.neighborhood}</h5>
                                    <p class="card-text text-truncate">${property.description}</p>
                                    <a href="/property/?id=${property.id}" class="btn btn-primary">Visualizar Imóvel</a>
                                    ${options}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            });

        });

}