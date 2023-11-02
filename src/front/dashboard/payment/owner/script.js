document.addEventListener("DOMContentLoaded", function () {
    const aprovarButton = document.querySelector('#aprovarButton');
    const rejeitarButton = document.querySelector('#rejeitarButton');
    const checkboxes = document.querySelectorAll('.form-check-input');

    function getSelectedApartments() {
        const selectedApartments = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const cardBody = checkbox.closest('.card-body');
                const apartmentTitle = cardBody.querySelector('.card-title').textContent;
                selectedApartments.push(apartmentTitle);
            }
        });

        return selectedApartments;
    }

    if (aprovarButton) {
        aprovarButton.addEventListener('click', function () {
            const selectedApartments = getSelectedApartments();
            if (selectedApartments.length > 0) {
                alert('Pagamento aprovado para os apartamentos: ' + selectedApartments.join(', '));
            } else {
                alert('Selecione um apartamento para aprovação.');
            }
        });
    }

    if (rejeitarButton) {
        rejeitarButton.addEventListener('click', function () {
            alert('Pagamento do aluguel rejeitado!');
        });
    }

});