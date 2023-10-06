var alertTimeout;

export function alert(message, type, id = 'default', timeout = null) {

    id = "alert-" + id;

    dismissAlert(id);

    var alertPlaceholder = document.getElementById("alert");

    alertPlaceholder.innerHTML = [
        `<div id="${id}" class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    if (timeout) {
        alertTimeout = setTimeout(() => {
            dismissAlert(id);
        }, 5000);
    }

}

function dismissAlert(id) {

    var alert = new bootstrap.Alert(`#${id}`);

    if (document.getElementById(id) != null) {
        alert.close();
        clearTimeout(alertTimeout);
    }

}