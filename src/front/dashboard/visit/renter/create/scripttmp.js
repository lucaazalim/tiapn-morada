let isEventSelected = false; // Variável para rastrear se um evento foi selecionado
let calendar; // Declare calendar outside the showCalendar function


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('propertyId');
console.log(id); 


showCalendar();

function showCalendar() {
  var calendarEl = document.getElementById("calendar");
  calendar = new FullCalendar.Calendar(calendarEl, {
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
        let date = new Date(info.start);
        bootstrapRender(info);
      } else {
        alert("Você já selecionou um evento nesse imóvel. Para selecionar um novo evento, cancele o evento existente.");
      }
    },
    selectable: true,
    events: [
      
    ],
    eventSource: [
      
    ]
  });

  calendar.on('select', function(info) {
    console.log(info);
    console.log("Início: " + info.start);
    console.log("InícioStr: " + info.startStr);
  });

  calendar.render();
}

function bootstrapRender(info) {
  try {
    let confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();

    document.getElementById('confirmButton').addEventListener('click', () => {
      info.backgroundColor = "#ff0066";
      info.borderColor = 'transparent';
      calendar.addEvent(info);
      confirmationModal.hide();
      isEventSelected = true; // evento selecionado pelo usuário nesse imóvel

      
    });
  } catch (e) {
    alert(e);
  }
}
