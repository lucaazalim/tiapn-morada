import * as API from "../../assets/script/api.js";
import * as Alert from "../../assets/script/alert.js";

API.get("users/me")
    .then(response => response.json())
    .then(user => {

        document.getElementById("name").value = user.name;
        document.getElementById("cpf").value = user.cpf;
        document.getElementById("email").value = user.email;
        document.getElementById("admin").checked = user.admin;
        document.getElementById("verified").checked = user.verified;
        document.getElementById("pix-key").value = user.pixKey;

    });

document.getElementById("my-account-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const pixKey = document.getElementById("pix-key").value;
    const password = document.getElementById("password").value;

    const data = { pixKey };

    if (password) {
        data.password = password;
    }

    API.put("users/me", data)
        .then(response => {

            if (response.ok) {
                Alert.alert("Seus dados pessoais foram atualizados.", "success");
            } else {
                Alert.alert("Não foi possível atualizar seus dados pessoais.", "danger");
            }

        });

});