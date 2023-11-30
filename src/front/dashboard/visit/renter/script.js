import * as API from '../../../../assets/script/api.js';



let agendamentos = document.getElementById("visits-carried-false");

let visitasparaavaliar = document.getElementById("visits-to-rating");
let visitasrealizadas =  document.getElementById("visits-carried-true");


let visitRating = 0;
let propertyRating = 0;

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/renter")
        .then(response => response.json()) 
        .then(visits => {
            visits.forEach(visit => {
              //console.log(visit)
                let endereco = visit.property.street + " " + visit.property.number + ", " + visit.property.complement
                let dataHora = formatarDataHora(visit.datetime)
 
                // Comparando data da visita com data atual
                let dataVisita = new Date(visit.datetime[0], visit.datetime[1] - 1, visit.datetime[2], visit.datetime[3], visit.datetime[4]);
                let dataAtual = new Date();
                if(visit.carriedOut == 0){
                  if (dataVisita < dataAtual) {
                    let carriedOut = true;
                    API.put('visits/' + visit.id, {
                      carriedOut
                   })
                      .then(response => {
                          if (response.status >= 200 && response.status < 300) {
                              console.log("carriedOut alterado com sucesso.")
                              location.reload();
                          } else {
                              console.error('Erro no envio do carriedOut.');
                          }
                      });

                  } else {
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
                  }
                    
                    if (visit.carriedOut == 1) {
                    if(visit.comments == null && visit.visitRating == null && visit.propertyRating == null){
                      //console.log(visit.id);
                      visitasparaavaliar.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4" id="card${visit.id}">
        <div class="row justify-content-between text-center "><!--gap-4-->
          <div class="col-4  ms-1 text-start fw-bold">VISITA ${Math.floor(Math.random() * 100)}</div>
          <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizado</div>
        </div>
        <div class="d-flex">
          <p class="m-2 fw-medium">${dataHora}</p>
        </div>
        <div class="d-flex">
          <p class="m-2">${endereco}</p>
        </div>
        <div class="d-flex">
            <p class="mt-4 ms-2 fw-semibold">AVALIAÇÃO</p>
        </div>
        <div class="d-flex align-items-center ms-2">
            <div class="mr-2 me-2">Visita</div>
            <div class="stars-visit">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="d-flex align-items-center ms-2">
            <div class="mr-2 me-2">Imóvel</div>
            <div class="stars-imovel">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
        </div><br>
        <div class="mb-3 d-flex">
    <div class="input-group">
        <span class="input-group-text">Comentário</span>
        <textarea id="comentario-${visit.id}" class="form-control" aria-label="Verification comments"></textarea>
    </div>
</div>
<div class="d-grid">
    <a href="#" class="btn btn-primary btn-sm" role="button" onclick="avaliacaoButton(${visit.id})">Enviar</a>
</div>

      </div>
      <br>
                  `
                    }else{
                      //console.log(visit.id);
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
                          <p class="ms-2">${visit.comments}</p>
                        </div>
                      </div>
                      <br>
                        `
                    }

                    const allVisitStarContainers = document.querySelectorAll(".stars-visit");
                    allVisitStarContainers.forEach(starContainer => {
                        const stars = starContainer.querySelectorAll("i");
                        visitRating = 0;
                        stars.forEach((star, index1) => {
                            star.addEventListener("click", () => {
                              visitRating = index1 + 1;
                              console.log("Nota visita:", visitRating);
                              stars.forEach((star, index2) => {
                                  index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                                });
                            });
                        });
                    });

                    const allImovelStarContainers = document.querySelectorAll(".stars-imovel");
                    allImovelStarContainers.forEach(starContainer => {
                        const stars = starContainer.querySelectorAll("i");
                        propertyRating = 0;
                        stars.forEach((star, index1) => {
                            star.addEventListener("click", () => {
                              propertyRating = index1 + 1;
                              console.log("Nota imóvel:", propertyRating);
                              stars.forEach((star, index2) => {
                                  index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                                });
                            });
                        });
                    });
        }});
            })
        .catch(error => {
            console.log(error)
        })
});

//necesário delete mapping
window.submitButton = function (id) {
    console.log("Cancelando visita com o id:", id);
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
    
    return `${nomeDiaSemana}, ${dataHora.getDate()} de ${nomeMes} às ${addZero(dataHora.getHours())}h${addZero(dataHora.getMinutes())}`;      
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



window.avaliacaoButton = function (id) {
  console.log("Função avaliacaoButton chamada para o ID:", id);

  const commentsElement = document.querySelector(`#comentario-${id}`);
  const visitElement = document.getElementById(`card${id}`);

  const starsVisitContainer = visitElement.querySelector(".stars-visit");
  const starsImovelContainer = visitElement.querySelector(".stars-imovel");

  console.log("commentsElement:", commentsElement);
  console.log("starsVisitContainer:", starsVisitContainer);
  console.log("starsImovelContainer:", starsImovelContainer);

  const comments = commentsElement ? commentsElement.value : '';
  let visitRating = obterNotaSelecionada(starsVisitContainer);
  let propertyRating = obterNotaSelecionada(starsImovelContainer);

  console.log("visitRating:", visitRating);
  console.log("propertyRating:", propertyRating);
  console.log("comments:", comments);

  if (visitRating === null) {
      visitRating = 0;
  }
  if (propertyRating === null) {
      propertyRating = 0;
  }

  // Faça a chamada para API.put com esses dados
  API.put('visits/' + id, { visitRating, propertyRating, comments })
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              console.log("Avaliação enviada com sucesso.");
              alert("Avaliação enviada com sucesso.");
              location.reload();
          } else {
              console.error('Erro no envio da avaliação.');
          }
      });
}



function obterNotaSelecionada(container) {
  const estrelas = container.querySelectorAll("i");
  let nota = 0;

  estrelas.forEach((star, index) => {
      if (star.classList.contains("active")) {
          nota = index + 1;
      }
  });

  return nota;
}
