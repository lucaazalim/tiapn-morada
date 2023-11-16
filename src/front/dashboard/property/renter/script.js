import * as API from "../../../assets/script/api.js";
import * as Alert from "../../../../assets/script/alert.js";

let rents = document.getElementById("content");

API.get("rentals/user")
    .then((response) => response.json())
    .then((rent) =>{

        if(rent.lenght == 0){
            rents.innerHTML = `<p class="text-center">Você não recebeu nenhuma proposta por seus imoveis.</p>`;
            return;
        }

        rent.forEach(element => {
            rents.innerHTML += 
            `
            <div>
                <div>${element.id}</div>
                <div>
                <id="buttons" style="height:100%;" class="col-3 d-flex flex-column text-end justify-content-around">
                    <button class="btn btn-success btn-sm">Aceitar</button>
                    <button class="btn btn-danger btn-sm" id=>Recusar</button>
                </div>
            </div>
            `            
        });

    })

