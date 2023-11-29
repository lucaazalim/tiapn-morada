import * as API from '../../../../assets/script/api.js';


let visitsForFullCalendar = [];

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/owner")
        .then(response => response.json()) 
        .then(visits => {
            if (visits.length == 0) {
                alert("Sem agendamentos em suas propriedades.")
            }
            visits.forEach(visit => {
                let data = new Date(visit.datetime[0], visit.datetime[1]-1, visit.datetime[2],
                    visit.datetime[3], visit.datetime[4]);
                //console.log(new Date(data.toUTCString()))
                let endereco = visit.property.street + " " + visit.property.number
                visitsForFullCalendar.push({
                    start: new Date(data.toUTCString()),
                    title: endereco,
                    color: '#ff0066'
                })
            
                var calendarEl = document.getElementById('agendamentos');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    locale: 'pt-br',
                    initialView: "listMonth",
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listMonth'
                    },
                    buttonText: {
                        today: 'Hoje',
                        month: 'Mês',
                        week: 'Semana',
                        day: 'Dia'
                    },
                    allDaySlot: false,
                    slotDuration: "01:00",
                    slotMinTime: "08:00:00",
                    slotMaxTime: "17:00:00",
                    height: "auto"
                });
                for (const event of visitsForFullCalendar) {
                    calendar.addEvent(event);
                    //console.log(event);
                }
                calendar.render();
            
            });
            })
        .catch(error => {
            console.log(error)
        })
});






let visitasrealizadas =  document.getElementById("visits-carried-true");

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/renter")
        .then(response => response.json())
        .then(visits => {
            visits.forEach(visit => {
                console.log(visit);
                let endereco = visit.property.street + " " + visit.property.number + ", " + visit.property.complement;
                let dataHora = formatarDataHora(visit.datetime);

                if (visit.carriedOut == 1 && !(visit.comments == null && visit.visitRating == null && visit.propertyRating == null)) {
                    visitasrealizadas.innerHTML += `
                        <div class="container p-4 bg-light border border-secondary-subtle border-3 m-3 col-md-4">
                            <div class="row justify-content-between text-center"><!--gap-4-->
                                <div class="col-4 text-start ms-1 fw-bold">VISITA ${Math.floor(Math.random() * 100)}</div>
                                <div class="col-3 p-1 me-3 text-bg-success text-white small fw-lighter">realizada</div>
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
                    `;
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
});



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