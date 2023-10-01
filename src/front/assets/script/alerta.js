var alertTimeout;

export function alertar(mensagem, tipo, id = 'alerta', temporaria = true) {

    fecharAlerta();

    var alertPlaceholder = document.getElementById(id);
    var wrapper = document.createElement('div');

    wrapper.innerHTML = [
        `<div id="alert" class="alert alert-${tipo} alert-dismissible" role="alert">`,
        `   <div>${mensagem}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);

    if (temporaria) {
        alertTimeout = setTimeout(() => {
            fecharAlerta();
        }, 5000);
    }

}

function fecharAlerta() {

    var alert = new bootstrap.Alert('#alert');

    if (document.getElementById('alert') != null) {
        alert.close();
        clearTimeout(alertTimeout);
    }

}