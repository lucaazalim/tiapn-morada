export var BASE_URL = "http://localhost:8080";

export function setAuthenticated(responseHeaders) {
    let key = "Authorization";
    window.localStorage.setItem(key, responseHeaders.get(key));
}

export function isAuthenticated() {
    return window.localStorage.getItem("Authorization") !== null;
}