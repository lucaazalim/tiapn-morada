import * as API from '../../../assets/script/api.js';

//loadPendingVerifications();

function loadPendingVerifications() {

    let verificationsElement = document.getElementById("verification-forms");
    verificationsElement.innerHTML = '';

    API.get("user-verifications?status=PENDING_APPROVAL")
        .then(response => response.json())
        .then(verifications => {
              verifications.forEach(verification => {
                verificationsElement.innerHTML += `
                <div class="container p-4 bg-secondary-subtle m-3">
                  <div class="mb-3 d-inline-flex p-2  rounded-1 text-bg-secondary small">Verificação ${verification.id}</div>
                  <div class="mb-3 d-flex">
                      <button class="btn btn-light flex-grow-1" role="button">RG frente<i class="fa-solid fa-download m-2" style="color: #6c757d;"></i></button>
                  </div>
                  <div class="mb-3 d-flex">
                      <button class="btn btn-light flex-grow-1">RG verso<i class="fa-solid fa-download m-2" style="color: #6c757d;"></i></button>
                  </div>
                  <div class="mb-3 d-flex">
                      <button class="btn btn-light flex-grow-1" role="button">Comprovante de renda<i class="fa-solid fa-download m-2" style="color: #6c757d;"></i></button>
                  </div>
                  <div class="mb-3 d-flex">
                      <div class="input-group">
                          <span class="input-group-text">Comentário</span>
                          <textarea class="form-control" aria-label="Verfication comments">${verification.comments}</textarea>
                        </div>
                  </div>
                  <div class="mb-2 d-flex justify-content-center">
                    <button type="button" class="btn btn-sm btn-success m-1">Aprovar</button>
                    <button type="button" class="btn btn-sm btn-danger m-1">Rejeitar</button>
                  </div>
                  <div class="d-grid">
                      <a href="" class="btn btn-primary" role="button">Enviar</a>
                  </div>
                </div>
                <br>
                `;

        });

    });

}
