import * as API from '../../assets/script/api.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

API.get("properties/" + id)
    .then(response => response.json())
    .then(property => {

        let propertyElement = document.getElementById("property");

        propertyElement.innerHTML += `
            <div class="row">
                <div class="col-6">
                    <h1>${property.street}, ${property.neighborhood}</h1>
                    <p>${property.description}</p>
                </div>
                <div class="col-6">
                    <img src="${property.photoBase64}" width="100%">
                </div>
            </div>
        `;


        console.log(data);

    });