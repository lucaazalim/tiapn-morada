import * as Alert from '../assets/script/alert.js';
import * as API from '../assets/script/api.js';

document.getElementById("login-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    API.post("login", {
        email,
        password
    }).then(response => {

        API.setAuthenticated(response.headers);

        if (response.ok) {

            window.location.href = "../dashboard";

        } else {

            response.json().then(data => Alert.alert(data.message, "danger"));

        }

    });

});