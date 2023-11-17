import * as API from '../../../assets/script/api.js';

loadPendingVerifications();

function loadPendingVerifications() {
  
    let verificationsElement = document.getElementById("verification-forms");
    verificationsElement.innerHTML = '';

    API.get("user-verifications/all")
        .then(response => response.json())
        .then(verifications => {
            verifications.forEach(verification => {
                verificationsElement.innerHTML += `
                    <div class="container p-4 bg-secondary-subtle m-3">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <img class="img-fluid rounded" src="${verification.identityDocumentFront}" style="width: 100%; object-fit: cover;">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <img class="img-fluid rounded" src="${verification.identityDocumentBack}" style="width: 100%; object-fit: cover;">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3 d-flex flex-column h-100">
                                    <div class="mb-3 btn-group" role="group">
                                        <input type="radio" class="btn-check" name="status_${verification.id}" id="approved_${verification.id}" value="APPROVED" autocomplete="off">
                                        <label class="btn btn-outline-secondary flex-grow-1 m-1 fst-italic" for="approved_${verification.id}">Aprovar</label>
                                        <input type="radio" class="btn-check" name="status_${verification.id}" id="rejected_${verification.id}" value="REJECTED" autocomplete="off">
                                        <label class="btn btn-outline-secondary flex-grow-1 m-1 fst-italic" for="rejected_${verification.id}">Rejeitar</label>
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" id="admin-message_${verification.id}" placeholder="Justificativa" rows="10"></textarea>
                                    </div>
                                    <div class="mt-auto d-grid pb-3">
                                        <button class="btn btn-primary" onclick="submitButton(${verification.id})">Enviar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
}

window.submitButton = function (id) {
    const approvedButton = document.getElementById(`approved_${id}`);
    const rejectedButton = document.getElementById(`rejected_${id}`);

    let selectedStatus = null;
    if (approvedButton.checked) {
        selectedStatus = 'APPROVED';
    } else if (rejectedButton.checked) {
        selectedStatus = 'REJECTED';
    } else {
        console.error('Status não selecionado.');
        return;
    }

    updateVerification(id, selectedStatus);
};

window.updateVerification = function (id, status) {
    const adminMessage = document.getElementById(`admin-message_${id}`).value;

    API.put("user-verifications/" + id, {
        status,
        adminMessage
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                window.location.href = "/dashboard/verification/admin/";
            } else {
                console.error('Erro ao enviar resultado de verificação.');
            }
        });
};
