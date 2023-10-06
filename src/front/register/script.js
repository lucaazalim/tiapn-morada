import * as Alert from '../assets/script/alert.js';

document.getElementById("register-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        name,
        cpf,
        email,
        password
    };

    console.log(data);

    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => {

        if (response.status === 400) {

            response.json().then(data => {
                Alert.alert(data.message, "danger");
            });

        }

    }).catch(error => {
        console.log(error);
    });

});