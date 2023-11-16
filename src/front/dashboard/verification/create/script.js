import * as Alert from '../../../../assets/script/alert.js';
import * as API from '../../../assets/script/api.js';

const rgfrontInput = document.getElementById("identityDocumentFront");
var identityDocumentFront;
rgfrontInput.addEventListener('change', (event) => {

    const fileF = event.target.files[0];
    const readerF = new FileReader();

    readerF.onloadend = () => {
        identityDocumentFront = readerF.result;
    };

    readerF.readAsDataURL(fileF);

});

const rgbackInput = document.getElementById("identityDocumentBack");
var identityDocumentBack;
rgbackInput.addEventListener('change', (event) => {

    const fileB = event.target.files[0];
    const readerB = new FileReader();

    readerB.onloadend = () => {
        identityDocumentBack = readerB.result;
    };

    readerB.readAsDataURL(fileB);

});

document.getElementById("verification-form").addEventListener("submit", function (event){
    event.preventDefault();

    API.post("user-verifications", {
        identityDocumentFront,
        identityDocumentBack
    })
        .then(response => {
            if (response.status >= 200 || response.status < 300) {
                window.location.href = "/dashboard/verification/";
            } else {
                console.error('Erro ao enviar o arquivo PDF.');
            }
        });
    });
