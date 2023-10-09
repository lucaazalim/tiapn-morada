export var BASE_URL = "http://localhost:8080";

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

    console.log(`API POST: ${route} ${JSON.stringify(body)}`);

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