let mapa = ".0 ... \ n.00 .. \ n .... 0 \ n ..0..\n...0.";
function limpiarCadena(mapa) {
    return mapa.replace(/ /g, "");
}
mapa = limpiarCadena(mapa);
function crearMapa(mapa) {
    let cadena = mapa.split('n');
    cadena.forEach(res => console.log(res));
}
crearMapa(mapa);
