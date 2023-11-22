import * as API from '../../../../assets/script/api.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let visitsForFullCalendar = [];

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/properties/" + id)
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
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    allDaySlot: false,
                    slotDuration: "01:00",
                    slotMinTime: "08:00:00",
                    slotMaxTime: "17:00:00",
                    height: "auto"
                
                });
                for (const event of visitsForFullCalendar) {
                    calendar.addEvent(event);
                }
                calendar.render();
            }else{

                visits.forEach(visit => {
                    let data = new Date(visit.datetime[0], visit.datetime[1]-1, visit.datetime[2],
                        visit.datetime[3], visit.datetime[4]);
                    //console.log(new Date(data.toUTCString())) //todo: para análises
                    visitsForFullCalendar.push({
                        start: new Date(data.toUTCString()) 
                    })
                
                    var calendarEl = document.getElementById('calendar');

                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        locale: 'pt-br',
                        initialView: "timeGridWeek",
                        headerToolbar: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        },
                        allDaySlot: false,
                        slotDuration: "01:00",
                        slotMinTime: "08:00:00",
                        slotMaxTime: "17:00:00",
                        height: "auto"
                    });
                    for (const event of visitsForFullCalendar) {
                        calendar.addEvent(event);
                        //console.log(event); //todo: para análises
                    }
                    calendar.render();
                
                });
            }})
        .catch(error => {
            console.log(error)
        })
});
