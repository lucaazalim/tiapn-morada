export function avatarAleatorio(usuario) {
    return 'https://robohash.org/' + usuario + Date.now();
}