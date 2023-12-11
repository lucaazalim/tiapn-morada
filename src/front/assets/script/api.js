export const propertyTypeMap = {
    APARTMENT: { label: "Apartamento" },
    HOUSE: { label: "Casa" },
    STUDIO: { label: "Studio" },
};

export const propertyStatusMap = {
    PENDING_APPROVAL: { label: "Aguardando aprovação", bgClass: "bg-warning" },
    APPROVED: { label: "Aprovado", bgClass: "bg-success" },
    REJECTED: { label: "Rejeitado", bgClass: "bg-danger" },
};

export const paymentStatusMap = {
    ALLEGEDLY_PAID: { label: "Pago" },
    CONFIRMED: { label: "Confirmado" },
    REJECTED: { label: "Rejeitado" }
}

export const BASE_URL =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "http://localhost:8080"
        : "http://morada.azal.im:8080";

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
    return sendRequest("GET", route);
}

export function post(route, body = {}) {
    return sendRequest("POST", route, body);
}

export function put(route, body = {}) {
    return sendRequest("PUT", route, body);
}

export function remove(route) {
    return sendRequest("DELETE", route);
}

function sendRequest(method, route, body = {}) {

    const request = {
        method,
        headers: new Headers({
            "Content-Type": "application/json; charset=utf8",
            "Accept": "application/json",
            "Authorization": getToken()
        })
    };

    if (method !== "GET" && method !== "HEAD") {
        request.body = JSON.stringify(body);
    }

    return fetch(BASE_URL + '/' + route, request);

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

export const verificationStatusMap = {
    PENDING_APPROVAL: { label: "Pendente", txtBgClass: "text-bg-warning" },
    APPROVED: { label: "Aprovado", txtBgClass: "text-bg-success" },
    REJECTED: { label: "Rejeitado", txtBgClass: "text-bg-danger" },
};

