import * as Alert from '../assets/script/alert.js';
import * as API from '../assets/script/api.js';

document.getElementById("register-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    API.post("users", {
        name,
        cpf,
        email,
        password
    }).then(response => {

        if (response.ok) {

            window.location.href = "../login";

        } else {

            response.json().then(data => Alert.alert(data.message, "danger"));

        }

    });

});