import * as Alert from '../../../../assets/script/alert.js';
import * as API from '../../../assets/script/api.js';

const rgfrontInput = document.getElementById("identity_document_front");
var identity_document_front;
rgfrontInput.addEventListener('change', (event) => {

    const fileF = event.target.files[0];
    const readerF = new FileReader();

    readerF.onloadend = () => {
        identity_document_front = readerF.result;
    };

    readerF.readAsDataURL(fileF);

});

const rgbackInput = document.getElementById("identity_document_back");
var identity_document_back;
rgbackInput.addEventListener('change', (event) => {

    const fileB = event.target.files[0];
    const readerB = new FileReader();

    readerB.onloadend = () => {
        identity_document_back = readerB.result;
    };

    readerB.readAsDataURL(fileB);

});

document.getElementById("verification-form").addEventListener("submit", function (event){
    event.preventDefault();

    API.post('user-verifications', {
        identity_document_front,
        identity_document_back
    })
        .then(response => {
            if (response.status >= 200 || response.status < 300) {
                window.location.href = "/dashboard/verification/";
            } else {
                console.error('Erro ao enviar o arquivo PDF.');
            }
        });
    });
