import * as API from '../../assets/script/api.js';
import * as Alert from '../../assets/script/alert.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

API.get("properties/" + id)
    .then(response => {

        if (!response.ok) {
            Alert.alert("Unable to retrieve property.", "danger");
            throw new Error("Unable to retrieve property.");
        }

    })
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

    });