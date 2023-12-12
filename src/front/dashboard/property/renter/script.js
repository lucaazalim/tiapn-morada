import * as API from "../../../assets/script/api.js";
import * as Alert from "../../../../assets/script/alert.js";

let rents = document.getElementById("content");

API.get("rentals/user")
    .then((response) => response.json())
    .then((rent) => {

        if (rent.lenght == 0) {
            rents.innerHTML = `<p class="text-center">Você não recebeu nenhuma proposta por seus imoveis.</p>`;
            return;
        }

        rent.forEach(element => {

            let currentRentalId = element.id;
            let currentPropertyId = element.property.id
            let options = "";

            if (currentRentalId && element.contractSignedByOwner === true && element.contractSignedByRenter === true) {
                options += /*html*/ `
                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/dashboard/payment/renter?id=${currentRentalId}">Pagamentos</a>
                        <a class="dropdown-item" href="/dashboard/termination/create/renter/?id=${currentRentalId}&propertyId=${currentPropertyId}">Rescindir contrato de aluguel</a>
                    </div>
                `;
            } else if (currentRentalId && element.contractSignedByOwner === true) {
                options += /*html*/ `
                    <a class="btn btn-primary" href="/dashboard/rentals/renter/?id=${currentPropertyId}">Assinar contrato</a>
                `;
            }
            if (!element.terminated) {
                rents.innerHTML += /*html*/`
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-3">
                                <img src="${element.property.photoBase64}" style="width: 100%; height: 200px; object-fit: cover;">
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <h5 class="card-title mt-2">${element.property.street}, ${element.property.neighborhood}</h5>
                                    <p class="card-text text-truncate">${element.property.description}</p>
                                    <a href="/property/?id=${element.property.id}" class="btn btn-primary">Visualizar Imóvel</a>
                                    ${options}
                                </div>
                            </div>
                        </div>
                    </div>
            `
            }
        });

    })

