import * as API from '../../../assets/script/api.js';
//getVisitEventsDB();
//showCalendar();

//todo: lista de agendamentos ou calendário

function showCalendar(){
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugin: ['interaction'],
    initialView: "timeGridWeek",
    themeSystem: 'bootstrap5',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listMonth'
      },
    allDaySlot: false,
    slotDuration: "01:00",
    locale: "local",
    timeZone: "UTC",
    titleFormat: {
      year: 'numeric',
      month: 'short',
      year: 'numeric',
      day: 'numeric'
    },
    dateClick(info){
      console.log(info);
    }
     //API 
    //eventSource: [],
    //events: ,
    
    
  });


  calendar.render();

}



function getVisitEventsDB(){

    API.get("visits/propertyschedule") //todo tornar caminho publico
        .then(response => {
            console.log(response.json());
            return response.json()})

}


