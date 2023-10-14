import * as API from '../../../assets/script/api.js';
import * as Alert from '../../../assets/script/alert.js';

loadProperties();

function loadProperties() {

    let propertiesElement = document.getElementById("properties");

    propertiesElement.innerHTML = "";

    API.get("properties?status=PENDING_APPROVAL")
        .then(response => response.json())
        .then(properties => {

            if (properties.length == 0) {
                propertiesElement.innerHTML = `<p class="text-center">Não há imóveis aguardando aprovação.</p>`;
                return;
            }

            properties.forEach(property => {

                propertiesElement.innerHTML += /*html*/`
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-3">
                                <img src="${property.photoBase64}" width="100%">
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <h5 class="card-title">${property.street}, ${property.neighborhood}</h5>
                                    <p class="card-text text-truncate">${property.description}</p>
                                    <a href="/property/?id=${property.id}" class="btn btn-secondary">Visualizar Imóvel</a>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-success" onclick="updatePropertyStatus(${property.id}, 'APPROVED')">Aprovar</button>
                                        <button type="button" class="btn btn-danger" onclick="updatePropertyStatus(${property.id}, 'REJECTED')">Rejeitar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            });

        });

}

window.updatePropertyStatus = function (id, status) {

    API.put(
        "properties/" + id,
        { status }
    ).then(response => {
        if (response.ok) {
            loadProperties();
            Alert.alert("Status da propriedade atualizado.", "success")
        }
    });

}