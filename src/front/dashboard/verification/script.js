import * as API from '../../../assets/script/api.js';

showBtnCriarVerificacao();
loadVerifications();

function loadVerifications(){
    let verificationsElement = document.getElementById("verifications-results");

    API.get("user-verifications/user")
        .then(response => response.json())
        .then(verifications => {
            if(verifications.length == 0){
                verificationsElement.innerHTML = `<div class="mb-3 d-inline-flex p-2 ms-4 text-center justify-content-center rounded-1 text-bg-secondary small">Sem verificações</div>`
                return;
            }
            let i = 0;
            verifications.forEach(verification => {
                
                verificationsElement.innerHTML += `
                    <div class="card m-2" style="width: 18rem;" id="">
                        <div class="card-body">
                            <h5 class="card-title">Verificação ${++i}</h5>
                            ${verification.adminMessage !== null ? `<p class="card-text small">${verification.adminMessage}</p>` : '<p></p>'}
                            <div class="d-inline p-2 ${API.verificationStatusMap[verification.status].txtBgClass} text-white rounded-2 small">${API.verificationStatusMap[verification.status].label}</div>
                        </div>
                    </div><br>
            `
            });
            
        })
}


function showBtnCriarVerificacao() {
    let btnCriarVerificacaoElement = document.getElementById("btn-criar-verificacao");

    API.get("user-verifications/user")
        .then(response => response.json())
        .then(verifications => {
            let verificacaoAprovada = verifications.find(verification => verification.status === "APPROVED");

            if (verificacaoAprovada) {
                btnCriarVerificacaoElement.innerHTML = `  `;
            } else {
                btnCriarVerificacaoElement.innerHTML = `
                    <a href="/dashboard/verification/create" class="btn btn-primary">Realizar verificação</a><br>
                `;
            }
        })
        .catch(error => {
            console.error("Erro ao carregar verificações:", error);
        });
}
