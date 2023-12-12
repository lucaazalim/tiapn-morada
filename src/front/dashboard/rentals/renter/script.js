import * as API from "../../../assets/script/api.js";
import * as Alert from "../../../assets/script/alert.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

API.get("rentals/properties/" + id)
    .then(response => {
        if (!response.ok) {
            Alert.alert("Não foi possível obter os dados deste imóvel.", "danger", "default", 0);
            throw new Error("Unable to retrieve property.");
        }

        return response;
    })
    .then(response => response.json())
    .then(rent => {

        rent.map((item) => {
            let contract = document.getElementById("contract");
            contract.innerHTML = "";
            contract.innerHTML = item.contractHtml;

            document.getElementById("btnSign").addEventListener("click", () => {
                API.put("rentals/" + item.id, {
                    contractSignedByRenter: 1
                })
                    .then(response => {
                        if (response.status >= 200 && response.status < 300) {
                            window.location.href = "/dashboard/";
                        } else {
                            console.error('Erro ao assinar o contrato.');
                        }
                    })

            })

        })

    })