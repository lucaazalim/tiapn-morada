import * as API from '../../../../assets/script/api.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Elements
let visitsForFullCalendar = [];

document.addEventListener('DOMContentLoaded', function () {
    API.get("properties/" + id)
        .then(response => response.json()) 
        .then(visitsJson => {
            if (visitsJson == null) {
                var calendarEl = document.getElementById('calendar');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    locale: 'pt-br',
                    initialView: 'dayGridMonth',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }
                });
                for (const event of visitsForFullCalendar) {
                    calendar.addEvent(event);
                }
                calendar.render();
            } else {
                visitsJson.forEach(visita => {
                    visitsForFullCalendar.push({
                        start: new Date(visita.createdAt[0], visita.createdAt[1] - 1, visita.createdAt[2],
                            visita.createdAt[3], visita.createdAt[4], visita.createdAt[5])
                    });
                });

                var calendarEl = document.getElementById('calendar');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    locale: 'pt-br',
                    initialView: 'dayGridMonth',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }
                });

                for (const event of visitsForFullCalendar) {
                    calendar.addEvent(event);
                }
                calendar.render();
            }
        })
        .catch(error => {
            console.log(error);
        });
});
