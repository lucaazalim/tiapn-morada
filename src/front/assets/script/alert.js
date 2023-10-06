const alertTimeouts = new Map();

export function alert(message, type, id = 'default', timeout = 5000) {

    id = "alert-" + id;

    dismissAlert(id);

    document.getElementById("alert").innerHTML =
        `<div id="${id}" class="alert alert-${type} alert-dismissible" role="alert">` +
        `   <div>${message}</div>` +
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '</div>';

    if (timeout) {
        alertTimeouts.set(id, setTimeout(() => {
            dismissAlert(id);
        }, 5000));
    }

}

function dismissAlert(id) {

    var alert = new bootstrap.Alert(`#${id}`);

    if (document.getElementById(id) != null) {

        alert.close();

        let alertTimeout = alertTimeouts.get(id);
        clearTimeout(alertTimeout);

    }

}