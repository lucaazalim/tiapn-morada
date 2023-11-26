import * as API from "../../../assets/script/api.js";
import  generateContract  from "../../../assets/script/generateRent.js";

let offersRecived = document.getElementById("content");

API.get("offers/user")
  .then((response) => response.json())
  .then((offer) => {

    if (offer.length == 0) {
      offersRecived.innerHTML = `<p class="text-center">Você não recebeu nenhuma proposta por seus imoveis.</p>`;
      return;
    }

    offer.forEach((element) => {
      offersRecived.innerHTML += `
        <div class="mb-3 row border rounded">
            <div class="col-3">
                <img style="width: 100%; height:100%; object-fit:cover;" src="${element.photo_base64}">
            </div>
            <div class="col-9 d-flex align-items-certer">
                <div class="row d-flex align-items-center w-100">
                    <div class="col-9" id="dados">
                        <div>${element.street}</div>
                            <div>${element.type}</div>
                            <div>${formatCurrency(element.rent_value)}</div>
                        </div>
                        <div id="buttons" style="height:100%;" class="col-3 d-flex flex-column text-end justify-content-around">
                            <button class="btn btn-success btn-sm" id="accept${element.id}">Aceitar</button>
                            <button class="btn btn-danger btn-sm">Recusar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>    
            `;
            let btnAccept = document.getElementById(`accept${element.id}`);
        
            btnAccept.addEventListener("click", () => {
              console.log(element)
              generateContract(element.id)
            })
    });


});

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

