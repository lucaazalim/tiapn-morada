document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.querySelector('#enviarButton');
    const cancelarButton = document.querySelector('#cancelarButton');

    if (enviarButton) {
        enviarButton.addEventListener('click', function () {
            alert('Aviso de pagamento do aluguel criado!');
        });
    }
    
    if (cancelarButton) {
        cancelarButton.addEventListener('click', function () {
            alert('Aviso de pagamento cancelado!');
        });
    }
});
