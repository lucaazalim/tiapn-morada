import * as API from '../../../assets/script/api.js';

let offersRecived = document.getElementById("content")

API.get("offer/user")
    .then(response => response.json())
    .then(offers => {
        console.log(offers)


        if(offers.length == 0){
            offersRecived.innerHTML = `<p class="text-center">Você não recebeu nenhuma proposta</p>`;
            return;
        }

        offers.forEach(offer =>{
            offersRecived.innerHTML +=
            `<div class="row border roundeds w-auto p-3 m-2">
                <div class="col-1 d-flex justify-content-center align-content-center">
                    <img class="" style="height: 12vh;" src="${offer.photoBase64}">
                </div>
                <div class="col-11">
                    <div class="d-flex flex-row justify-content-between w-100">
                        <div class="" id="dados">
                            <div>${offer.streat}</div>
                            <div>${offers.type}</div>
                            <div>${formatCurrency(offers.rent_value)}</div>
                        </div>
                        <div id="buttons" class="col-2 d-flex flex-column text-end justify-content-around">
                            <button class="btn btn-success btn-sm">Aceitar</button>
                            <button class="btn btn-danger btn-sm">Recusar</button>
                        </div>
                    </div>
                </div>
            </div>`
        })
    
    })


function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }


