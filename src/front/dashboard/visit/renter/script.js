import * as API from '../../../../assets/script/api.js';



let agendamentos = document.getElementById("visits-carried-false");
let visitasrealizadas =  document.getElementById("visits-carried-true");
let visitasparaavaliar = document.getElementById("visits-to-rating");

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/renter")
        .then(response => response.json()) 
        .then(visits => {
            visits.forEach(visit => {
              console.log(visit)
                let endereco = visit.property.street + " " + visit.property.number + ", " + visit.property.complement
                let dataHora = formatarDataHora(visit.datetime)
                    if (visit.carriedOut == 0) {
                        //console.log(visit.id)
                        agendamentos.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
                            <div class="row justify-content-between text-center">
                                <div class="col-4  ms-1 text-start fw-bold">VISITA ${Math.floor(Math.random() * 100)}</div>
                                <div class="col-3 p-1 me-3  text-bg-warning text-white small fw-lighter">agendado</div>
                            </div>
                            <div class="d-flex">
                                <p class="m-2 fw-medium">${dataHora}</p>
                            </div>
                            <div class="d-flex">
                                <p class="m-2">${endereco}</p>
                            </div>
                            <div class="m-2">
                                <button class="btn btn-sm btn-danger" onclick="submitButton(${visit.id})"><small>Cancelar</small></button>

                            </div>
                        </div>
                        <br>                    
                        `
                    }
                    if (visit.carriedOut == 1) {
                    if(visit.comments == null && visit.visitRating == null && visit.propertyRating == null){
                        visitasparaavaliar.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
        <div class="row justify-content-between text-center "><!--gap-4-->
          <div class="col-4  ms-1 fw-bold">VISITA 32</div>
          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
        </div>
        <div class="d-flex">
          <p class="m-2 fw-medium">Sábado, Oct 28, 07:00 - 08:00</p>
        </div>
        <div class="d-flex">
          <p class="m-2">Rua Claudio Manoel 12</p>
        </div>
        <div class="d-flex m-2 mt-4">
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
        </div>
        <div class="mb-3 d-flex">
          <div class="input-group">
            <span class="input-group-text">Comentário</span>
            <textarea class="form-control" aria-label="Verfication comments"></textarea>
          </div>
        </div>
        <div class="d-grid">
          <a href="" class="btn btn-primary btn-sm" role="button">Enviar</a>
        </div>
      </div>
      <br>
    
                  `
                    }else{
                        visitasrealizadas.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
                        <div class="row justify-content-between text-center"><!--gap-4-->
                          <div class="col-4 text-start ms-1 fw-bold">VISITA ${Math.floor(Math.random() * 100)}</div>
                          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
                        </div>
                        <div class="d-flex">
                          <p class="m-2 fw-medium">${dataHora}</p>
                        </div>
                        <div class="d-flex">
                          <p class="m-2">${endereco}</p>
                        </div>
                        <div class="d-flex">
                          <p class="mt-4 ms-2 fw-bold">SUA AVALIAÇÃO</p>
                        </div>
                        <div class="d-flex align-items-center ms-2">
                           <div class="mr-2 me-2">Visita</div>
                            ${criarEstrelas(visit.visitRating)}
                        </div>
                        <div class="d-flex align-items-center ms-2">
                           <div class="mr-2 me-2">Imóvel</div>
                            ${criarEstrelas(visit.propertyRating)}
                        </div>
                        <div class="mb-3 d-flex">
                          <p class="ms-2"><small>${visit.comments}</small></p>
                        </div>
                      </div>
                      <br>
                        `
                    }}
                 });
            })
        .catch(error => {
            console.log(error)
        })
});

//necesário delete mapping
window.submitButton = function (id) {
    console.log("Canceling visit with ID:", id);
    API.remove("visits/" + id)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    alert("Visita cancelada com sucesso!")
                    location.reload();
                } else {
                    console.error('Erro ao enviar cancelamento.');
                }
          });
}


function formatarDataHora(datetime) {
    let dataHora = new Date(datetime[0], datetime[1] - 1, datetime[2], datetime[3], datetime[4]);
    let diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    let nomeDiaSemana = diasSemana[dataHora.getDay()];
    let nomeMes = meses[dataHora.getMonth()];
    
    return `${nomeDiaSemana}, ${nomeMes} ${dataHora.getDate()} às ${addZero(dataHora.getHours())}:${addZero(dataHora.getMinutes())}`;    
}

function addZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}



function criarEstrelas(nota) {
    if(nota>5)
      nota = nota / 2;  // Normalizando a nota para um intervalo de 0 a 5 (devido valores existentes de 0 a 10 no banco de dados)

    let estrelasHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= nota) {
            estrelasHtml += '<i class="fa-solid fa-star text-warning"></i>';
        } else {
            estrelasHtml += '<i class="fa-regular fa-star text-warning"></i>';
        }
    }
    return estrelasHtml;
}
/*visitasrealizadas.innerHTML += `
      <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
        <div class="row justify-content-between text-center"><!--gap-4-->
          <div class="col-4  ms-1 fw-bold">VISITA</div>
          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
        </div>
        <div class="d-flex">
          <p class="m-2 fw-medium">${dataHora}</p>
        </div>
        <div class="d-flex">
          <p class="m-2">${endereco}</p>
        </div>
        <div class="d-flex m-2 mt-4">
            ${criarEstrelas(visit.visitRating)}
        </div>
        <div class="mb-3 d-flex">
          <p class="p-2 small">${visit.comments}</p>
        </div>
      </div>
      <br>
                        ` */





/*<div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
        <div class="row justify-content-between text-center "><!--gap-4-->
          <div class="col-4  ms-1 fw-bold">VISITA 32</div>
          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
        </div>
        <div class="d-flex">
          <p class="m-2 fw-medium">Sábado, Oct 28, 07:00 - 08:00</p>
        </div>
        <div class="d-flex">
          <p class="m-2">Rua Claudio Manoel 12</p>
        </div>
        <div class="d-flex m-2 mt-4">
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
          <i class="fa-regular fa-star text-warning"></i>
        </div>
        <div class="mb-3 d-flex">
          <div class="input-group">
            <span class="input-group-text">Comentário</span>
            <textarea class="form-control" aria-label="Verfication comments"></textarea>
          </div>
        </div>
        <div class="d-grid">
          <a href="" class="btn btn-primary btn-sm" role="button">Enviar</a>
        </div>
      </div>
      <br>

      <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
        <div class="row justify-content-between text-center"><!--gap-4-->
          <div class="col-4  ms-1 fw-bold">VISITA 67</div>
          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
        </div>
        <div class="d-flex">
          <p class="m-2 fw-medium">Sábado, Oct 17, 09:00 - 10:00</p>
        </div>
        <div class="d-flex">
          <p class="m-2">Rua das Flores, 32</p>
        </div>
        <div class="d-flex m-2 mt-4">
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
        </div>
        <div class="mb-3 d-flex">
          <p class="p-2 small">Vista maravilhosa, casa excelente, móveis em perfeito estado. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perferendis, quos!</p>
        </div>
      </div>
      <br>*/