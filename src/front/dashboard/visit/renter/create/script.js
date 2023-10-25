

showCalendar();

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
    slotMinTime: "08:00:00",
    slotMaxTime: "17:00:00",
    height: "auto",
    locale: "local",
    timeZone: "UTC",
    titleFormat: {
      year: 'numeric',
      month: 'short',
      year: 'numeric',
      day: 'numeric'
    },
    selectable: true,
     //API  
    //eventSource: [],
    //events: ,
    //eventColor: '#378006'
    events: [
      {
        title: 'Aniversário do Lucas',
        start: '2023-10-27T12:00:00Z'
      },
      {
        title: 'Reunião WebTech',
        start: '2023-10-27T10:00:00Z'
      }
    ],
    eventClick: function(info) {
      info.jsEvent.preventDefault();

      alert('Evento: ' + info.event.title + "\n"+ info.event.start.toLocaleString()); //todo: ou info.event.start.toUTCString() - decidir em grupo
    },
    select: function(info) {
      var modalElement = document.getElementById("modal-select-time");
      modalElement.innerHTML = '';

      modalElement.innerHTML = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${info.startStr}</p>
              <p>${info.startStr}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`;
      alert('selected ' + info.startStr + ' to ' + info.endStr);
    }

    /*dateClick: function (info) {
      alert('Clicked on: ' + info.dateStr);
      //info.dayEl.style.backgroundColor = 'red';
      console.log(info);
    }*/
  });
  //calendar.addEventSource()

  calendar.on('select', function(info) {
    console.log('Selected Start Date: ', info.startStr);
    console.log('Selected End Date: ', info.endStr);
});

  calendar.render();

}

function addEvent(event){
  calendar.addEvent(event);
}



