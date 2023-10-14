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

export function setAuthenticated(responseHeaders) {
    let key = "Authorization";
    window.localStorage.setItem(key, responseHeaders.get(key));
}

export function isAuthenticated() {
    return getToken() !== null;
}

function getToken() {
    return window.localStorage.getItem("Authorization");
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