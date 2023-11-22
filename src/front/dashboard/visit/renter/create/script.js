import * as API from '../../../../assets/script/api.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Elements
let visitsForFullCalendar = [];

document.addEventListener('DOMContentLoaded', function () {
    API.get("visits/properties/" + id)
        .then(response => response.json()) 
        .then(visits => {
            if (visits.length == 0) {
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

            visits.forEach(visit => {
                visitsForFullCalendar.push({
                    start: new Date(visit.createdAt[0], visit.createdAt[1], visit.createdAt[2],
                        visit.createdAt[3], visit.createdAt[4], visit.createdAt[5])
                })
            
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
            
        });
      })
    .catch(error => {
        console.log(error)
    })
    
});
