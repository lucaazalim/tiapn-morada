import * as API from "/assets/script/api.js"
import * as PropertyCard from "/assets/components/property-card.js"

hideLoginAndRegisterButtons();
loadPropertyTypes();
loadSearchResults();

document.getElementById("search-button").addEventListener("click", loadSearchResults);

function hideLoginAndRegisterButtons() {
    if (API.isAuthenticated()) {
        document.getElementById('login-and-register-buttons').style.display = 'none';
    }
}

function loadPropertyTypes() {

    let propertyTypes = API.propertyTypeMap;

    for (const propertyTypeKey in propertyTypes) {

        document.getElementById("property-types").innerHTML += /*html*/`
            <div>
                <input class="form-check-input" type="checkbox" value="${propertyTypeKey}" checked>
                <label class="form-check-label" for="flexCheckChecked">
                    ${propertyTypes[propertyTypeKey].label}
                </label>
            </div>
        `

    }

}

function loadSearchResults() {

    let propertyTypes = [];

    document.querySelectorAll("#property-types input").forEach((input) => {
        if (input.checked) {
            propertyTypes.push(input.value);
        }
    });

    const bedrooms = document.querySelectorAll('input[name="bedrooms"]:checked')[0].value;
    const bathrooms = document.querySelectorAll('input[name="bathrooms"]:checked')[0].value;
    const garageSpaces = document.querySelectorAll('input[name="garage-spaces"]:checked')[0].value;

    const queryParams = [];

    queryParams.push(`status=APPROVED`);

    if (propertyTypes.length > 0) {
        const propertyTypesQuery = `type=${propertyTypes.join(",")}`;
        queryParams.push(propertyTypesQuery);
    }

    queryParams.push(`bedrooms=${bedrooms}`);
    queryParams.push(`bathrooms=${bathrooms}`);
    queryParams.push(`garage-spaces=${garageSpaces}`);

    API.get(`properties?${queryParams.join("&")}`)
        .then(response => response.json())
        .then(properties => {

            let searchResults = `<p class="mb-3 mt-3"><b>`;

            if (properties.length == 0) {
                searchResults += "Nenhum imóvel foi encontrado.";
            } else if (properties.length == 1) {
                searchResults += "Foi encontrado 1 imóvel.";
            } else {
                searchResults += "Foram encontrados " + properties.length + " imóveis.";
            }

            searchResults += /*html*/ `
                </b></p>
                <div class="row">
            `;

            properties.forEach(property => {

                searchResults += /*html*/ `
                    <div class="col-lg-4 col-md-12 mb-3 mb-md-0">
                        ${PropertyCard.get(property)}
                    </div>
                `;

            });

            searchResults += `</div>`;

            document.getElementById("search-results").innerHTML = searchResults;

        });

}