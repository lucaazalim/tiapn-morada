let isEventSelected = false; // Variável para rastrear se um evento foi selecionado

showCalendar();

function showCalendar(){
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,listMonth'
    },
    droppable: false,
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
    dateClick: function (info) {
      if (!isEventSelected) {
        var date = new Date(info.start);
        var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        document.getElementById('confirmButton').addEventListener('click', function () {
          info.backgroundColor = "#ff0066";
          info.borderColor = 'transparent'
          calendar.addEvent(info);
          confirmationModal.hide();
          isEventSelected = true; // evento selecionado pelo usuário nesse imóvel
        });
        confirmationModal.show();
      }else{
        alert("Você já selecionou um evento nesse imóvel. Para selecionar um novo evento, cancele o evento existente.");
      }
    },
    selectable: true,
    events: [ //todo: API aqui
      {
        start: '2023-10-27T13:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-10-27T10:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-10-29T09:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-10-30T15:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-11-01T09:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-11-01T10:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      },
      {
        start: '2023-11-01T13:00:00Z',
        backgroundColor: 'gray',
        borderColor: 'transparent'
      }
    ],
  });
  calendar.on('select', function(info) {
    console.log(info);
    console.log("Início: "+ info.start);
    console.log("InícioStr: "+ info.startStr);    
});
calendar.render();
}





