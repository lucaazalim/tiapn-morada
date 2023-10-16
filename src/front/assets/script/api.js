export const propertyTypeMap = {
    APARTMENT: { label: "Apartamento" },
    HOUSE: { label: "Casa" },
    STUDIO: { label: "Studio" },
}

export const propertyStatusMap = {
    PENDING_APPROVAL: { label: "Aguardando aprovação", bgClass: "bg-warning" },
    APPROVED: { label: "Aprovado", bgClass: "bg-success" },
    REJECTED: { label: "Rejeitado", bgClass: "bg-danger" },
};

export const BASE_URL = "http://localhost:8080";
const authorizationKey = "Authorization";

export function setAuthenticated(responseHeaders) {
    if (responseHeaders == null) {
        localStorage.removeItem(authorizationKey);
    } else {
        localStorage.setItem(authorizationKey, responseHeaders.get(authorizationKey));
    }
}

export function isAuthenticated() {
    return getToken() !== null;
}

function getToken() {

    try {

        const authorization = JSON.parse(localStorage.getItem(authorizationKey));

        if (!authorization || authorization.expiration < Date.now()) {
            setAuthenticated(null);
            return null;
        }

        return authorization.token;

    } catch (error) {

        setAuthenticated(null);
        return null;

    }

}

export function get(route) {

    return fetch(BASE_URL + '/' + route, {
        method: "GET",
        headers: new Headers({
            "Authorization": getToken()
        })
    });

}

export function post(route, body = {}) {

    return fetch(BASE_URL + '/' + route, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json; charset=utf8",
            "Accept": "application/json",
            "Authorization": getToken()
        }),
        body: JSON.stringify(body),
    });

}

export function put(route, body = {}) {

    console.log(body);

    return fetch(BASE_URL + '/' + route, {
        method: "PUT",
        headers: new Headers({
            "Content-Type": "application/json; charset=utf8",
            "Accept": "application/json",
            "Authorization": getToken()
        }),
        body: JSON.stringify(body),
    });

}

export function login(email, password, errorMessageConsumer = null) {

    post("login", {
        email,
        password
    }).then(response => {

        setAuthenticated(response.headers);

        if (response.ok) {

            window.location.href = "../dashboard";

        } else {

            if (errorMessageConsumer) {
                response.json().then(data => errorMessageConsumer(data.message));
            }

        }

    });

}