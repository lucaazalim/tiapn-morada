import * as Alert from '../assets/script/alert.js';
import * as API from '../assets/script/api.js';

document.getElementById("login-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(API.BASE_URL + '/login', {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json; charset=utf8",
            Accept: "application/json",
        }),
        body: JSON.stringify({
            email,
            password
        }),
    }).then(response => {

        API.setAuthenticated(response.headers);

        if (response.status === 200) {

            window.location.href = "../dashboard";

        } else {

            response.json().then(data => {
                Alert.alert(data.message, "danger");
            });

        }

    }).catch(error => {
        console.log(error);
    });

});