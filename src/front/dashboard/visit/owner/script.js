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

