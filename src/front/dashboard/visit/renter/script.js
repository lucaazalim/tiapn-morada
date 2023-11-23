import * as API from '../../../../assets/script/api.js';



let agendamentos = document.getElementById("visits-carried-false");
let visitasrealizadas =  document.getElementById("visits-carried-true");

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/renter")
        .then(response => response.json()) 
        .then(visits => {
            visits.forEach(visit => {
                let endereco = visit.property.street + " " + visit.property.number + ", " + visit.property.complement
                let dataHora = formatarDataHora(visit.datetime)
                if(visit.datetime !== "2077-07-07 00:00:00.000"){
                    if (visit.carriedOut == 0) {
                        console.log(visit.id)
                        agendamentos.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
                            <div class="row justify-content-between text-center">
                                <div class="col-4  ms-1 text-start fw-bold">VISITA</div>
                                <div class="col-3 p-1 me-3  text-bg-warning text-white small fw-lighter">agendado</div>
                            </div>
                            <div class="d-flex">
                                <p class="m-2 fw-medium">${dataHora}</p>
                            </div>
                            <div class="d-flex">
                                <p class="m-2">${endereco}</p>
                            </div>
                            <div class="m-2">
                            <a href="#" class="btn btn-sm btn-danger" role="button" onclick="cancelarVisita(${visit.id})"><small>Cancelar</small></a>
                            </div>
                        </div>
                        <br>                    
                        `
                    }
                    if (visit.carriedOut == 1) {
                    if(visit.comments.equals(null)){

                    }else{

                    }
                    }
                }
            
            });
            })
        .catch(error => {
            console.log(error)
        })
});



function cancelarVisita(visitId) {
    //grupo: necessário ter delete mapping
    let datetime = "2077-07-07 00:00:00.000"
    API.put("visits/" + visitId, { 
        datetime})
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    alert("Visita cancelada com sucesso!")
                } else {
                    console.error('Erro ao enviar cancelamento.');
                }
            });
    }



function formatarDataHora(datetime) {
    let dataHora = new Date(datetime[0], datetime[1] - 1, datetime[2], datetime[3], datetime[4], datetime[5]);
    let diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    let nomeDiaSemana = diasSemana[dataHora.getDay()];
    let nomeMes = meses[dataHora.getMonth()];
    
    return `${nomeDiaSemana}, ${nomeMes} ${dataHora.getDate()} às ${addZero(dataHora.getHours())}:${addZero(dataHora.getMinutes())}`;    
}

function addZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}
