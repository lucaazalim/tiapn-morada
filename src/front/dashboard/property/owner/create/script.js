import * as Alert from '../../../../assets/script/alert.js';
import * as API from '../../../../assets/script/api.js';

const zipCodeInput = document.getElementById("zip-code");

zipCodeInput.addEventListener('change', () => {

    fetch(`https://brasilapi.com.br/api/cep/v2/${zipCodeInput.value}`)
        .then(response => {

            if (response.ok) {
                return response.json();
            }

            throw new Error("O CEP informado é inválido.");

        })
        .then(data => {

            document.getElementById("street").value = data.street;
            document.getElementById("neighborhood").value = data.neighborhood;
            document.getElementById("city").value = data.city;
            document.getElementById("state").value = data.state;

        })
        .catch(error => {

            Alert.alert(error.message, "warning");

        });

});

const photoInput = document.getElementById("photo");
var photoBase64;

photoInput.addEventListener('change', (event) => {

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        photoBase64 = reader.result;
    };

    reader.readAsDataURL(file);

});

document.getElementById("create-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const type = document.getElementById("type").value;
    const zipCode = document.getElementById("zip-code").value;
    const street = document.getElementById("street").value;
    const number = document.getElementById("number").value;
    const complement = document.getElementById("complement").value;
    const neighborhood = document.getElementById("neighborhood").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value;
    const area = document.getElementById("area").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const bathrooms = document.getElementById("bathrooms").value;
    const garageSpaces = document.getElementById("garage-spaces").value;
    const acceptsPet = document.getElementById("accepts-pet").value;
    const furnished = document.getElementById("furnished").value;
    const rentValue = document.getElementById("rent-value").value;
    const condominiumFee = document.getElementById("condominium-fee").value;
    const iptuValue = document.getElementById("iptu-value").value;

    API.post('properties', {
        type,
        zipCode,
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
        country,
        description,
        area,
        bedrooms,
        bathrooms,
        garageSpaces,
        acceptsPet,
        furnished,
        rentValue,
        condominiumFee,
        iptuValue,
        photoBase64
    })
        .then(response => {

            if (response.status == 201) {

                window.location.href = "/dashboard/property/owner";

            } else {

                let data = response.json();
                Alert.alert(data.message, "danger");

            }

        })
        .catch(error => {

            Alert.alert("Ocorreu um erro ao publicar um imóvel com os dados informados.", "danger");

        });

});