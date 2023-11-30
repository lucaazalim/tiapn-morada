import * as API from '../../../../assets/script/api.js';

const urlParams = new URLSearchParams(window.location.search);
const propertyId = urlParams.get('id');
let quantidadeVisita = 0;

let visitsForFullCalendar = [];

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/properties/" + propertyId)
        .then(response => response.json())
        .then(visits => {
            if (visits.length == 0) {
                var calendarEl = document.getElementById('calendar');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    locale: 'pt-br',
                    initialView: "timeGridWeek",
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                    },
                    buttonText: {
                        today: 'Hoje',
                        week: 'Semana',
                        day: 'Dia'
                    },
                    allDaySlot: false,
                    slotDuration: "01:00",
                    slotMinTime: "08:00:00",
                    slotMaxTime: "17:00:00",
                    height: "auto",
                    dateClick: function (info) {
                        let formattedDate = moment(info.date).format('DD/MM/YYYY [às] HH[h]mm');
                        if (quantidadeVisita == 1) {
                            alert("Você já tem um agendamento nesta propriedade.");
                        } else {
                            if (confirm("Deseja agendar uma visita para " + formattedDate + " ?")) {
                                let date = {
                                    start: info.date,
                                    color: '#ff0066'
                                };
                                let datetime = moment(info.date).format('YYYY-MM-DDTHH:mm:ss.SSS')
                                let carriedOut = 0
                    
                                API.post('visits', {
                                    propertyId,
                                    datetime,
                                    carriedOut
                                })
                                    .then(response => {
                                        if (response.status >= 200 && response.status < 300) {
                                            alert("Agendado com sucesso!")
                                            quantidadeVisita++;
                                        } else {
                                            console.error('Erro no envio.');
                                        }
                                    });
                    
                                calendar.addEvent(date);
                                calendar.render();
                            }
                     }
                    }

                });
                for (const event of visitsForFullCalendar) {
                    calendar.addEvent(event);
                }
                calendar.render();
            } else {

                visits.forEach(visit => {
                    let data = new Date(visit.datetime[0], visit.datetime[1] - 1, visit.datetime[2],
                        visit.datetime[3], visit.datetime[4]);
                    visitsForFullCalendar.push({
                        start: new Date(data.toUTCString()),
                        color: "#7c7f83"
                    })

                    var calendarEl = document.getElementById('calendar');
                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        locale: 'pt-br',
                        initialView: "timeGridWeek",
                        headerToolbar: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay'
                        },
                        buttonText: {
                            today: 'Hoje',
                            week: 'Semana',
                            day: 'Dia'
                        },
                        allDaySlot: false,
                        slotDuration: "01:00",
                        slotMinTime: "08:00:00",
                        slotMaxTime: "17:00:00",
                        height: "auto",
                        dateClick: function (info) {
                            let formattedDate = moment(info.date).format('DD/MM/YYYY [às] HH[h]mm');

                            
                            if (quantidadeVisita == 1 ) {
                                alert("Você já tem um agendamento nesta propriedade.");
                            } else {

                            if (confirm("Deseja agendar uma visita para o dia " + formattedDate + " ?")) {
                                let date = {
                                    start: info.date,
                                    color: '#ff0066'
                                };
                                
                                let datetime = moment(info.date).format('YYYY-MM-DDTHH:mm:ss.SSS')
                                let carriedOut = 0;

                                API.post('visits', {
                                    propertyId,
                                    datetime,
                                    carriedOut
                                })
                                    .then(response => {
                                        if (response.status >= 200 && response.status < 300) {
                                            alert("Agendado com sucesso!")
                                            quantidadeVisita++;
                                        } else {
                                            console.error('Erro no envio.');
                                        }
                                });
                    
                                calendar.addEvent(date);}
                                calendar.render();
                            }
                        }
                    });
                    for (const event of visitsForFullCalendar) {
                        calendar.addEvent(event);
                    }
                    calendar.render();

                });
            }
        })
        .catch(error => {
            console.log(error)
        })
});


