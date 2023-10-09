import * as API from '../../../assets/script/api.js';

loadProperties();

function loadProperties() {

    let propertiesElement = document.getElementById("properties");

    API.get("properties/user")
        .then(response => response.json())
        .then(properties => {

            console.log(properties);

            // Loop properties
            properties.forEach(property => {

                propertiesElement.innerHTML += `
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-3">
                                <img src="${property.photoBase64}" width="100%">
                            </div>
                            <div class="col-9">
                                <div class="card-body">
                                    <h5 class="card-title">${property.street}, ${property.neighborhood}</h5>
                                    <p class="card-text">${property.description}</p>
                                    <a href="/search/property/?id=${property.id}" class="btn btn-primary">Visualizar Imóvel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

            });

        });

}