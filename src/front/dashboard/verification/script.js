import * as API from '../../../assets/script/api.js';

loadVerifications();

function loadVerifications(){
    let verificationsElement = document.getElementById("verifications-results");

    API.get("user-verifications/user")
        .then(response => response.json())
        .then(verifications => {
            if(verifications.length == 0){
                verificationsElement.innerHTML = `<div class="mb-3 d-inline-flex p-2 ms-4 text-center justify-content-center rounded-1 text-bg-secondary small">Sem verificações</div>`
            }
            else{
                let i = 0;
                verifications.forEach(verification => {`

                <div class="card m-2 col-md-3" style="width: 16rem;" id="">
                    <div class="card-body">
                        <h5 class="card-title">Verificação ${++i}</h5>
                        <p class="card-text small">${verification.admin_message}</p>
                        <div class="d-inline p-1 text-bg-warning text-white fw-normal fst-italic small">${verification.status}</div>
                    </div>
                </div>
                `
                });
            }
        })
}

//todo lógica de cores botões resultado